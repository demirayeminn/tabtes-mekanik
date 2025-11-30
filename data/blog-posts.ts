export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "duvar-islakliginin-nedenleri-ve-cozumleri",
    title: "Duvar Islaklığının Nedenleri ve Çözümleri",
    excerpt:
      "Evinizdeki duvar ıslaklığı ciddi sorunlara yol açabilir. İşte nedenleri ve çözüm yolları...",
    content: `
## Duvar Islaklığı Neden Oluşur?

Duvar ıslaklığı, evlerde en sık karşılaşılan sorunlardan biridir. Bu sorunun birçok nedeni olabilir:

### 1. Su Tesisatı Kaçakları

Duvar içindeki borularda oluşan kaçaklar, zamanla duvarlarda ıslaklığa neden olur. Bu kaçaklar genellikle:

- Eski ve yıpranmış borular
- Hatalı montaj
- Donma sonucu patlama

### 2. Dış Cephe Sorunları

Binanın dış cephesindeki çatlaklar veya izolasyon eksikliği yağmur suyunun içeri sızmasına neden olabilir.

### 3. Çatı Kaçakları

Üst katlarda görülen ıslaklık genellikle çatı sorunlarından kaynaklanır.

## Ne Yapmalısınız?

1. **Kaçak Tespiti Yaptırın**: Profesyonel ekipmanlarla kaçağın kaynağı tespit edilmelidir.

2. **Ertelemeyin**: Küçük kaçaklar büyük hasarlara yol açabilir.

3. **Uzman Desteği Alın**: Kendi başınıza müdahale etmeyin.

## Tabtes Mekanik Olarak

Kameralı kaçak tespit sistemimizle duvarlarınızı kırmadan kaçağın kaynağını buluyoruz. 15 yıllık deneyimimizle Çerkezköy ve çevresinde hizmet veriyoruz.
    `,
    category: "Kaçak Tespiti",
    date: "2024-01-15",
    readTime: "5 dk",
  },
  {
    id: 2,
    slug: "keten-baglama-nedir-neden-onemli",
    title: "Keten Bağlama Nedir ve Neden Önemlidir?",
    excerpt:
      "Tesisatta keten bağlama işlemi neden yapılır? Sızdırmazlık için kritik önemi...",
    content: `
## Keten Bağlama Nedir?

Keten bağlama, tesisat işlerinde boru bağlantılarının sızdırmazlığını sağlamak için yapılan geleneksel bir yöntemdir. Doğal keten lifleri kullanılarak dişli bağlantılara sarılır.

## Neden Keten Kullanılır?

### 1. Mükemmel Sızdırmazlık

Keten lifleri su ile temas ettiğinde şişer ve bağlantıyı tamamen sızdırmaz hale getirir.

### 2. Uzun Ömür

Doğru uygulandığında yıllarca sorunsuz çalışır.

### 3. Kolay Uygulama

Deneyimli ustalar için hızlı ve pratik bir yöntemdir.

## Keten vs Teflon Bant

| Özellik | Keten | Teflon |
|---------|-------|--------|
| Sızdırmazlık | Mükemmel | İyi |
| Dayanıklılık | Çok yüksek | Orta |
| Uygulama | Ustalık gerektirir | Kolay |
| Maliyet | Düşük | Düşük |

## Profesyonel Tavsiye

Keten bağlama işlemi doğru yapılmadığında kaçaklara neden olabilir. Bu nedenle tesisat işlerinizi mutlaka uzman ekiplere yaptırın.
    `,
    category: "Tesisat Bilgisi",
    date: "2024-01-10",
    readTime: "4 dk",
  },
  {
    id: 3,
    slug: "kombi-bakimi-ne-siklikta-yapilmali",
    title: "Kombi Bakımı Ne Sıklıkta Yapılmalı?",
    excerpt:
      "Kombinizin verimli çalışması ve uzun ömürlü olması için bakım önerileri...",
    content: `
## Kombi Bakımının Önemi

Düzenli kombi bakımı, hem güvenliğiniz hem de cüzdanınız için kritik öneme sahiptir.

## Ne Sıklıkta Bakım Yapılmalı?

**Yılda en az 1 kez** bakım yaptırmanız önerilir. İdeal zaman:

- Kış sezonu öncesi (Eylül-Ekim)
- Yoğun kullanım sonrası (Mart-Nisan)

## Bakımda Neler Yapılır?

1. **Brülör Temizliği**: Yanma verimini artırır
2. **Eşanjör Kontrolü**: Isı transferini optimize eder
3. **Gaz Kaçak Testi**: Güvenlik için kritik
4. **Su Basıncı Kontrolü**: 1-1.5 bar ideal
5. **Filtre Temizliği**: Tıkanıklıkları önler

## Bakım Yapmazsanız Ne Olur?

- %20-30 daha fazla yakıt tüketimi
- Arıza riski artar
- Kombi ömrü kısalır
- Garanti geçersiz olabilir

## Tabtes Mekanik Kombi Bakım Hizmeti

Tüm marka kombilerde periyodik bakım hizmeti veriyoruz. Bakım sonrası detaylı rapor sunuyoruz.
    `,
    category: "Kombi",
    date: "2024-01-05",
    readTime: "4 dk",
  },
  {
    id: 4,
    slug: "banyo-tadilati-oncesi-bilmeniz-gerekenler",
    title: "Banyo Tadilatı Öncesi Bilmeniz Gerekenler",
    excerpt:
      "Banyo yenileme projesi mi planlıyorsunuz? İşte dikkat etmeniz gereken noktalar...",
    content: `
## Banyo Tadilatına Başlamadan Önce

Banyo tadilatı, evin en önemli yenileme projelerinden biridir. Doğru planlama ile hem bütçenizi korur hem de hayalinizdeki banyoya kavuşursunuz.

## 1. Bütçe Planlaması

Banyo tadilatı maliyetleri:

- Küçük banyo (4m²): ₺15.000 - ₺25.000
- Orta banyo (6m²): ₺25.000 - ₺40.000
- Büyük banyo (8m²+): ₺40.000+

**İpucu**: Bütçenize %20 beklenmedik gider payı ekleyin.

## 2. Tesisat Kontrolü

30 yaş üstü binalarda tesisat yenilenmesi şarttır. Eski borular:

- Kaçak riski taşır
- Su basıncını düşürür
- Hijyen sorunu oluşturur

## 3. Su İzolasyonu

Banyo tadilatının en kritik aşaması su izolasyonudur. Kaliteli izolasyon:

- Alt kata su sızmasını önler
- Küf oluşumunu engeller
- Seramik ömrünü uzatır

## 4. Havalandırma

İyi bir havalandırma sistemi:

- Küf ve rutubet önler
- Ayna buğulanmasını azaltır
- Banyo kokusunu giderir

## Tabtes Mekanik Anahtar Teslim Banyo

Projeden teslimine kadar tüm süreci yönetiyoruz. 3D tasarım ile banyonuzu önceden görün.
    `,
    category: "Tadilat",
    date: "2024-01-01",
    readTime: "6 dk",
  },
  {
    id: 5,
    slug: "petek-temizligi-ne-zaman-yapilmali",
    title: "Petek Temizliği Ne Zaman Yapılmalı?",
    excerpt:
      "Petekleriniz yeterince ısıtmıyor mu? Temizlik zamanı gelmiş olabilir...",
    content: `
## Petekler Neden Kirlenir?

Kalorifer sistemi içindeki su zamanla:

- Tortu biriktirir
- Pas oluşturur
- Hava kabarcıkları birikir

Bu birikimler peteğin ısıtma verimini düşürür.

## Temizlik Zamanı Geldi mi?

Şu belirtiler varsa temizlik gerekli:

1. **Petek alt kısmı soğuk kalıyor**
2. **Bazı petekler hiç ısınmıyor**
3. **Kombi sürekli çalışıyor ama ev ısınmıyor**
4. **Petek içinden ses geliyor**

## Temizlik Nasıl Yapılır?

Profesyonel petek temizliği:

1. Sistem suyu boşaltılır
2. Kimyasal temizleyici uygulanır
3. Basınçlı su ile yıkanır
4. Sistem tekrar doldurulur
5. Hava tahliyesi yapılır

## Ne Sıklıkta Temizlenmeli?

- Normal kullanımda: **2-3 yılda bir**
- Eski sistemlerde: **Her yıl**
- Sorun varsa: **Hemen**

## Verimlilik Artışı

Temizlik sonrası:

- %30'a kadar yakıt tasarrufu
- Daha hızlı ısınma
- Sessiz çalışma
    `,
    category: "Petek",
    date: "2023-12-20",
    readTime: "4 dk",
  },
  {
    id: 6,
    slug: "su-tesisatinda-ppr-boru-avantajlari",
    title: "Su Tesisatında PPR Boru Avantajları",
    excerpt:
      "Modern tesisatta neden PPR boru tercih ediliyor? Avantajları ve dezavantajları...",
    content: `
## PPR Boru Nedir?

PPR (Polipropilen Random), modern su tesisatında en çok tercih edilen boru türüdür. Plastik bazlı, kaynak ile birleştirilen bir sistemdir.

## PPR Boru Avantajları

### 1. Uzun Ömür

- 50 yıl üzeri kullanım ömrü
- Paslanma yok
- Kireçlenme minimum

### 2. Hijyenik

- İçme suyuna uygun
- Bakteri barındırmaz
- Koku yapmaz

### 3. Kolay Montaj

- Kaynak ile güçlü bağlantı
- Sızıntı riski minimum
- Hızlı uygulama

### 4. Ekonomik

- Uygun fiyat
- Bakım gerektirmez
- Enerji tasarrufu (ısı yalıtımı)

## PPR vs Bakır Boru

| Özellik | PPR | Bakır |
|---------|-----|-------|
| Ömür | 50+ yıl | 50+ yıl |
| Fiyat | Ekonomik | Pahalı |
| Montaj | Kolay | Zor |
| Kireçlenme | Az | Orta |
| Paslanma | Yok | Yok |

## Tavsiyemiz

Yeni tesisat veya yenileme projelerinde PPR boru sistemini öneriyoruz. Kaliteli malzeme ve doğru montaj ile yıllarca sorunsuz kullanım sağlar.
    `,
    category: "Tesisat Bilgisi",
    date: "2023-12-15",
    readTime: "5 dk",
  },
];

export const blogCategories = [
  "Tümü",
  "Tesisat Bilgisi",
  "Kombi",
  "Kaçak Tespiti",
  "Petek",
  "Tadilat",
];

