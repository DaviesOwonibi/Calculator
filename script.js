resultBar = document.getElementById("result")
const pTagInsideDiv = resultBar.querySelector("p");
var expression;
var filled = false;
var equalPressed = false;

function clearContent() {
    pTagInsideDiv.textContent = '';
}

function addToResult(Char) {
    if (filled == false && equalPressed == false) {
        pTagInsideDiv.textContent += Char;
        expression = pTagInsideDiv.textContent;
    }
    else {
        clearContent();
        pTagInsideDiv.textContent = Char;
        expression = pTagInsideDiv.textContent;
        equalPressed = false; // Set equalPressed to false for new characters
    }
}


function equals() {
    result = eval(expression);
    pTagInsideDiv.textContent = result;
    expression = ''; // Clear the expression variable
    
    filled = false; // Allow user to start a new equation
    equalPressed = true;
}
