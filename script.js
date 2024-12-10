function showMessage() {
    const message = document.getElementById('message');
    const button = document.getElementById('loveButton');
    message.textContent += " ❤️";
    message.classList.add('reveal');
    document.body.classList.add('new-background');
    button.disabled = true; // Wyłącz przycisk, ale nie usuwaj go
    button.style.opacity = '0.5'; // Zmniejsz widoczność, by pokazać, że jest nieaktywny
    button.style.cursor = 'not-allowed'; // Wskaż, że przycisk jest wyłączony
}
