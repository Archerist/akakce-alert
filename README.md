# akakce-alert
Ekran kartı fiyatları ucuzladığında Discord'dan mesaj gönderir

Not: Bu kod sadece RX550, RX560, 5500XT ve 5600XT için çalışır. Eklemek istediğiniz kart varsa kodu değiştirmeniz gerekir.

Kullanım:

Bot ile aynı sunucuda olmanız gerekir.

```
git clone https://github.com/Archerist/akakce-alert.git
cd akakce-alert
npm i
echo 'TOKEN=<bot token>' >> .env
echo 'ID = <kullanıcı id>' >> .env
npm start
```

Debug:
VS Code için launch.json mevcuttur.

GPL3 Lisanslıdır
