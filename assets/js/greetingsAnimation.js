const greetings = [
    "Hey! I'm Marc Violides", // English
    "Salut! Je suis Marc Violides", // French
    "¡Hola! Soy Marc Violides", // Spanish
    "Ciao! Sono Marc Violides", // Italian
    "مرحبا! أنا مارك فيوليدس" // Arabic
];

let currentIndex = 0;

function typeGreeting(fullGreeting, i = 0) {
    if (i <= fullGreeting.length) {
        document.getElementById('greeting').innerHTML = fullGreeting.substring(0, i);
        setTimeout(() => typeGreeting(fullGreeting, i + 1), 100); // Adjust typing speed here
    } else {
        // Wait a bit before starting to delete
        setTimeout(() => deleteGreeting(fullGreeting), 2000); // Adjust pause duration here
    }
}

function deleteGreeting(fullGreeting, i = null) {
    i = i !== null ? i : fullGreeting.length;
    if (i >= 0) {
        document.getElementById('greeting').innerHTML = fullGreeting.substring(0, i);
        setTimeout(() => deleteGreeting(fullGreeting, i - 1), 50); // Adjust deletion speed here
    } else {
        // Change greeting after deletion
        currentIndex = (currentIndex + 1) % greetings.length;
        typeGreeting(greetings[currentIndex]);
    }
}

// Start the cycle on page load
window.addEventListener('load', () => typeGreeting(greetings[currentIndex]));
