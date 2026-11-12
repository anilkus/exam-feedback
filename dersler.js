// Ders ve sınav verileri.
// Soru metinleri burada YOK, sadece konu, puan ve zorluk var.
// zorluk: 1 = kolay, 2 = orta, 3 = zor
// Not: "id" değerlerini sonradan değiştirmeyin, sıralama kayıtları bu id ile tutuluyor.

window.DERSLER = [
  {
    id: "bpr115-vize-2026",
    ad: "BPR 115 Programlama Temelleri",
    sinav: "Vize",
    konular: {
      "Algoritma, Sözde Kod ve Akış Diyagramları": "Algoritmanın temel özelliklerini ve akış diyagramı sembollerini (başla/bitir, işlem, karar, girdi/çıktı) tekrar edin. Basit bir problemi önce akış diyagramına, sonra sözde koda, en son Python koduna çevirerek pratik yapın.",
      "Python ve Geliştirme Ortamı": "PyCharm'da proje açma, dosya oluşturma ve kodu çalıştırma adımlarını kendiniz deneyin.",
      "Değişkenler, Veri Tipleri ve Tip Dönüşümü": "Python'da değişken tanımlamayı, int/str farkını ve int(), str() ile tip dönüşümünü çalışın. input() ile alınan verinin her zaman metin (str) olduğunu unutmayın.",
      "Girdi ve Çıktı (input, print)": "input() ile kullanıcıdan veri alma ve print() ile ekrana yazdırma örneklerini yazıp çalıştırın.",
      "Operatörler": "Aritmetik operatörleri (+, -, *, /, //, %, **) ve sonuçlarını küçük örneklerle deneyin. Özellikle ** (üs) ve % (mod) operatörlerine dikkat edin.",
      "Koşul Yapıları": "if / else akışını tekrar edin. Tek-çift kontrolü, büyük-küçük karşılaştırması gibi örnekleri yazın ve çıktıyı çalıştırmadan önce tahmin etmeye çalışın.",
      "Döngüler": "for döngüsünü ve range() fonksiyonunun başlangıç/bitiş değerlerini çalışın. Python'da girinti (boşluk) kurallarına dikkat edin."
    },
    sorular: [
      { no: 1,  konu: "Algoritma, Sözde Kod ve Akış Diyagramları", puan: 5,  zorluk: 1 },
      { no: 2,  konu: "Algoritma, Sözde Kod ve Akış Diyagramları", puan: 5,  zorluk: 1 },
      { no: 3,  konu: "Python ve Geliştirme Ortamı",               puan: 5,  zorluk: 1 },
      { no: 4,  konu: "Değişkenler, Veri Tipleri ve Tip Dönüşümü", puan: 5,  zorluk: 1 },
      { no: 5,  konu: "Girdi ve Çıktı (input, print)",             puan: 5,  zorluk: 1 },
      { no: 6,  konu: "Operatörler",                               puan: 5,  zorluk: 2 },
      { no: 7,  konu: "Koşul Yapıları",                            puan: 5,  zorluk: 2 },
      { no: 8,  konu: "Döngüler",                                  puan: 5,  zorluk: 2 },
      { no: 9,  konu: "Değişkenler, Veri Tipleri ve Tip Dönüşümü", puan: 10, zorluk: 2 },
      { no: 10, konu: "Değişkenler, Veri Tipleri ve Tip Dönüşümü", puan: 10, zorluk: 2 },
      { no: 11, konu: "Koşul Yapıları",                            puan: 10, zorluk: 3 },
      { no: 12, konu: "Algoritma, Sözde Kod ve Akış Diyagramları", puan: 30, zorluk: 3 }
    ]
  },
  {
    id: "wtt001-vize-2026",
    ad: "WTT001 Web Tasarım Temelleri",
    sinav: "Vize",
    konular: {
      "Web Uygulaması Geliştirme Süreci": "Bir web uygulamasının hangi adımlardan geçtiğini (tasarım, yazılım, domain, hosting) ve ön yüz (frontend) ile arka yüz (backend) ayrımını tekrar edin.",
      "Web Teknolojileri ve Diller": "HTML, CSS ve JavaScript'in görevlerini ve güncel sürümlerini (HTML5, CSS3) tekrar edin. Web dilleri ile genel programlama dillerini ayırt edebildiğinizden emin olun.",
      "Web'in Gelişimi ve Site Türleri": "Web 1.0, 2.0 ve 3.0 dönemlerinin özelliklerini ve statik ile dinamik site farkını örnek sitelerle karşılaştırarak çalışın.",
      "Temel HTML Etiketleri": "Bağlantı, liste, gömülü içerik (harita, video) ve resim haritası etiketlerini çalışın. Her etiketi küçük bir sayfada kendiniz deneyin.",
      "HTML Sayfa Yapısı (head ve body)": "Bir HTML sayfasının iskeletini ezbere yazabilecek kadar çalışın. head ve body bölümlerine neyin yazıldığını ayırt edin.",
      "Responsive Tasarım": "Sitenin farklı ekran boyutlarına uyum sağlamasının ne demek olduğunu ve bunun için kullanılan temel ayarları tekrar edin.",
      "Meta Etiketleri": "head içinde kullanılan meta etiketlerini (karakter seti, viewport, açıklama, anahtar kelimeler) ve favicon bağlantısını tek tek çalışın. Her birinin ne işe yaradığını kendi cümlelerinizle yazın."
    },
    sorular: [
      { no: 1,  konu: "Web Uygulaması Geliştirme Süreci",  puan: 5,  zorluk: 1 },
      { no: 2,  konu: "Web Teknolojileri ve Diller",       puan: 5,  zorluk: 1 },
      { no: 3,  konu: "Web'in Gelişimi ve Site Türleri",   puan: 5,  zorluk: 2 },
      { no: 4,  konu: "Web Teknolojileri ve Diller",       puan: 5,  zorluk: 1 },
      { no: 5,  konu: "Temel HTML Etiketleri",             puan: 5,  zorluk: 1 },
      { no: 6,  konu: "Web Teknolojileri ve Diller",       puan: 5,  zorluk: 1 },
      { no: 7,  konu: "Temel HTML Etiketleri",             puan: 5,  zorluk: 2 },
      { no: 8,  konu: "Web'in Gelişimi ve Site Türleri",   puan: 5,  zorluk: 1 },
      { no: 9,  konu: "Web Uygulaması Geliştirme Süreci",  puan: 5,  zorluk: 2 },
      { no: 10, konu: "HTML Sayfa Yapısı (head ve body)",  puan: 5,  zorluk: 2 },
      { no: 11, konu: "HTML Sayfa Yapısı (head ve body)",  puan: 5,  zorluk: 2 },
      { no: 12, konu: "Temel HTML Etiketleri",             puan: 5,  zorluk: 2 },
      { no: 13, konu: "Responsive Tasarım",                puan: 5,  zorluk: 2 },
      { no: 14, konu: "Temel HTML Etiketleri",             puan: 5,  zorluk: 3 },
      { no: 15, konu: "Meta Etiketleri",                   puan: 30, zorluk: 3 }
    ]
  },
  {
    id: "bpr232-vize-2026",
    ad: "BPR 232 Yapay Zekaya Giriş",
    sinav: "Vize",
    konular: {
      "Yapay Zeka Türleri ve Temel Kavramlar": "Dar, genel ve süper yapay zeka ayrımını ve Turing Testi'nin amacını tekrar edin.",
      "Yapay Zekanın Tarihi": "Yapay zekanın gelişimindeki önemli kırılma noktalarını ve gelişimin yavaşladığı dönemleri bir zaman çizelgesi çıkararak çalışın.",
      "Makine Öğrenmesi Temelleri": "Öğrenme ve makine öğrenmesi kavramlarının tanımlarını kendi cümlelerinizle yazabilecek kadar tekrar edin.",
      "Denetimli Öğrenme": "Denetimli öğrenmenin tanımını, etiketli veri kavramını ve günlük hayattan örneklerini (spam filtresi, fiyat tahmini gibi) çalışın.",
      "Aşırı Öğrenme (Overfitting)": "Modelin eğitim verisini ezberlemesi durumunu grafik üzerinden yorumlamayı ve bunu önleme yöntemlerini (daha fazla veri, düzenlileştirme, doğrulama verisi) çalışın.",
      "Optimizasyon Algoritmaları": "Sürü zekası ve evrimsel algoritmaları (genetik algoritma, arı kolonisi, karınca kolonisi, parçacık sürü) tanıyın. Karınca kolonisi algoritmasında feromon hesabını küçük bir rota problemi üzerinde adım adım tekrar edin."
    },
    sorular: [
      { no: 1,  konu: "Yapay Zeka Türleri ve Temel Kavramlar", puan: 5,  zorluk: 1 },
      { no: 2,  konu: "Optimizasyon Algoritmaları",            puan: 5,  zorluk: 2 },
      { no: 3,  konu: "Yapay Zekanın Tarihi",                  puan: 5,  zorluk: 1 },
      { no: 4,  konu: "Yapay Zekanın Tarihi",                  puan: 5,  zorluk: 1 },
      { no: 5,  konu: "Makine Öğrenmesi Temelleri",            puan: 5,  zorluk: 1 },
      { no: 6,  konu: "Yapay Zeka Türleri ve Temel Kavramlar", puan: 5,  zorluk: 1 },
      { no: 7,  konu: "Makine Öğrenmesi Temelleri",            puan: 5,  zorluk: 1 },
      { no: 8,  konu: "Denetimli Öğrenme",                     puan: 15, zorluk: 2 },
      { no: 9,  konu: "Aşırı Öğrenme (Overfitting)",           puan: 20, zorluk: 3 },
      { no: 10, konu: "Optimizasyon Algoritmaları",            puan: 30, zorluk: 3 }
    ]
  }
];
