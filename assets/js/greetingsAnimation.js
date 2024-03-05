const greetings = [
    "Hey! I'm Marc Violides", // English
    "Salut! Je suis Marc Violides", // French
    "¡Hola! Soy Marc Violides", // Spanish
    "Ciao! Sono Marc Violides", // Italian
    "مرحبا! أنا مارك فيوليدس" // Arabic
];

let currentIndex = 0;

function changeGreeting() {
    document.getElementById('greeting').innerHTML = greetings[currentIndex];
    currentIndex = (currentIndex + 1) % greetings.length; // Loop back to the first greeting after the last one
    setTimeout(changeGreeting, 3000); // Change greeting every 3 seconds
}

// Start the cycle on page load
window.addEventListener('load', changeGreeting);
