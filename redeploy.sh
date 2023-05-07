cd /home/ubuntu/tiit
git pull

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

cd /home/ubuntu/tiit/frontend
npm i && npm run build
sudo rm -rf /var/www/html/tiit_frontend
sudo mv /home/ubuntu/tiit/frontend/dist /var/www/html/tiit_frontend

cd /home/ubuntu/tiit/backend
sudo rm -rf dist
npm i
npx prisma db push
npx prisma migrate deploy
npx prisma db push
pm2 delete tiit_backend
npm run build
pm2 start dist/main.js --name "tiit_backend"