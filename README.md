# Türk Masalları Seçkisi

**İstanbul Medipol Üniversitesi – Görsel İletişim Tasarımı**
**Ders:** Programlamaya Giriş
**Öğretim Üyesi:** Meral Şentürk
**Hazırlayan:** Efe Ayık – 86250106

Türk halk anlatı geleneğinden derlenmiş 12 masalı, koyu temalı ve etkileşimli tek sayfalık bir web sitesinde sunan vize projesidir. Bu sürümde, vize teslimindeki tek dosyalık sayfa **HTML, CSS ve JavaScript olmak üzere üç ayrı dosyaya** ayrılmış ve CSS ile JavaScript **harici dosya** olarak bağlanmıştır.

## Bağlantılar

| | Bağlantı |
|---|---|
| Canlı sayfa (GitHub Pages) | https://efeayik2007-lgtm.github.io/masallar/index2.html |
| GitHub deposu | https://github.com/efeayik2007-lgtm/masallar |
| YouTube sunum videosu | https://youtu.be/GqTeNrrzlQo |

## Dosya Yapısı

```
├── index2.html  → Yeni sürüm: sayfanın HTML yapısı ve içeriği (12 masal, menü, araç çubuğu)
├── style.css    → Harici CSS: renkler, yerleşim, tema, mobil uyum
├── script.js    → Harici JavaScript: tüm etkileşimler
├── README.md    → Bu dosya
└── index.html   → Vize teslimindeki ilk sürüm (tek dosya, iç CSS ve JS). Bu ödev için kullanılmaz.
```

Bu ödevin sürümü **`index2.html` + `style.css` + `script.js`** dosyalarıdır. `index2.html` içinde iç `<style>` ve iç `<script>` etiketi yoktur. Stil dosyası `<head>` içinde `<link rel="stylesheet" href="style.css">` ile, betik dosyası `<body>` sonunda `<script src="script.js"></script>` ile bağlanmıştır.

12 masal görseli base64 olarak `index2.html` içine gömülüdür. Bu nedenle ayrı bir görsel klasörü yoktur ve dosya büyüktür. Görseller kod olarak değil, resim verisi olarak dosyada yer alır.

## Özellikler

- **Masal listesi:** Soldaki menüden 12 masal arasında geçiş yapılır, seçilen masal vurgulanır.
- **Arama / filtreleme:** Arama kutusuna yazılanlara göre masal listesi süzülür.
- **Selamlama:** Kullanıcı adını yazar, sayfa ismiyle karşılar. Boş bırakılırsa uyarı verir.
- **Gece / gündüz modu:** Tek tuşla koyu ve açık tema arasında geçiş yapılır.
- **Yazı boyutu:** (+) ve (−) düğmeleriyle okuma boyutu ayarlanır, alt ve üst sınır vardır.
- **Başlık efekti:** Fare başlığın üzerine gelince arka plan rengi değişir.
- **Mobil uyum:** Dar ekranlarda menü üste geçer, düzen tek sütuna iner.

## Masallar

1. Billur Köşk
2. Ağlayan Nar ile Gülen Ayva
3. Şahmeran
4. Akıllı Köylü Kızı
5. Avcı Ahmet
6. Sedef Kakmalı Beşik
7. Kınalı Keklik
8. Nazar Otu
9. Cüce Padişah
10. Ağlayan Ağaç
11. Gümüş Kanat
12. Cömert ile Cimri

## Teknik Ayrıntılar

### HTML (`index2.html`)
- Anlamsal HTML5 etiketleri: `header`, `aside`, `main`, `article`, `footer`.
- Her masal ayrı bir `article` etiketidir (`tale-1` … `tale-12`). Menüdeki her öğe, `data-target` özelliğiyle ilgili masalın `id` değerine bağlanır.

### CSS (`style.css`)
- `:root` içinde CSS değişkenleri (renkler, yazı boyutu) tanımlıdır. `.light-theme` sınıfı aynı değişkenlerin açık tema değerlerini verir.
- Sayfa yerleşimi CSS Grid ile kurulmuştur (sabit menü sütunu + içerik sütunu).
- Masallar `display: none` ile gizlenir, `.active` sınıfı olan masal gösterilir.
- Her masalın ilk harfi `::first-letter` ile büyütülmüştür.
- `@media (max-width: 850px)` ile mobil düzen sağlanmıştır.

### JavaScript (`script.js`)
- `getElementById` ve `querySelectorAll` ile elemanlar seçilir, `addEventListener` ile olaylara bağlanır.
- `mouseover` / `mouseout`: başlık efekti.
- `click`: selamlama, tema değişimi, yazı boyutu, masal geçişi.
- `input`: arama ile liste filtreleme.
- `if / else`: boş isim kontrolü ve yazı boyutu sınırları.
- `classList.add / remove / toggle`: tema ve aktif masal yönetimi.

## Tasarım Kararları

- **Renkler:** Siyah zemin (`#000000`) ve neon mavi vurgu (`#00c8ff`). Tek vurgu rengi sayfaya net bir kimlik verir. Açık temada vurgu rengi okunabilirlik için koyulaştırılmıştır.
- **Yazı tipi:** Masal metinlerinde Georgia (serif, kitap hissi), arayüz öğelerinde sans-serif.
- **Okunabilirlik:** Metin sütunu 720 px ile sınırlıdır, satır yüksekliği geniştir, metin zeminle yüksek kontrasttadır.
- **Gezinme:** Sabit yan menü sayesinde her masala tek tıkla ulaşılır.
- **Görseller:** Her masalın başında, kesilmeden tam görünen bir görsel bulunur.

## Yapay Zekâ Kullanımı

Masal metinlerini düzenlerken, görselleri koda gömerken ve dosyaları ayırırken yapay zekâdan destek aldım. Sayfanın tasarımını, kod yapısını ve işlevlerini kendim kurdum ve sunum videosunda tek tek açıkladım.

## Çalıştırma

1. Depoyu indirin ya da klonlayın.
2. `index2.html`, `style.css` ve `script.js` dosyalarını **aynı klasörde** tutun.
3. `index2.html` dosyasını tarayıcıda açın. Sunucu veya kurulum gerekmez, internet bağlantısı gerekmez.

Canlı sürüm için yukarıdaki GitHub Pages bağlantısını kullanabilirsiniz.

## Gereksinim Kontrolü

- [x] 12 masal
- [x] HTML, CSS ve JavaScript üç ayrı dosyada (`index2.html`, `style.css`, `script.js`)
- [x] CSS harici dosya olarak bağlı (`style.css`)
- [x] JavaScript harici dosya olarak bağlı (`script.js`)
- [x] Dış kütüphane veya CDN yok
- [x] Mobilde düzgün görünüm
- [x] Sunum videosu bağlantısı README'de
- [x] Depo herkese açık
