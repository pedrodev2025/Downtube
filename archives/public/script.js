document.getElementById('downloadToServer').addEventListener('click', function() {
    const videoUrl = document.getElementById('videoUrl').value;
    const status = document.getElementById('status');

    if (!videoUrl) {
        status.textContent = 'Por favor, insira uma URL válida.';
        return;
    }

    status.textContent = 'Baixando para o servidor...';

    fetch('/download-to-server', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: videoUrl }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            status.textContent = 'Download concluído no servidor!';
        } else {
            status.textContent = 'Erro ao baixar o vídeo.';
        }
    })
    .catch(error => {
        status.textContent = 'Erro na conexão com o servidor.';
        console.error('Error:', error);
    });
});

document.getElementById('downloadToDevice').addEventListener('click', function() {
    const videoUrl = document.getElementById('videoUrl').value;
    const status = document.getElementById('status');

    if (!videoUrl) {
        status.textContent = 'Por favor, insira uma URL válida.';
        return;
    }

    status.textContent = 'Preparando o download para o dispositivo...';

    fetch('/download-to-device', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: videoUrl }),
    })
    .then(response => {
        if (response.ok) {
            return response.blob();
        } else {
            throw new Error('Erro ao baixar o vídeo.');
        }
    })
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'video.mp4';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        status.textContent = 'Download concluído no dispositivo!';
    })
    .catch(error => {
        status.textContent = 'Erro ao baixar o vídeo.';
        console.error('Error:', error);
    });
});
