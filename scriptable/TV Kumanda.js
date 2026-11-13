// TV Kumanda — Scriptable başlatıcısı
// iPhone, Samsung'un 8002 sertifikasını kabul etmediği için kumanda
// burada http kökenli bir pencerede açılır ve TV'ye 8001'den bağlanır.
const TV_IP = "192.168.1.102";
const ADRES = "https://ismetaltnbas.github.io/tv-kumanda/index.html";

const html = await new Request(ADRES + "?t=" + Date.now()).loadString();
const wv = new WebView();
await wv.loadHTML(html, `http://${TV_IP}:8001/`);
await wv.present(true);
Script.complete();
