// ===== 1. Paramètres Twitch =====
const twitchUsername = 'Claclou_che'
const channelName = '#Claclou'

const chatContainer = document.getElementById('chat-container');

// ===== 2. Connexion au WebSocket Twitch IRC =====
const socket = new WebSocket('wss://irc-ws.chat.twitch.tv:443');

socket.onopen = () => {
  console.log('Connecté à Twitch');
  socket.send(`PASS ${oauthToken}`);
  socket.send(`NICK ${twitchUsername}`);
  socket.send(`JOIN ${channelName}`);
};

socket.onmessage = (event) => {
  const message = event.data;

  // ===== 3. Filtrer et traiter les messages =====
  if (message.includes('PRIVMSG')) {
    const username = message.split('!')[0].slice(1); // Récupère le pseudo
    const chatMessage = message.split('PRIVMSG')[1].split(':')[1]; // Récupère le texte

    // ===== 4. Afficher le message dans le chat =====
    addMessage(username, chatMessage);
  }
};

socket.onerror = (error) => {
  console.error('Erreur de connexion:', error);
};

// ===== 5. Fonction pour ajouter un message =====
function addMessage(username, text) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('chat-message'); // Style défini dans styles.css
  messageDiv.innerHTML = `<strong>${username}:</strong> ${text}`;
  chatContainer.appendChild(messageDiv);
