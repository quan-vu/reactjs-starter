##### Setup vitual host on Apache Ubuntu
##### Author: Quan Vu
##### Usage: ./setup_vhost_apache.sh
##### Required: Apache server run on port 8800

## Step 1: Make directories & files struct

HOST_NAME='reactjs-starter.local';
HOST_PORT=8800
REACT_APP_ROOT=$PWD
REACT_APP_BUILD_DIR=$PWD/build
CONFIG=$REACT_APP_ROOT/scripts/httpd.conf;

echo "<VirtualHost *:$HOST_PORT>
    ServerAdmin webmaster@localhost
    ServerName $HOST_NAME
    ServerAlias www.$HOST_NAME

    DocumentRoot $REACT_APP_BUILD_DIR
   
    <Directory $REACT_APP_BUILD_DIR>
      Options Indexes FollowSymLinks
      AllowOverride All
      Require all granted
    </Directory>

    <IfModule mod_rewrite>
      RewriteEngine On
      RewriteCond %{REQUEST_FILENAME} !-f
      RewriteCond %{REQUEST_FILENAME} !-d
    </IfModule>	

</VirtualHost>" > $CONFIG;

## Step 2: Create test file: index.php

##### Step 2: Make link shortcut in "sites-available"
echo "1. Configure apache virtual host: $HOST_NAME.conf ..."
sudo rm -rf /etc/apache2/sites-available/$HOST_NAME.conf;
sudo rm -rf /etc/apache2/sites-enabled/$HOST_NAME.conf;
sudo ln -s $CONFIG /etc/apache2/sites-available/$HOST_NAME.conf;
sudo a2ensite $HOST_NAME.conf;
sudo systemctl reload apache2

## Step 3: 
echo ""
echo "2. Add hostname: 127.0.0.1 $HOST_NAME to /etc/hosts";
# sudo gedit /etc/hosts;

echo ""
echo "3. Openning project"
x-www-browser http://$HOST_NAME:$HOST_PORT;

## Step 4: Finish.
echo ""
echo "4. Finish";
echo "Project is running on: http://$HOST_NAME:$HOST_PORT"
