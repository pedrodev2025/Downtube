# Verifica se o comando anterior falhou
verifica_erro() {
  if [ $? -ne 0 ]; then
    echo "O comando anterior falhou com código de saída $?. Saindo."
    exit 1
  fi
}

sudo apt update
verifica_erro

sudo apt install -y wget nodejs npm
verifica_erro

wget https://github.com/pedrodev2025/Downtube/archive/refs/tags/1.1.zip
verifica_erro

unzip 1.1.zip
verifica_erro

cd Downtube-1.1/archives # Assumindo que o diretório é apenas Downtube-1.1
verifica_erro

sudo apt install -y python3 python3-pip
verifica_erro

sudo pip install --break-system-packages yt-dlp # Cuidado com esta opção
verifica_erro

npm install express
verifica_erro

npm install pm2
verifica_erro

pm2 start server.js
verifica_erro

echo "O Servidor Foi Iniciado! Acesse com a porta 3000!"
