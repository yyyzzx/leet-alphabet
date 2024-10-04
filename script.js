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
        box.style.transition = "2s";
        box.style.position = "relative";
        box.style.top = "-12px";
        box.style.left = "-12px";
        box.style.border = "black solid 0.03rem";

        clearInterval(intervalIds[box]); // Stop the interval for this specific box

        // Reset after 5 seconds
        setTimeout(() => {
            box.hovered = false; // Reset hover state for this specific box
            
            // Reset styles after hover ends
            box.style.fontFamily = "";
            box.style.color = "";
            box.style.backgroundColor = "";
            box.style.top = "";
            box.style.left = "";
            box.style.border = "";

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
    B: ["8", "|3", "6", "13", "[3"],
    C: ["<", "(", "{", "©", "¢"],
    D: ["[)", "|)", "|}", "cl"],
    E: ["3", "£", "€", "ë"],
    F: ["|=", "ƒ", "|#", "/="],
    G: ["9", "C-", "6", "(_+"],
    H: ["#","|-|","}{", "]-[", "(-)", "/-/"],
    I: ["1", "|", "!", "¡"],
    J: ["_|", "_/", "_|"],
    K: ["|<", "|{"],
    L: ["|_", "1_"],
    M: ["|\\/|", "|\\|\\|", "/\\/\\", "^^", "|v|"],
    N: ["|\\|", "/\\/", "[\\]", "/V", "^/"],
    O: ["0", "()", "[]"],
    P: ["|*", "|D", "|''", "¶"],
    Q: ["(_,)", "O_"],
    R: ["|2", "/2", "®"],
    S: ["5", "$"],
    T: ["-|-", "+", "†", "']['"],
    U: ["|_|", "(_)", "µ"],
    V: ["\\/", "^"],
    W: ["\\/\\/", "\\\\'", "\\^/"],
    X: ["%", "><", ")("],
    Y: ["¥", "'/"],
    Z: ["2", "7_", "~/_"],
};

// Iterate over each letter in the alphabet and initialize its boxes
Object.keys(alphabet).forEach(letter => {
    initializeBoxesForLetter(letter, alphabet[letter]);
});
