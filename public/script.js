const socket = io();

function appendMessage(message) {
  const chatMessages = document.getElementById('chat-messages');
  const messageDiv = document.createElement('div');
  messageDiv.textContent = message;
  chatMessages.appendChild(messageDiv);
}

function sendMessage() {
  const messageInput = document.getElementById('message');
  const message = messageInput.value.trim();

  if (message === '') {
    return;
  }

  // Send the message to the server
  socket.emit('message', message);

  // Display the message on the client side
  appendMessage(`You: ${message}`);
  messageInput.value = '';
}

socket.on('message', (message) => {
  // Receive messages from the server and display them
  appendMessage(`User: ${message}`);
});
