var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var numberOfSquares = 6;

resetButton.addEventListener("click", function() {

    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    heading.style.backgroundColor = "steelblue";
    for(var i=0; i<squares.length; i++)
    {   
        squares[i].style.backgroundColor = colors[i];
    }
    this.textContent = "NEW COLORS";
    messageDisplay.textContent = "";
});

for(var i=0; i<modeButtons.length; i++)
{
    modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent === "Easy")
            numberOfSquares = 3;
        else
            numberOfSquares = 6;

        colors = generateRandomColors(numberOfSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;    

        for(var i=0; i<squares.length; i++)
        {  
            squares[i].style.display = "block"; 
            if(colors[i])
                squares[i].style.backgroundColor = colors[i];
            else
                squares[i].style.display = "none";
        }
    });
}


var colors = generateRandomColors(numberOfSquares);

var pickedColor = pickColor();

var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var heading = document.querySelector("h1");

for(var i=0; i<squares.length; i++)
{
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor)
        {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            heading.style.backgroundColor = clickedColor;
            reset.textContent = "PLAY AGAIN";
        }
        else
        {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}




function pickColor() {
    var randomIndex = Math.floor(Math.random()*colors.length);
    return colors[randomIndex];
}

function changeColors(color) {
    for(var i=0; i<squares.length; i++)
    {
        squares[i].style.backgroundColor = color;
    }
}

function generateRandomColors(num) {
    var arr = [];

    for(var i=0; i<num; i++)
    {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}
