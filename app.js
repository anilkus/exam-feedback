(function () {
  const dersler = window.DERSLER || [];
  const API = window.API_URL || "";
  const $ = (id) => document.getElementById(id);
  const form = $("form");
  const dersSec = $("ders");
  const notInput = $("not");
  const hata = $("hata");
  const rapor = $("rapor");
  let siralama = null;

  dersler.forEach((d) => {
    const opt = document.createElement("option");
    opt.value = d.id;
    opt.textContent = d.sinav ? `${d.ad} - ${d.sinav}` : d.ad;
    dersSec.appendChild(opt);
  });

  const toplamPuan = (ders) => ders.sorular.reduce((t, s) => t + s.puan, 0);
  const seciliDers = () => dersler.find((d) => d.id === dersSec.value);
  const kacis = (m) =>
    String(m).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // ---------- Sıralama ----------

  function ligTablosu(liste, tip) {
    if (!API) return `<p class="bos">Sıralama henüz etkin değil.</p>`;
    if (!liste || !liste.length) return `<p class="bos">Henüz kayıt yok. İlk sen ol!</p>`;
    let sira = 0, onceki = null;
    const satirlar = liste.slice(0, 20).map((k, i) => {
      if (k.yuzde !== onceki) { sira = i + 1; onceki = k.yuzde; }
      const madalya = ["🥇", "🥈", "🥉"][sira - 1] || sira;
      const deger = tip === "ders" ? `${k.not} / ${k.toplam}` : `%${k.yuzde}`;
      const ek = tip === "genel" ? `<td class="soluk">${k.dersSayisi} ders</td>` : "";
      return `<tr><td class="sira">${madalya}</td><td>${kacis(k.ad)}</td>${ek}<td class="deger">${deger}</td></tr>`;
    });
    return `<table class="lig"><tbody>${satirlar.join("")}</tbody></table>`;
  }

  function ligleriCiz() {
    $("genel-lig").innerHTML = ligTablosu(siralama && siralama.genel, "genel");
    const ders = seciliDers();
    $("ders-lig-kart").hidden = !ders;
    if (ders) {
      $("ders-lig-baslik").textContent = `${ders.ad} Ligi`;
      $("ders-lig").innerHTML = ligTablosu(siralama && siralama.dersler[ders.id], "ders");
    }
  }

  async function siralamaYukle() {
    if (!API) return ligleriCiz();
    try {
      const r = await fetch(API);
      siralama = await r.json();
    } catch (_) {
      siralama = null;
      $("genel-lig").innerHTML = `<p class="bos">Sıralama şu an yüklenemedi.</p>`;
      return;
    }
    ligleriCiz();
  }

  async function notKaydet(ders, ad, not) {
    const r = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ dersId: ders.id, dersAd: ders.ad, ad, not, toplam: toplamPuan(ders) }),
    });
    return r.json();
  }

  // ---------- Eksik analizi ----------
  // Öğrencinin önce kolay soruları yaptığı varsayılır. Not kolaydan zora dağıtılır,
  // puanı karşılanmayan soruların konuları eksik sayılır.
  function analiz(ders, not) {
    const sirali = [...ders.sorular].sort((a, b) => a.zorluk - b.zorluk || a.no - b.no);
    let kalan = not;
    const konular = {};
    sirali.forEach((s) => {
      const kazanilan = Math.max(0, Math.min(s.puan, kalan));
      kalan -= kazanilan;
      const k = konular[s.konu] || (konular[s.konu] = { toplam: 0, kazanilan: 0 });
      k.toplam += s.puan;
      k.kazanilan += kazanilan;
    });
    return Object.entries(konular)
      .map(([ad, v]) => ({ ad, oran: v.kazanilan / v.toplam, oneri: ders.konular[ad] || "" }))
      .sort((a, b) => a.oran - b.oran);
  }

  function seviye(oran) {
    if (oran < 0.5) return { sinif: "yuksek", metin: "Öncelikli çalış" };
    if (oran < 1) return { sinif: "orta", metin: "Tekrar et" };
    return { sinif: "iyi", metin: "İyi durumda" };
  }

  function genelMesaj(yuzde) {
    if (yuzde >= 85) return "Çok iyi bir sonuç. Aşağıdaki konuları kısaca gözden geçirmen yeterli.";
    if (yuzde >= 70) return "İyi bir sonuç. Birkaç konuyu pekiştirirsen notun daha da yükselir.";
    if (yuzde >= 50) return "Temel konular yerinde görünüyor. Kırmızı ve turuncu konulara odaklan.";
    return "Temel konulardan başlayarak düzenli tekrar yapman faydalı olur. Önce kırmızı konulara çalış.";
  }

  function raporGoster(ders, ad, not, kayit) {
    const toplam = toplamPuan(ders);
    const yuzde = Math.round((not / toplam) * 100);
    const sonuc = analiz(ders, not);
    const eksik = sonuc.filter((k) => k.oran < 1);
    const iyi = sonuc.filter((k) => k.oran >= 1);

    const konuKart = (k) => {
      const s = seviye(k.oran);
      return `
        <div class="konu ${s.sinif}">
          <div class="konu-baslik"><span>${kacis(k.ad)}</span><span class="etiket">${s.metin}</span></div>
          <div class="cubuk"><span style="width:${Math.round(k.oran * 100)}%"></span></div>
          ${k.oran < 1 && k.oneri ? `<p>${kacis(k.oneri)}</p>` : ""}
        </div>`;
    };

    let siraBilgi = "";
    if (kayit && kayit.ok) siraBilgi = `<p class="sira-bilgi">Bu derste <strong>${kayit.sira}. sıradasın</strong> (${kayit.kisi} öğrenci).</p>`;
    else if (kayit && kayit.agHatasi) siraBilgi = `<p class="hata">Notun kaydedilemedi, sıralamaya eklenmedi. Daha sonra tekrar dene.</p>`;

    rapor.innerHTML = `
      <h2>${kacis(ad)}</h2>
      <p class="ozet">${kacis(ders.ad)}${ders.sinav ? " · " + kacis(ders.sinav) : ""} · Not: <strong>${not} / ${toplam}</strong></p>
      ${siraBilgi}
      <p class="mesaj">${genelMesaj(yuzde)}</p>
      ${eksik.length ? `<h3>Çalışman gereken konular</h3>${eksik.map(konuKart).join("")}` : ""}
      ${iyi.length ? `<h3>İyi olduğun konular</h3>${iyi.map(konuKart).join("")}` : ""}
      <p class="not-bilgi">Bu rapor toplam notuna göre yapılmış bir tahmindir. Hangi soruları yanlış yaptığını kesin görmek için sınav kağıdına da bak.</p>
      <div class="butonlar">
        <button type="button" class="ikincil" onclick="window.print()">Yazdır / PDF</button>
        <button type="button" id="yeni">Yeni Sorgu</button>
      </div>`;
    rapor.hidden = false;
    form.hidden = true;
    $("yeni").onclick = () => {
      rapor.hidden = true;
      form.hidden = false;
      form.reset();
      hata.textContent = "";
      ligleriCiz();
    };
    rapor.scrollIntoView({ behavior: "smooth" });
  }

  // ---------- Olaylar ----------

  dersSec.addEventListener("change", () => {
    const ders = seciliDers();
    if (ders) {
      const t = toplamPuan(ders);
      notInput.max = t;
      notInput.placeholder = `0 - ${t}`;
    }
    ligleriCiz();
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    hata.textContent = "";
    const ders = seciliDers();
    const ad = $("ad").value.replace(/\s+/g, " ").trim();
    const not = Number(notInput.value);

    if (!ders) return (hata.textContent = "Lütfen bir ders seçin.");
    if (ad.length < 3 || !ad.includes(" ")) return (hata.textContent = "Lütfen adınızı ve soyadınızı girin.");
    const toplam = toplamPuan(ders);
    if (notInput.value === "" || !Number.isFinite(not) || not < 0 || not > toplam)
      return (hata.textContent = `Not 0 ile ${toplam} arasında olmalı.`);
    if (!$("onay").checked) return (hata.textContent = "Notunun doğru olduğunu onaylaman gerekiyor.");

    let kayit = null;
    if (API) {
      const btn = $("gonder");
      btn.disabled = true;
      btn.textContent = "Kaydediliyor...";
      try {
        kayit = await notKaydet(ders, ad, not);
      } catch (_) {
        kayit = { agHatasi: true };
      }
      btn.disabled = false;
      btn.textContent = "Raporumu Göster";
      if (kayit && kayit.ok === false) return (hata.textContent = kayit.hata);
    }

    raporGoster(ders, ad, not, kayit);
    siralamaYukle();
  });

  siralamaYukle();
})();
