document.addEventListener('DOMContentLoaded', function () {
    const chatForm = document.getElementById('message-form');
    const chatContainer = document.getElementById('chat-container');

    chatForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const messageInput = document.getElementById('message');
        const messageText = messageInput.value.trim();

        if (messageText !== '') {
            appendMessage('You', messageText);
            messageInput.value = '';
        }
    });

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
});
