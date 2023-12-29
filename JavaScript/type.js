const textElement = document.getElementById("Typed-Text");
const text = "Hello! Welcome to my website :)";
let index = 0;

function typeText(){
    if (index < text.length){
        const char = text.charAt(index);
        const spanElement = document.createElement("span");
        spanElement.textContent = char;
        textElement.appendChild(spanElement);
        index++;
        setTimeout(typeText, 100);
    }
}

typeText();