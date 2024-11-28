// Sélectionne le conteneur
const chatContainer = document.getElementById('chat-container');

// Fonction pour ajouter un message
function addMessage(username, text) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('chat-message');
  messageDiv.innerHTML = `<strong>${username}:</strong> ${text}`;
  
  // Ajoute le message au conteneur
  chatContainer.appendChild(messageDiv);

  // Supprime les messages après 10 secondes
  setTimeout(() => {
    messageDiv.remove();
  }, 10000);
}

// Simule des messages qui arrivent
setInterval(() => {
  const usernames = ['Viewer1', 'Viewer2', 'Viewer3'];
  const messages = ['Hello !', 'C’est trop beau 🥰', 'Comment ça va ?'];
  
  const randomUser = usernames[Math.floor(Math.random() * usernames.length)];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  addMessage(randomUser, randomMessage);
}, 3000);
