#!/bin/bash
set -e
cd "$(dirname "$0")"

echo "==> Node kontrol"
node -v
npm -v

echo "==> Bagimliliklar kuruluyor"
if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

echo "==> Production build aliniyor"
npm run build

# KURAL: tek adres /var/www/aremcreative, tek pm2 ismi aremcreative. Baska yer olusturma.
echo "==> Eski basari-hikayeleri kalintisi temizleniyor (istenmiyor)"
rm -rf app/basari-hikayeleri

echo "==> PM2 restart (kanonik isim: aremcreative)"
if command -v pm2 >/dev/null 2>&1; then
  pm2 restart aremcreative 2>/dev/null || pm2 start npm --name aremcreative -- start -- -p 8000
  pm2 save
  pm2 status aremcreative
else
  fuser -k 8000/tcp 2>/dev/null || true
  nohup npm run start -- -p 8000 > /var/log/aremcreative.log 2>&1 &
  echo "pm2 yok, nohup ile baslatildi. Log: /var/log/aremcreative.log"
fi

echo "==> Bitti. Site http://127.0.0.1:8000 uzerinden ayakta olmali."
echo "==> Nginx test + reload yapiliyor (sudo gerektirir)"
sudo nginx -t && sudo systemctl reload nginx || nginx -t && systemctl reload nginx || true
