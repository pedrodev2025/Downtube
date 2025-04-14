FROM node:18-alpine
RUN rm -rf /root/.npm
RUN apk add --no-cache git
RUN git clone https://github.com/pedrodev2025/Downtube.git
WORKDIR /Downtube
# Instalar as dependencias
RUN apk add --no-cache python3 py3-pip
RUN pip install --break-system-packages yt-dlp
RUN npm install express pm2

VOLUME /Downtube/archives/downloads # Assumindo que os downloads ficam aqui

EXPOSE 3000

# Comando para iniciar a aplicação usando PM2
CMD ["node_modules/pm2/bin/pm2-runtime", "start", "archives/server.js", "--no-daemon"]



















