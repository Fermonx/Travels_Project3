

#!/usr/bin/env bash

apt-get update
apt-get install -y git
apt-get install -y node
apt-get install -y nodejs
apt-get install -y nodejs-legacy
#apt-get install -y mysql-server php5-mysql
#debconf-set-selections <<< "mysql-server mysql-server/root_password password 1234"
#debconf-set-selections <<< "mysql-server mysql-server/root_password_again password 1234"
#apt-get -f install

if ! '[cd project]';
then
    mkdir project
    cd project
    git clone https://github.com/Fermonx/actividad_3.git
fi
else
git pull
fi

if ! [ -L /var/www/html/ ];
then
sudo rm -rf /var/www/html/
sudo ln -fs /vagrant /var/www/html
fi




