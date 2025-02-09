document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value;

    const newMessage = document.createElement('li');
    newMessage.textContent = messageText;

    document.getElementById('messageList').appendChild(newMessage);

    messageInput.value = '';
});
