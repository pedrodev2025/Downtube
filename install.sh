sudo apt install wget
sudo apt update 
sudo apt install nodejs npm
wget https://github.com/pedrodev2025/Downtube/raw/refs/heads/main/archives.zip 
unzip archives.zip /Downtube 
cd /Downtube/archives 
sudo curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp 
sudo chmod a+rx /usr/local/bin/yt-dlp
sudo npm install express
sudo npm start
echo O Servidor Foi Iniciado Acesse Com a Porta 3000!
