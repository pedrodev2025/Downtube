document.getElementById('downloadBtn').addEventListener('click', function() {
    const videoUrl = document.getElementById('videoUrl').value;
    const status = document.getElementById('status');

    if (!videoUrl) {
        status.textContent = 'Por favor, insira uma URL válida.';
        return;
    }

    status.textContent = 'Iniciando o download...';

    fetch('/download', {
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
        // Cria um link para download
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'video.mp4'; // Nome do arquivo
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        status.textContent = 'Download concluído!';
    })
    .catch(error => {
        status.textContent = 'Erro ao baixar o vídeo.';
        console.error('Error:', error);
    });
});
