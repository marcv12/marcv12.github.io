const greetings = [
    "Hey! I'm Marc Violides", // English
    "Salut! Je suis Marc Violides", // French
    "¡Hola! Soy Marc Violides", // Spanish
    "Ciao! Sono Marc Violides", // Italian
    "مرحبا! أنا مارك فيوليدس" // Arabic
];

let currentIndex = 0;

function typeGreeting(message, index) {
    if (index < message.length) {
        document.getElementById('greeting').innerHTML = message.substring(0, index + 1);
        setTimeout(() => typeGreeting(message, index + 1), 100); // Adjust typing speed
    } else {
        // Wait a bit before starting to erase the greeting
        setTimeout(() => eraseGreeting(message), 2000); // Adjust pause duration
    }
}

function eraseGreeting(message) {
    if (message.length > 0) {
        document.getElementById('greeting').innerHTML = message.substring(0, message.length - 1);
        setTimeout(() => eraseGreeting(message.substring(0, message.length - 1)), 100); // Adjust erasing speed
    } else {
        // Move to the next greeting after the current one is erased
        currentIndex = (currentIndex + 1) % greetings.length;
        typeGreeting(greetings[currentIndex], 0);
    }
}

// Start the cycle on page load
window.addEventListener('load', () => typeGreeting(greetings[currentIndex], 0));
