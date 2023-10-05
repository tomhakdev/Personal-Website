/*const borderElement = document.querySelector('about-border');

document.addEventListener('mousemove', (e) => {
    //Finds position of the cursor
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    //Finds position of border
    const elementRect = borderElement.Element.getBoundingClientRect();

    //Finds nearest center point of border
    const elementCenterX = elementRect.left + elementRect.width / 2;
    const elementCenterY = elementRect.top + elementRect.height / 2;

    // Calculate the distance between the cursor and the element's center
    const distance = Math.sqrt(
        Math.pow(mouseX - elementCenterX, 2) + Math.pow(mouseY - elementCenterY, 2)
    );

    // Define a threshold for proximity (adjust this value as needed)
    const proximityThreshold = 100;

    // Set the border color to neon blue if the cursor is nearby, otherwise reset to default color
    if (distance < proximityThreshold) {
        borderElement.style.borderColor = 'rgb(57, 255, 255)'; // Neon blue
    } else {
        borderElement.style.borderColor = 'rgb(0, 0, 0)'; // Default color
    }
});*/