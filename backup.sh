#!/bin/bash
cd ~/
cd backup
mongodump --db esprit2 --gzip --archive > database_`date "+%Y-%m-%d"`.gz
tar -zcvf uploads_`date "+%Y-%m-%d"`.gz ~/Esprit/esprit-backend/uploads
gdrive upload --parent 1jQjT03ioGPs4wwTaKdbCZ5A_H9Yb5wQY database_`date "+%Y-%m-%d"`.gz
gdrive upload --parent 1jQjT03ioGPs4wwTaKdbCZ5A_H9Yb5wQY uploads_`date "+%Y-%m-%d"`.gz
exit 0
