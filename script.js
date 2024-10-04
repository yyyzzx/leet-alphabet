let intervalIds = {}; // Store interval IDs for individual boxes

// Function to update content of a specific box
function updateTimeForBox(box, textArray) {
    if (!box.hovered) { // Only update if the specific box is not hovered
        let randomText = Math.floor(Math.random() * textArray.length);
        box.innerHTML = textArray[randomText];
    }
}

// Function to add hover effect for each individual box
function addHoverEffectToBox(box, textArray, letter) {
    box.addEventListener("mouseover", function() {
        box.hovered = true; // Mark the box as hovered
        box.innerHTML = letter; // Set the content to the letter
        box.style.fontFamily = "Supply-Regular";
        box.style.color = "black";
        box.style.backgroundColor = "#FFC300";
        box.style.transition = "1s";

        clearInterval(intervalIds[box]); // Stop the interval for this specific box

        // Reset after 5 seconds
        setTimeout(() => {
            box.hovered = false; // Reset hover state for this specific box
            
            // Reset styles after hover ends
            box.style.fontFamily = "";
            box.style.color = "";
            box.style.backgroundColor = "";

            // After 5 seconds, update to a random text immediately
            updateTimeForBox(box, textArray);
            
            // Start updating again after timeout
            intervalIds[box] = setInterval(() => updateTimeForBox(box, textArray), 1000);
        }, 5000);
    });
}

// Function to initialize intervals and hover effects for each box of a given letter
function initializeBoxesForLetter(letter, textArray) {
    let boxes = document.querySelectorAll(`.${letter.toLowerCase()}-fill`);
    
    boxes.forEach((box) => {
        // Immediately generate random content for each box on page load
        updateTimeForBox(box, textArray);

        // Start updating each box individually
        intervalIds[box] = setInterval(() => updateTimeForBox(box, textArray), 1000);
        
        // Add hover effect for each individual box
        addHoverEffectToBox(box, textArray, letter);
    });
}

// Initialize for all letters in the alphabet
const alphabet = {
    A: ["4", "@", "/\\", "/-\\"],
    B: ["8", "|3", "6", "13", "]3"],
    C: ["<", "(", "{", "[", "€"],
    D: [")", "|)", "|}", "cl", "|>"],
    E: ["3", "£", "€", "ë"],
    F: ["|=", "ph", "||"],
    G: ["9", "g", "6"],
    H: ["#","|-|","|-", "]-["],
    I: ["1", "|", "!", "[]"],
    J: ["_|", "_/", "_|"],
    K: ["|<", "|{"],
    L: ["|_", "1"],
    M: ["|\\/|", "|\\|\\|", "/\\/\\", "^^"],
    N: ["|\\|", "/\\/"],
    O: ["0", "()", "[]"],
    P: ["|*", "|D", "9"],
    Q: ["(_,)", "0,"],
    R: ["|2", "12"],
    S: ["5", "$"],
    T: ["7", "+", "†"],
    U: ["|_|", "(_)"],
    V: ["\\/"],
    W: ["\\/\\/"],
    X: ["%"],
    Y: ["¥", "'/"],
    Z: ["2", "5"],
};

// Iterate over each letter in the alphabet and initialize its boxes
Object.keys(alphabet).forEach(letter => {
    initializeBoxesForLetter(letter, alphabet[letter]);
});
