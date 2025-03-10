const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/download', (req, res) => {
    const videoUrl = req.body.url;

    // Gera um nome de arquivo temporário
    const tempFilePath = path.join(__dirname, 'temp_video.mp4');

    // Comando yt-dlp para baixar o vídeo
    const command = `yt-dlp -o ${tempFilePath} -f mp4 ${videoUrl}`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro: ${stderr}`);
            return res.status(500).send('Erro ao baixar o vídeo.');
        }

        // Lê o arquivo temporário e envia para o cliente
        const fileStream = fs.createReadStream(tempFilePath);
        res.setHeader('Content-Disposition', 'attachment; filename="video.mp4"');
        res.setHeader('Content-Type', 'video/mp4');
        fileStream.pipe(res);

        // Remove o arquivo temporário após o envio
        fileStream.on('end', () => {
            fs.unlink(tempFilePath, (err) => {
                if (err) console.error('Erro ao remover arquivo temporário:', err);
            });
        });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
