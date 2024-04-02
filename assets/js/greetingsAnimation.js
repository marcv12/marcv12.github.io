const greetings = [
    "Hey! I'm Marc Violides", // English
    "Salut! Je suis Marc Violides", // French
    "¡Hola! Soy Marc Violides", // Spanish
    "Ciao! Sono Marc Violides", // Italian
    "مرحبا! أنا مارك فيوليدس" // Arabic
];

let currentIndex = 0;
let currentStep = 'typing'; // Can be 'typing' or 'erasing'
let currentText = '';
let currentLength = 0;

function updateGreeting() {
    const element = document.getElementById('greeting');
    if (currentStep === 'typing') {
        if (currentLength < greetings[currentIndex].length) {
            currentLength++;
            currentText = greetings[currentIndex].substring(0, currentLength);
        } else {
            setTimeout(() => {
                currentStep = 'erasing';
                updateGreeting();
            }, 1000); // Slight pause before erasing
            return;
        }
    } else if (currentStep === 'erasing') {
        if (currentLength > 0) {
            currentLength--;
            currentText = currentText.substring(0, currentLength);
        } else {
            currentIndex = (currentIndex + 1) % greetings.length;
            currentStep = 'typing';
        }
    }
    element.innerHTML = currentText;
    setTimeout(updateGreeting, currentStep === 'typing' ? 36 : 25); // Quicker typing, quicker erasing
}

// Start the cycle on page load
window.addEventListener('load', updateGreeting);
