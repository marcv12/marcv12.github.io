const greetings = [
    "Hey! I'm Marc Violides", // English
    "Salut! Je suis Marc Violides", // French
    "¡Hola! Soy Marc Violides", // Spanish
    "Ciao! Sono Marc Violides", // Italian
    "مرحبا! أنا مارك فيوليدس" // Arabic
];

let currentIndex = 0;

function updateGreeting(newText, oldText, isDeleting) {
    const greetingElement = document.getElementById('greeting');
    
    if (isDeleting) {
        // Remove last character
        greetingElement.innerHTML = oldText.substring(0, oldText.length - 1);
    } else {
        // Add next character
        greetingElement.innerHTML = newText.substring(0, oldText.length + 1);
    }

    let timeout = 200; // Typing speed

    if (isDeleting) {
        timeout /= 2; // Make deletion faster
    }

    if (!isDeleting && oldText === newText) {
        // If finished typing, pause before starting to delete
        timeout = 3000;
        isDeleting = true;
    } else if (isDeleting && oldText === '') {
        // If finished deleting, move to the next greeting and pause
        isDeleting = false;
        currentIndex = (currentIndex + 1) % greetings.length;
        timeout = 500; // Pause before typing next greeting
    }

    setTimeout(() => {
        updateGreeting(greetings[currentIndex], greetingElement.innerHTML, isDeleting);
    }, timeout);
}

// Start the typing effect when the page loads
window.addEventListener('load', () => updateGreeting(greetings[currentIndex], '', false));
