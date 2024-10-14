let allBoxes = []; 
let isUpdating = true; 

function updateAllBoxes(textArrays) {
    if (!isUpdating) return; 

    allBoxes.forEach(box => {
        if (!box.hovered) {  
            let letter = box.dataset.letter; 
            let textArray = textArrays[letter];
            let randomText = Math.floor(Math.random() * textArray.length);
            box.innerHTML = textArray[randomText];
        }
    });
}

function addHoverEffectToBox(box, textArray, letter) {
    box.addEventListener("mouseover", function() {
        isUpdating = false;
        box.hovered = true;   
        box.innerHTML = letter; 
        box.style.fontFamily = "Supply-Regular";
        box.style.color = "black";
        box.style.backgroundColor = "#FFC300";
        box.style.transition = "2s";
        box.style.position = "relative";
        box.style.top = "-12px";
        box.style.left = "-12px";
        box.style.boxShadow = "0.2rem 0.2rem darkorange";

        setTimeout(() => {
            box.hovered = false; 

            box.style.fontFamily = "";
            box.style.color = "";
            box.style.backgroundColor = "";
            box.style.top = "";
            box.style.left = "";
            box.style.boxShadow = "";

            let randomText = Math.floor(Math.random() * textArray.length);
            box.innerHTML = textArray[randomText];

            isUpdating = true;
        }, 5000);
    });
}

function initializeBoxesForLetter(letter, textArray) {
    let boxes = document.querySelectorAll(`.${letter.toLowerCase()}-fill`);
    boxes.forEach((box) => {
        box.dataset.letter = letter;

        let randomText = Math.floor(Math.random() * textArray.length);
        box.innerHTML = textArray[randomText];

        addHoverEffectToBox(box, textArray, letter);

        allBoxes.push(box);
    });
}

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
    M: ["|\\/|", "|\\|\\", "/\\/\\", "^^", "|v|"],
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

Object.keys(alphabet).forEach(letter => {
    initializeBoxesForLetter(letter, alphabet[letter]);
});

setInterval(() => updateAllBoxes(alphabet), 1000);


function showChapOne() {
    let intro = document.getElementById("intro");
    let one = document.getElementById("chapOne");  
    let two = document.getElementById("chapTwo");
    let three = document.getElementById("chapThree");
    let origin = document.getElementById("origin");
    let forms = document.getElementById("forms"); 
    let alphabet = document.getElementById("alphabet");

    origin.style.display = "flex";
    forms.style.display = "none";
    one.value = "↓";  
    two.value = "→";
    three.value = "→";
    
    intro.style.transition = "height 2s, opacity 2s";  
    intro.style.overflow = "hidden"; 
    intro.style.height = intro.offsetHeight + "px";  
    
    setTimeout(function() {
        intro.style.height = "0";  
        intro.style.opacity = "0"; 
    }, 0); 
    
    setTimeout(function() {
        intro.style.display = "none"; 
    }, 2000);  
}


function showChapTwo() {
    let intro = document.getElementById("intro");
    let one = document.getElementById("chapOne");  
    let two = document.getElementById("chapTwo");
    let three = document.getElementById("chapThree");
    let origin = document.getElementById("origin");
    let forms = document.getElementById("forms"); 
    let alphabet = document.getElementById("alphabet");

    forms.style.display = "flex";
    origin.style.display = "none";
    alphabet.style.display = "none";
    two.value = "↓";  
    one.value = "→";
    three.value = "→";
    
    intro.style.transition = "height 2s, opacity 2s";  
    intro.style.overflow = "hidden";  

    intro.style.height = "0";    
    intro.style.opacity = "0";     
    
    setTimeout(function() {
        intro.style.display = "none";
    }, 2000); 
}

function showChapThree() {
    let intro = document.getElementById("intro");
    let one = document.getElementById("chapOne");  
    let two = document.getElementById("chapTwo");
    let three = document.getElementById("chapThree");
    let origin = document.getElementById("origin");
    let forms = document.getElementById("forms"); 
    let alphabet = document.getElementById("alphabet");

    origin.style.display = "none";
    forms.style.display = "none";
    alphabet.style.display = "flex";
    three.value = "↓";  
    two.value = "→";
    one.value = "→";
    
    intro.style.transition = "height 2s, opacity 2s"; 
    intro.style.overflow = "hidden"; 
    intro.style.height = intro.offsetHeight + "px";  
    
    setTimeout(function() {
        intro.style.height = "0"; 
        intro.style.opacity = "0";   
    }, 0); 
    
    setTimeout(function() {
        intro.style.display = "none"; 
    }, 2000);  
}



