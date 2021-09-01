#!/bin/sh
whoami
pwd
cd
pwd
cd ~/Esprit
pwd
echo "--------------------------- Starting Deployment ----------------------------"
git branch
echo "--------------------------- Starting checkout prod branch ----------------------------"
git checkout production
echo "--------------------------- Starting git pull ----------------------------"
git pull
echo "--------------------------- Starting npm install root ----------------------------"
npm install
echo "--------------------------- Starting npm install frontoffice ----------------------------"
cd frontend-client
npm install
echo "--------------------------- Starting npm build frontoffice ----------------------------"
npm run build
npm run precompress
echo "--------------------------- Restarting pm2 service frontoffice  ----------------------------"
pm2 restart 0
echo "--------------------------- Starting npm install backoffice ----------------------------"
cd ..
cd backend-client
npm install
echo "--------------------------- Starting npm build backoffice ----------------------------"
npm run build
npm run precompress
echo "--------------------------- Restarting pm2 service backoffice  ----------------------------"
pm2 restart 1
echo "--------------------------- Starting npm install backend ----------------------------"
cd ..
cd esprit-backend
npm install
echo "--------------------------- Starting npm build backend  ----------------------------"
npm run build
echo "--------------------------- Restarting pm2 service backend  ----------------------------"
pm2 restart 2
exit 0