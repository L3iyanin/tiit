cd /home/ubuntu/tiit/frontend
git pull

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

cd /home/ubuntu/tiit/frontend/frontend
npm i && npm run build
sudo rm -rf /var/www/html/bringo_frontend
sudo mv /home/ubuntu/tiit/frontend/frontend/dist /var/www/html/bringo_frontend

cd /home/ubuntu/tiit/frontend/backend
npm i
npx prisma migrate deploy
npx prisma generate
pm2 delete tiit_backend
npm run build
pm2 start dist/main.js --name "tiit_backend"