# Downtube 1.1

Downtube é uma aplicação web simples que permite baixar vídeos do YouTube (e outras plataformas suportadas pelo `yt-dlp`) tanto para o servidor onde a aplicação está hospedada quanto diretamente para o dispositivo do usuário.

## Funcionalidades

* **Download para o Servidor:** Baixe vídeos diretamente para o diretório de `downloads` no servidor.
* **Download para o Dispositivo:** Baixe vídeos diretamente para o seu computador.
* **Interface Simples:** Uma interface de usuário intuitiva para colar a URL do vídeo e escolher a opção de download.

## Tecnologias Utilizadas

* **Node.js:** Ambiente de execução JavaScript.
* **Express.js:** Framework web para Node.js.
* **yt-dlp:** Ferramenta de linha de comando para baixar vídeos.
* **HTML5, CSS3, JavaScript:** Para a construção da interface do usuário.
* **PM2:** Gerenciador de processos para aplicações Node.js em produção.

## Como Instalar e Rodar

Siga os passos abaixo para configurar e rodar o Downtube em seu sistema.

### Pré-requisitos

* Git
* Node.js e npm (gerenciador de pacotes do Node.js)
* Python 3 (necessário para `yt-dlp`)

### Instalação

1.  **Atualizar o sistema e instalar dependências:**
    O script `install.sh` automatiza a instalação das dependências.

    ```bash
    chmod +x install.sh
    ./install.sh
    ```

    Este script irá:
    * Atualizar os pacotes do sistema.
    * Instalar `git`, `nodejs`, `npm`, `python3` e `yt-dlp`.
    * Clonar o repositório Downtube.
    * Navegar para o diretório `Downtube/archives`.
    * Instalar as dependências do Node.js (`express` e `pm2`).
    * Iniciar o servidor usando PM2.

### Acessando a Aplicação

Após a execução bem-sucedida do `install.sh`, o servidor estará rodando na porta `3000`.

Abra seu navegador e acesse: http://localhost:3000
## Estrutura do Projeto
Downtube/
├── archives/
│   ├── public/
│   │   ├── index.html       // Interface HTML da aplicação
│   │   ├── script.js        // Lógica JavaScript do frontend
│   │   └── styles.css       // Estilos CSS da aplicação
│   └── server.js          // Servidor Node.js (Express)
├── downloads/             // Diretório para vídeos baixados no servidor
└── install.sh             // Script de instalação e configuração

## Uso

1.  Acesse a aplicação no seu navegador.
2.  Cole a URL do vídeo desejado no campo de entrada.
3.  Escolha entre "Baixar para o Servidor" ou "Baixar para o Dispositivo".
    * **Baixar para o Servidor:** O vídeo será salvo na pasta `downloads` dentro do diretório raiz do projeto Downtube no servidor.
    * **Baixar para o Dispositivo:** O vídeo será baixado diretamente para o seu navegador como um arquivo MP4.

## Contribuições

Sinta-se à vontade para abrir issues ou pull requests.

## Licença

MIT

---

**Observação:** O script `install.sh` assume um ambiente baseado em Debian/Ubuntu para os comandos `apt`. Para outras distribuições Linux (como Arch Linux, que você mencionou anteriormente), os comandos de instalação de pacotes podem precisar ser ajustados (por exemplo, `pacman` em vez de `apt`).
