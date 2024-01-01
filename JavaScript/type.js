const textElement = document.getElementById("Typed-Text");
const messages = ["Hello! Welcome to my website :)",
"Check out my projects!",
"Contact me at haklaitom@gmail.com"];

let messageIndex = 0;
let index = 0;
let isDeleting = false;

function typeText() {
    const currentMessage = messages[messageIndex];

    if (index < currentMessage.length && !isDeleting) {
        const char = currentMessage.charAt(index);
        const spanElement = document.createElement("span");
        spanElement.textContent = char;
        textElement.appendChild(spanElement);
        index++;
        setTimeout(typeText, 100); // Typing speed
    } else {
        isDeleting = true;
        setTimeout(deleteText, 800); // Delay before deleting
    }
}

function deleteText() {
    const currentMessage = messages[messageIndex];
    const spanElements = textElement.querySelectorAll("span");
    const lastSpan = spanElements[spanElements.length - 1];

    if (lastSpan) {
        lastSpan.remove();
        index--;
        setTimeout(deleteText, 50); // Deleting speed
    } else {
        isDeleting = false;
        messageIndex = (messageIndex + 1) % messages.length; // Switch to the next message
        setTimeout(typeText, 800); // Delay before typing the next message
    }
}

typeText();

