document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById("chat-box");
    const userMessage = document.getElementById("user-message");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", function() {
        const messageText = userMessage.value.trim();

        if (messageText !== "") {
            // Tampilkan pesan dari pengguna
            displayMessage("user", messageText);

            // Respon dari chatbot (sederhana, bisa diganti dengan yang lebih kompleks)
            const response = "Terima kasih atas pesan Anda!";

            // Tampilkan respon dari chatbot setelah jeda singkat
            setTimeout(function() {
                displayMessage("bot", response);
            }, 1000);

            // Reset input pengguna
            userMessage.value = "";
        }
    });

    function displayMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", sender);
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
