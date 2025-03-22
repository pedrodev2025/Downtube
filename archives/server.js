const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Caminho absoluto para a pasta "public"
const publicPath = path.join(__dirname, 'public');

// Servir arquivos estáticos da pasta "public"
app.use(express.static(publicPath));

// Rota raiz para servir o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// Rota para baixar para o servidor
app.post('/download-to-server', (req, res) => {
    const videoUrl = req.body.url;
    const outputPath = path.join(__dirname, '..', 'downloads', '%(title)s.%(ext)s');

    exec(`yt-dlp -o "${outputPath}" ${videoUrl}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro: ${stderr}`);
            return res.json({ success: false });
        }
        console.log(`Saída: ${stdout}`);
        res.json({ success: true });
    });
});

// Rota para baixar para o dispositivo
app.post('/download-to-device', (req, res) => {
    const videoUrl = req.body.url;
    const tempFilePath = path.join(__dirname, '..', 'temp_video.mp4');

    exec(`yt-dlp -o ${tempFilePath} -f mp4 ${videoUrl}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro: ${stderr}`);
            return res.status(500).send('Erro ao baixar o vídeo.');
        }

        const fileStream = fs.createReadStream(tempFilePath);
        res.setHeader('Content-Disposition', 'attachment; filename="video.mp4"');
        res.setHeader('Content-Type', 'video/mp4');
        fileStream.pipe(res);

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
