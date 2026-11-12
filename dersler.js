// Ders ve sınav verileri.
// Her ders için: konular (öneri metinleriyle) ve sorular (konu, puan, zorluk).
// zorluk: 1 = kolay, 2 = orta, 3 = zor
// NOT: Aşağıdaki ders örnektir. Gerçek sınav Word/PDF dosyalarından doldurulacak.

window.DERSLER = [
  {
    id: "programlama-temelleri",
    ad: "Programlama Temelleri",
    sinav: "Vize Sınavı (Örnek)",
    konular: {
      "Değişkenler ve Veri Tipleri": "Değişken tanımlama, int/float/string farkları ve tip dönüşümlerini tekrar edin. Basit örnekleri kendiniz yazarak deneyin.",
      "Operatörler": "Aritmetik, karşılaştırma ve mantıksal operatörlerin öncelik sırasına çalışın. Küçük ifadelerin sonucunu önce kağıtta tahmin edin.",
      "Koşul Yapıları": "if / else if / else akışını ve iç içe koşulları tekrar edin. Not hesaplama gibi gündelik örneklerle pratik yapın.",
      "Döngüler": "for ve while döngülerinin farkına, döngü sayacına ve sonsuz döngü hatalarına odaklanın. 1'den N'e toplam, çarpım tablosu gibi alıştırmalar yapın.",
      "Diziler": "Dizi tanımlama, indeksleme (0'dan başlar) ve dizi üzerinde döngüyle gezinmeyi çalışın. En büyük/en küçük eleman bulma alıştırmaları yapın.",
      "Fonksiyonlar": "Parametre, geri dönüş değeri ve fonksiyon çağırma mantığını tekrar edin. Tekrarlanan kodları fonksiyona çevirerek pratik yapın."
    },
    sorular: [
      { no: 1,  konu: "Değişkenler ve Veri Tipleri", puan: 10, zorluk: 1 },
      { no: 2,  konu: "Operatörler",                 puan: 10, zorluk: 1 },
      { no: 3,  konu: "Koşul Yapıları",              puan: 10, zorluk: 1 },
      { no: 4,  konu: "Değişkenler ve Veri Tipleri", puan: 10, zorluk: 2 },
      { no: 5,  konu: "Koşul Yapıları",              puan: 10, zorluk: 2 },
      { no: 6,  konu: "Döngüler",                    puan: 10, zorluk: 2 },
      { no: 7,  konu: "Döngüler",                    puan: 10, zorluk: 3 },
      { no: 8,  konu: "Diziler",                     puan: 10, zorluk: 2 },
      { no: 9,  konu: "Diziler",                     puan: 10, zorluk: 3 },
      { no: 10, konu: "Fonksiyonlar",                puan: 10, zorluk: 3 }
    ]
  }
];
