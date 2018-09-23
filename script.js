var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var reset = document.getElementById("newColorsButton")
var messageDisplay = document.getElementById("messageDisplay")
var easyButton = document.getElementById("easyButton")
var hardButton = document.getElementById("hardButton")



var numberOfColors = 6;
var colors = generateRandomColors(numberOfColors);
var goalColor = pickColor();

init();

function init() {

    hardButton.classList.add("selected");
    colorDisplay.textContent = goalColor;
    messageDisplay.textContent = null;

    reset.addEventListener("click", function () {
        newGame(numberOfColors);

    })

    easyButton.addEventListener("click", function () {
        selectEasyButton();
        newGame(3);
    })

    hardButton.addEventListener("click", function () {
        selectHardButton();
        newGame(6);
    })


    for (var i = 0; i < squares.length; i++) {
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];

        squares[i].addEventListener("click", function () {
            //grab color
            var color = this.style.backgroundColor;
            // then compar it to goalColor
            if (color === goalColor) {
                messageDisplay.textContent = "Correct";
                h1.style.backgroundColor = goalColor;
                changeColors(goalColor);
                reset.textContent = "Play Again ?"
            } else {
                this.style.backgroundColor = "transparent";
                messageDisplay.textContent = "Try Again"

            }
        })
    }

}

function newGame(numberOfColors) {
    // if (numberOfColors === 3) {
    //     for (var i = 3; i < squares.length; i++) {
    //         squares[i].style.display = "none";
    //     }
    // }
    // if (numberOfColors === 6) {
    //     for (var i = 3; i < squares.length; i++) {
    //         squares[i].style.display = "block";
    //     }
    // }

    this.numberOfColors = numberOfColors;
    reset.textContent = "New Colors"
    colors = generateRandomColors(numberOfColors);
    goalColor = pickColor();
    messageDisplay.textContent = null;
    h1.style.backgroundColor = "steelblue";
    colorDisplay.textContent = goalColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }

    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) { //if there is a next color
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {

    var arr = [];
    for (var i = 0; i < num; i++) {
        arr[i] = randomColor();
        // or u can use arr.push()
    }

    return arr;
}

function randomColor() {
    //picking  a red
    var r = Math.floor(Math.random() * 256);
    //picking a green
    var g = Math.floor(Math.random() * 256);
    // picking a blue
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function selectEasyButton() {
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
}

function selectHardButton() {
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
}

