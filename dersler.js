// Ders ve sınav verileri.
// Soru metinleri burada YOK, sadece konu, puan, zorluk ve çalışma tavsiyeleri var.
// zorluk: 1 = kolay, 2 = orta, 3 = zor
// Her konu için: bil (bilmen gerekenler), calis (şunlara çalış), alistirma (alıştırma yap)
// Not: "id" değerlerini sonradan değiştirmeyin, sıralama kayıtları bu id ile tutuluyor.

window.DERSLER = [
  {
    id: "bpr115-vize-2026",
    ad: "BPR 115 Programlama Temelleri",
    sinav: "Vize",
    konular: {
      "Algoritma, Sözde Kod ve Akış Diyagramları": {
        bil: [
          "Algoritmanın özellikleri: belirli bir başlangıcı ve bitişi vardır, adımları açık ve nettir, sonludur (sonsuz döngüye girmez), girdi alabilir ve bir sonuç üretir.",
          "Akış diyagramı sembolleri: oval = başla/bitir, dikdörtgen = işlem, paralelkenar = girdi/çıktı, elmas (eşkenar dörtgen) = karar.",
          "Sözde kod, herhangi bir programlama diline bağlı olmadan günlük dile yakın yazılan algoritma adımlarıdır."
        ],
        calis: [
          "Sembolleri ve ne işe yaradıklarını ezberle.",
          "Verilen bir akış diyagramını parmağınla adım adım takip edip ne yaptığını söylemeyi dene.",
          "Akış diyagramı > sözde kod > Python kodu çevirisini sırayla yapmayı çalış."
        ],
        alistirma: [
          "İki sayıdan büyük olanı bulan programın akış diyagramını, sözde kodunu ve Python kodunu yaz.",
          "1'den N'e kadar sayıların toplamını bulan program için aynısını yap.",
          "Not ortalaması 50 ve üzeriyse 'Geçti', değilse 'Kaldı' yazan algoritmayı çiz."
        ]
      },
      "Python ve Geliştirme Ortamı": {
        bil: [
          "IDE, kod yazmak, düzenlemek, çalıştırmak ve hata ayıklamak için kullanılan geliştirme ortamıdır.",
          "PyCharm, Python için geliştirilmiş bir IDE'dir."
        ],
        calis: [
          "PyCharm'da proje açma, yeni .py dosyası oluşturma ve çalıştırma adımlarını kendin yap.",
          "Hata mesajlarını okumayı öğren: hangi satırda ve hangi tür hata olduğunu bul."
        ],
        alistirma: [
          "Yeni bir proje açıp ekrana adını yazdıran bir program çalıştır.",
          "Bilerek hatalı bir satır yaz (örneğin parantezi kapatma) ve PyCharm'ın verdiği hatayı incele."
        ]
      },
      "Değişkenler, Veri Tipleri ve Tip Dönüşümü": {
        bil: [
          "Python'da değişken tipi yazılmaz: x = 5 yeterlidir. 'int x = 5;' veya 'var x = 5' başka dillere aittir.",
          "Temel tipler: int (tam sayı), float (ondalıklı), str (metin), bool (True/False).",
          "input() her zaman metin (str) döndürür. Sayı olarak kullanmak için int() ile dönüştürmen gerekir.",
          "Metin ile sayı toplanamaz, Python hata (TypeError) verir. \"10\" + \"123\" sonucu \"10123\" olur, int(\"10\") + int(\"123\") sonucu ise 133 olur."
        ],
        calis: [
          "int(), float() ve str() dönüşümlerini çalış.",
          "type() fonksiyonu ile bir değişkenin tipini öğrenmeyi dene.",
          "Bir kodu çalıştırmadan önce her satırda değişkenin tipinin ne olduğunu kağıda yaz."
        ],
        alistirma: [
          "Kullanıcıdan yaşını alıp 5 yıl sonraki yaşını yazdıran programı önce int() olmadan, sonra int() ile çalıştır ve farkı gör.",
          "İki sayıyı metin olarak tanımla, önce doğrudan topla, sonra int() ile çevirip topla.",
          "Farklı tipte 4 değişken tanımlayıp hepsinin tipini type() ile yazdır."
        ]
      },
      "Girdi ve Çıktı (input, print)": {
        bil: [
          "input() kullanıcıdan veri alır, print() ekrana yazdırır.",
          "print(\"Merhaba\", isim) şeklinde virgülle yazılan değerler arasına otomatik boşluk konur."
        ],
        calis: [
          "input() içine kullanıcıya gösterilecek mesajı yazmayı çalış.",
          "print() ile metin ve değişkeni birlikte yazdırmayı dene."
        ],
        alistirma: [
          "Kullanıcının adını ve doğum yılını alıp 'Merhaba Ali, 20 yaşındasın' yazdıran bir program yaz.",
          "İki sayı alıp toplamını, farkını ve çarpımını alt alta yazdır."
        ]
      },
      "Operatörler": {
        bil: [
          "+ toplama, - çıkarma, * çarpma, / bölme, // tam bölme, % mod (kalan), ** üs alma.",
          "Örnekler: 5 ** 2 = 25, 7 // 2 = 3, 7 % 2 = 1, 7 / 2 = 3.5",
          "== karşılaştırmadır (eşit mi?), = ise atamadır (değer ver)."
        ],
        calis: [
          "Özellikle ** ve % operatörlerine dikkat et, sık karıştırılır.",
          "İşlem önceliğini tekrar et: önce üs, sonra çarpma/bölme, en son toplama/çıkarma."
        ],
        alistirma: [
          "Yukarıdaki örneklerin sonucunu önce kağıtta tahmin et, sonra Python'da çalıştırıp kontrol et.",
          "Bir sayının son basamağını % 10 ile bulan bir program yaz.",
          "Kenar uzunluğu girilen bir karenin alanını ** kullanarak hesapla."
        ]
      },
      "Koşul Yapıları": {
        bil: [
          "if koşul: ... else: ... yapısında iki nokta (:) ve girinti zorunludur.",
          "sayi % 2 == 0 ifadesi sayının çift olup olmadığını kontrol eder.",
          "random.randint(1, 5) 1 ile 5 arasında (1 ve 5 dahil) rastgele bir tam sayı üretir. Kullanmadan önce import random yazılır."
        ],
        calis: [
          "if, elif, else farkını çalış.",
          "Bir kodun hangi koşula gireceğini değişken değerlerini takip ederek bulmayı dene.",
          "Bir koşulun hiç doğru olamayacağı durumları fark etmeye çalış."
        ],
        alistirma: [
          "Girilen sayının tek mi çift mi olduğunu yazan programı yaz.",
          "Girilen nota göre harf notu (AA, BA, BB...) veren programı yaz.",
          "random ile 1-10 arası sayı üret, 5'ten büyükse 'Büyük', değilse 'Küçük' yazdır. Birkaç kez çalıştırıp sonuçları gözlemle."
        ]
      },
      "Döngüler": {
        bil: [
          "range(1, 6) 1, 2, 3, 4, 5 üretir. Bitiş değeri dahil değildir.",
          "range(5) 0'dan başlar: 0, 1, 2, 3, 4.",
          "Döngünün içindeki satırlar girintili yazılmalıdır, yoksa Python hata (IndentationError) verir."
        ],
        calis: [
          "range() fonksiyonunun başlangıç, bitiş ve adım değerlerini çalış.",
          "Girinti kurallarına dikkat et. Hangi satırın döngünün içinde olduğunu girintiden anlarsın."
        ],
        alistirma: [
          "1'den 10'a kadar sayıları yazdır.",
          "1-100 arasındaki çift sayıları yazdır.",
          "Kullanıcının girdiği sayının çarpım tablosunu yazdır."
        ]
      }
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
      "Web Uygulaması Geliştirme Süreci": {
        bil: [
          "Bir web uygulaması planlama ve görsel tasarım, yazılım, domain alma, hosting kiralama ve yayına alma adımlarından geçer. Reklam çalışmaları geliştirme değil, pazarlama işidir.",
          "Frontend (ön yüz) kullanıcının gördüğü kısımdır: HTML, CSS, JavaScript.",
          "Backend (arka yüz) sunucuda çalışan kısımdır: PHP, Python, Node.js, veritabanı gibi."
        ],
        calis: [
          "Geliştirme adımlarını sırasıyla ezberle.",
          "Frontend ve backend'e hangi teknolojilerin girdiğini ayırt etmeyi çalış."
        ],
        alistirma: [
          "Sık kullandığın bir siteyi seç (örneğin bir e-ticaret sitesi). Frontend'de ve backend'de neler olabileceğini iki liste halinde yaz."
        ]
      },
      "Web Teknolojileri ve Diller": {
        bil: [
          "HTML sayfanın yapısını, CSS görünümünü, JavaScript ise etkileşimini sağlar.",
          "Java ile JavaScript farklı dillerdir. Web denince akla gelen temel üçlü HTML, CSS ve JavaScript'tir.",
          "HTML'nin açılımı Hyper Text Markup Language'dir.",
          "Güncel sürümler HTML5 ve CSS3'tür."
        ],
        calis: [
          "Her teknolojinin görevini tek cümleyle söyleyebilecek kadar çalış.",
          "Kısaltmaların açılımlarını tekrar et."
        ],
        alistirma: [
          "Basit bir sayfayı önce sadece HTML ile yaz, sonra CSS ile renk ve yazı tipi ekle. İki hali karşılaştır."
        ]
      },
      "Web'in Gelişimi ve Site Türleri": {
        bil: [
          "Web 1.0 web'in ilk dönemidir: basit tasarımlı, çoğunlukla sadece okunabilen sayfalar.",
          "Web 2.0 kullanıcının içerik ürettiği, etkileşimli dönemdir (sosyal medya, yorumlar).",
          "Web 3.0 anlamsal ve daha akıllı web dönemidir.",
          "Statik sitede içerik sabittir ve kullanıcı müdahale edemez. Dinamik sitede kullanıcı siteyle etkileşime girer (üye olma, yorum yapma, arama)."
        ],
        calis: [
          "Her Web döneminin ayırt edici özelliğini çalış.",
          "Statik ve dinamik site farkını örneklerle öğren."
        ],
        alistirma: [
          "3 statik ve 3 dinamik site örneği bul, neden o gruba girdiğini birer cümleyle yaz."
        ]
      },
      "Temel HTML Etiketleri": {
        bil: [
          "<a href=\"...\"> bağlantı (link) oluşturur.",
          "<ol> sıralı (numaralı) liste, <ul> sırasız (maddeli) liste oluşturur. <li> listenin her bir elemanıdır.",
          "<iframe> başka bir sayfadan içerik gömmek için kullanılır (Google Haritalar, YouTube).",
          "Bir resmin üzerine birden fazla link koymak <map> ve <area> etiketleriyle (resim haritası) yapılır."
        ],
        calis: [
          "Etiketleri ve ne işe yaradıklarını bir tablo halinde yazıp tekrar et.",
          "Özellikle <ol>, <ul> ve <li> farkına dikkat et."
        ],
        alistirma: [
          "Bir sayfada hem sıralı hem sırasız liste oluştur.",
          "Google Haritalar'dan okulumuzun konumunun iframe kodunu alıp sayfana ekle.",
          "Bir resim üzerinde iki farklı bölgeye iki farklı link veren resim haritası yap."
        ]
      },
      "HTML Sayfa Yapısı (head ve body)": {
        bil: [
          "<head> içinde sayfa başlığı (<title>), meta etiketleri, favicon ve CSS bağlantıları bulunur. Kullanıcı bunları sayfada doğrudan görmez.",
          "<body> içinde kullanıcının gördüğü her şey bulunur: yazılar, resimler, bağlantılar."
        ],
        calis: [
          "Boş bir HTML iskeletini (doctype, html, head, title, body) ezbere yazabilecek kadar çalış.",
          "Bir etiketin head'e mi body'ye mi yazılacağını ayırt etmeyi dene."
        ],
        alistirma: [
          "Not defterinde sıfırdan bir HTML sayfası yaz, title'ı değiştirip sekmede nasıl göründüğüne bak."
        ]
      },
      "Responsive Tasarım": {
        bil: [
          "Responsive tasarım, sitenin her ekran boyutunda (telefon, tablet, bilgisayar) otomatik olarak uyum sağlamasıdır.",
          "Bunun için viewport meta etiketi, CSS media query ve yüzde (%) gibi esnek ölçüler kullanılır."
        ],
        calis: [
          "viewport meta etiketinin ne işe yaradığını çalış.",
          "Media query'nin temel yazımını öğren."
        ],
        alistirma: [
          "Tarayıcıda F12 > cihaz modunu açıp bir siteyi telefon boyutunda incele.",
          "Kendi sayfanda ekran küçülünce yazı rengini değiştiren bir media query yaz."
        ]
      },
      "Meta Etiketleri": {
        bil: [
          "<meta charset=\"utf-8\"> Türkçe karakterlerin doğru görünmesini sağlar.",
          "<meta name=\"viewport\" ...> sayfanın mobil cihazlara uyum sağlamasını sağlar.",
          "<meta name=\"description\" ...> arama motorlarında görünen sayfa açıklamasıdır.",
          "<meta name=\"keywords\" ...> sayfanın anahtar kelimeleridir.",
          "<link rel=\"icon\" ...> tarayıcı sekmesinde görünen küçük ikonu (favicon) ekler."
        ],
        calis: [
          "Her meta etiketinin görevini kendi cümlelerinle yazabilecek kadar çalış.",
          "Bu etiketlerin hepsinin head içinde yer aldığını unutma."
        ],
        alistirma: [
          "Kendi sayfana bu 5 satırı ekle ve sekmede ikonun çıktığını gör.",
          "charset satırını silip Türkçe karakterlerin nasıl bozulduğunu gözlemle.",
          "Sevdiğin bir sitede sağ tık > Sayfa kaynağını görüntüle diyerek meta etiketlerini incele."
        ]
      }
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
      "Yapay Zeka Türleri ve Temel Kavramlar": {
        bil: [
          "Dar yapay zeka tek bir işte uzmandır (yüz tanıma, çeviri gibi).",
          "Genel yapay zeka insan gibi her türlü işi yapabilen yapay zekadır.",
          "Süper yapay zeka insan zekasını her alanda aşan yapay zekadır.",
          "Turing Testi, Alan Turing'in adını taşır ve bir makinenin insan gibi düşünüp düşünemediğini ölçmek için kullanılır."
        ],
        calis: [
          "Üç yapay zeka türünü ve aralarındaki farkı çalış.",
          "Turing Testi'nin nasıl uygulandığını öğren."
        ],
        alistirma: [
          "Günlük hayatta kullandığın 5 yapay zeka uygulamasını bul ve her birinin hangi türe girdiğini yaz."
        ]
      },
      "Yapay Zekanın Tarihi": {
        bil: [
          "1956 Dartmouth Konferansı'nda 'yapay zeka' terimi ilk kez kullanıldı.",
          "Yapay Zeka Kışı, beklentilerin karşılanamaması yüzünden yatırımın ve gelişimin azaldığı dönemlerin adıdır.",
          "1997'de IBM'in Deep Blue bilgisayarı satrançta dünya şampiyonu Kasparov'u yendi. Bu, yapay zekanın insanı yendiği ilk büyük olay kabul edilir.",
          "2016'da AlphaGo Go oyununda, 2022'de ChatGPT ise dil modellerinde önemli kırılma noktaları oldu."
        ],
        calis: [
          "Önemli olayları yıllarıyla birlikte sırala."
        ],
        alistirma: [
          "1950'den bugüne bir yapay zeka zaman çizelgesi çiz ve önemli olayları üzerine yerleştir."
        ]
      },
      "Makine Öğrenmesi Temelleri": {
        bil: [
          "Öğrenme, çevreye uyum sürecinde davranışta meydana gelen kalıcı değişimdir.",
          "Makine öğrenmesi, bilgisayarın veri üzerinden öğrenmesini sağlayan yöntemler bütünüdür.",
          "Üç ana türü vardır: denetimli, denetimsiz ve pekiştirmeli öğrenme."
        ],
        calis: [
          "Tanımları ezberlemek yerine kendi cümlelerinle anlatabilecek kadar çalış."
        ],
        alistirma: [
          "Öğrenme ve makine öğrenmesi tanımlarını kendi cümlelerinle yaz, sonra notlarınla karşılaştır."
        ]
      },
      "Denetimli Öğrenme": {
        bil: [
          "Denetimli öğrenmede model etiketli veriyle eğitilir, yani her girdinin doğru cevabı bellidir.",
          "Sınıflandırma (e-posta spam mı değil mi) ve regresyon (ev fiyatı tahmini) denetimli öğrenmenin iki ana türüdür."
        ],
        calis: [
          "Etiketli veri kavramını ve denetimsiz öğrenmeden farkını çalış.",
          "Sınavda tanım istendiğinde mutlaka kısa bir örnek de vermeyi alışkanlık edin."
        ],
        alistirma: [
          "3 denetimli öğrenme örneği yaz. Her biri için girdinin ne olduğunu ve etiketin ne olduğunu belirt."
        ]
      },
      "Aşırı Öğrenme (Overfitting)": {
        bil: [
          "Aşırı öğrenmede model eğitim verisini ezberler: eğitimde çok başarılıdır ama yeni veride başarısızdır.",
          "Grafikte model eğrisi bütün noktalardan zikzak çizerek geçiyorsa bu aşırı öğrenme işaretidir.",
          "Önleme yolları: daha fazla veri, daha basit model, düzenlileştirme, erken durdurma, veriyi eğitim ve test olarak ayırma, çapraz doğrulama.",
          "Tersi olan durum yetersiz öğrenmedir (underfitting): model veriyi hiç yakalayamaz."
        ],
        calis: [
          "Aşırı öğrenme ve yetersiz öğrenme grafiklerini birbirinden ayırt etmeyi çalış.",
          "Önleme yöntemlerinden en az üçünü açıklayabilecek kadar öğren."
        ],
        alistirma: [
          "Kağıda 10 nokta çiz. Bir kez düzgün bir eğri, bir kez de tüm noktalardan geçen zikzak bir eğri çiz. Yeni bir nokta eklendiğinde hangisinin daha iyi tahmin yapacağını düşün."
        ]
      },
      "Optimizasyon Algoritmaları": {
        bil: [
          "Genetik algoritma, yapay arı kolonisi, parçacık sürü ve karınca kolonisi doğadan esinlenmiş optimizasyon algoritmalarıdır.",
          "Minimax bir optimizasyon algoritması değil, oyunlarda karar vermek için kullanılan bir arama algoritmasıdır.",
          "Karınca kolonisinde karıncalar geçtikleri yola feromon bırakır. Kısa yolda feromon daha çok birikir ve diğer karıncalar bu yolu tercih eder.",
          "Feromon miktarı yolun uzunluğuyla ters orantılıdır. Zamanla feromon buharlaşır."
        ],
        calis: [
          "Hangi algoritmanın hangi doğa olayından esinlendiğini çalış.",
          "Karınca kolonisinde bir rotanın toplam uzunluğunu ve buna göre feromon miktarını hesaplamayı adım adım tekrar et."
        ],
        alistirma: [
          "4 şehirli bir yol haritası çiz ve kenarlara uzunluk ver. Olası rotaların toplam uzunluğunu hesapla, en kısa rotaya neden en çok feromon düşeceğini açıkla."
        ]
      }
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
