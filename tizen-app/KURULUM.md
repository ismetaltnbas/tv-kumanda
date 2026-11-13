# Ekranım — monitöre kurulum

Samsung monitörün (LS43BM700UPXUF) üzerinde çalışan özel ana ekran uygulaması:
temalar (Sihir, Aslan, Yılan, Kartal, Porsuk, Gece, Kutup ışığı, Okyanus, Gün batımı, Orman; büyülü temalarda süzülen mumlar ve günün sözü), büyük saat,
hava durumu, favori uygulamalar, tüm uygulamalar listesi ve ekran koruyucu.

Kurulum bir kez yapılır, yaklaşık 30 dakika sürer. **Windows ya da Mac bilgisayar gerekir.**
Bilgisayar ve monitör aynı Wi-Fi'de olmalı.

## 1. Dosyaları indir
github.com/ismetaltnbas/tv-kumanda → yeşil **Code** düğmesi → **Download ZIP** → aç.
İçindeki `tizen-app` klasörü uygulamanın kendisi.

## 2. Tizen Studio'yu kur
1. https://developer.tizen.org/development/tizen-studio/download adresinden **Tizen Studio**'yu indirip kur.
2. Açılan **Package Manager**'da **Extension SDK** sekmesi →
   **Samsung Certificate Extension** ve **TV Extensions** paketlerini **Install**.

## 3. Monitörde geliştirici modunu aç
1. Monitörde **Uygulamalar** (Apps) ekranını aç.
2. Kumandayla sırayla **1 2 3 4 5** gir (rakam tuşu yoksa ekrandaki sayı tuşlarını kullan).
3. **Developer mode → On**, **Host PC IP** kutusuna bilgisayarın IP adresini yaz → **OK**.
   (Bilgisayarın IP'si: Windows'ta `ipconfig`, Mac'te Sistem Ayarları → Wi-Fi → Ayrıntılar.)
4. Monitörü kapatıp aç (fişten çekip takmak en garantisi).

## 4. Monitörü bilgisayara bağla
Tizen Studio → **Tools → Device Manager** → **Remote Device Manager** → **+** →
ad: `monitor`, IP: `192.168.1.102`, port `26101` → **Add** → bağlantı anahtarını **açık** yap.

## 5. Samsung sertifikası oluştur
Tizen Studio → **Tools → Certificate Manager** → **+** → **Samsung** → **TV** →
profil adı `ekranim` → yeni yazar sertifikası (isim ve şifre gir) → **Samsung hesabınla giriş** →
dağıtıcı sertifikasında monitörün kimliği (DUID) listede görünmeli → **Finish**.

## 6. Paketle ve yükle
Tizen Studio'nun kurulduğu klasördeki `tools/ide/bin` içinde bir terminal aç ve:

```
tizen package -t wgt -s ekranim -- C:\yol\tizen-app
sdb connect 192.168.1.102
sdb devices
tizen install -n <tizen-app klasöründe oluşan .wgt dosyası> -t <sdb devices'ta görünen ad>
```

(Mac'te yollar `/Users/.../tizen-app` şeklinde olur.)

Alternatif: Tizen Studio'da **File → New → Tizen Project → Template → TV → Web Application → Basic Project**
ile boş proje oluştur, `tizen-app` içindeki `index.html`, `config.xml`, `icon.png` dosyalarını projeye kopyala,
projeye sağ tıkla → **Run As → Tizen Web Application**.

## 7. Ana ekrana sabitle
Monitörde **Uygulamalar** → **Ekranım** üzerine gel → kumandada aşağı/seçenekler →
**Ana ekrana ekle** / **Taşı** ile en başa al. Monitörü açınca ilk sıradaki kutu odur.

## Kullanım (monitör kumandası)
| Tuş | İşlev |
|---|---|
| Yön tuşları + OK | Gezin, uygulama aç |
| 🔴 Kırmızı | Temayı değiştir |
| 🟢 Yeşil | Tüm uygulamalar |
| 🟡 Sarı | Üzerinde durduğun uygulamayı favorilere ekle/çıkar |
| 🔵 Mavi | Ekran koruyucu |
| ↩ Geri | Ana ekrana dön / uygulamadan çık |

Renk tuşları yoksa aynı işlemler ekrandaki düğmelerden yapılır. Ayarlar'dan şehir, ekran koruyucu süresi,
saniye gösterimi ve arka plan hareketi değiştirilebilir.

Not: Samsung, sistemin kendi ana ekranının (Smart Hub) yerine başka bir uygulama koymaya izin vermez;
Ekranım, Smart Hub'dan açılan ayrı bir uygulamadır.
