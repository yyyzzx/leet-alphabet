// function updateTime() {
// let boxes = document.querySelectorAll(".fill");
// let atext = ["4", "@", "aye", "/-\\", "/\\"];

// for (let box of boxes) {
//     let randomText = Math.floor(Math.random() * atext.length);
//     box.innerHTML = atext[randomText];

//     // Add event listeners for hover effect
//     box.addEventListener("mouseover", function() {
//         box.style.backgroundColor = "bleck";  // Show "A" when hovered
//     });

//     box.addEventListener("mouseout", function() {
//         // Restore the original random text when the mouse leaves
//         box.innerHTML = atext[randomText];
//     });

// }    
// }
// setInterval(updateTime,1000);


function updateTime() {
    let boxes = document.querySelectorAll(".fill");
    let atext = ["4", "@", "/-\\", "/\\"];

    for (let box of boxes) {
        let randomText = Math.floor(Math.random() * atext.length);
        box.innerHTML = atext[randomText];

        // Add event listeners to each box
        box.addEventListener("mouseover", function() {
            // Change background color of all boxes to black on hover
            boxes.forEach(b => {
                b.style.backgroundColor = "black";
                b.style.transition = "0.3s";
            });
        });

        box.addEventListener("mouseout", function() {
            // Revert background color of all boxes when the mouse leaves
            boxes.forEach(b => {
                b.style.backgroundColor = "";  // Remove the inline style, reset to original
            });
        });
    }
}

// Start the interval
setInterval(updateTime, 1000);
