let intervalIdA;
let intervalIdB;

let intervalIdE;


let intervalIdN;
let intervalIdO;

function updateTimeA() {
    // For A
    let aboxes = document.querySelectorAll(".a-fill");
    let atext = ["4", "@", "/\\", "/-\\"];
    
    for (let box of aboxes) {
        let randomText = Math.floor(Math.random() * atext.length);
        box.innerHTML = atext[randomText];

        box.addEventListener("mouseover", function() {
            aboxes.forEach(b => {
                b.innerHTML = "A";
                b.style.fontFamily = "Supply-Regular";
                b.style.color = "black";
                b.style.backgroundColor = "#FFC300";
                b.style.transition = "1s";
            });

            clearInterval(intervalIdA);

            setTimeout(() => {
                aboxes.forEach(b => {
                    b.style.fontFamily = ""; // Reset to default
                    b.style.color = "";       // Reset to default
                    b.style.backgroundColor = ""; // Reset to default
                });
                intervalIdA = setInterval(updateTimeA, 1000);
            }, 4000);
        });
    }
}

function updateTimeB() {
    // For B
    let bboxes = document.querySelectorAll(".b-fill");
    let btext = ["8", "|3", "6", "13", "]3"];
    
    for (let box of bboxes) {
        let randomText = Math.floor(Math.random() * btext.length);
        box.innerHTML = btext[randomText];

        box.addEventListener("mouseover", function() {
            bboxes.forEach(b => {
                b.innerHTML = "B";
                b.style.fontFamily = "Supply-Regular";
                b.style.color = "black";
                b.style.backgroundColor = "#FFC300";
                b.style.transition = "1s";
            });

            clearInterval(intervalIdB); 

            setTimeout(() => {
                bboxes.forEach(b => {
                    b.style.fontFamily = ""; // Reset to default
                    b.style.color = "";       // Reset to default
                    b.style.backgroundColor = ""; // Reset to default
                });
                intervalIdB = setInterval(updateTimeB, 1000);
            }, 4000);
        });
    }
}

function updateTimeE() {
    // For E
    let eboxes = document.querySelectorAll(".e-fill");
    let etext = ["3", "€", "£"];
    
    for (let box of eboxes) {
        let randomText = Math.floor(Math.random() * etext.length);
        box.innerHTML = etext[randomText];

        box.addEventListener("mouseover", function() {
            eboxes.forEach(b => {
                b.innerHTML = "E";
                b.style.fontFamily = "Supply-Regular";
                b.style.color = "black";
                b.style.backgroundColor = "#FFC300";
                b.style.transition = "1s";
            });

            clearInterval(intervalIdE); 
        });
    }
}

function updateTimeN() {
    // For N
    let nboxes = document.querySelectorAll(".n-fill");
    let ntext = ["|\\|", "/\\/", "/V", "[\\]"];
    
    for (let box of nboxes) {
        let randomText = Math.floor(Math.random() * ntext.length);
        box.innerHTML = ntext[randomText];

        box.addEventListener("mouseover", function() {
            nboxes.forEach(b => {
                b.innerHTML = "N";
                b.style.fontFamily = "Supply-Regular";
                b.style.color = "black";
                b.style.backgroundColor = "#FFC300";
            });

            clearInterval(intervalIdN); 
        });
    }
}

function updateTimeO() {
    // For O
    let oboxes = document.querySelectorAll(".o-fill");
    let otext = ["0", "()", "[]"];
    
    for (let box of oboxes) {
        let randomText = Math.floor(Math.random() * otext.length);
        box.innerHTML = otext[randomText];

        box.addEventListener("mouseover", function() {
            oboxes.forEach(b => {
                b.innerHTML = "O"; 
                b.style.fontFamily = "Supply-Regular";
                b.style.color = "black";
                b.style.backgroundColor = "#FFC300";
                b.style.transition = "1s";
            });

            clearInterval(intervalIdO); 
        });
    }
}

intervalIdA = setInterval(updateTimeA, 1000);
intervalIdB = setInterval(updateTimeB, 1000);

intervalIdE = setInterval(updateTimeE, 1000);


intervalIdN = setInterval(updateTimeN, 1000);
intervalIdO = setInterval(updateTimeO, 1000);

