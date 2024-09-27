let firstNum = "";
let op;
let secondNum;

window.onload = function() {
    let digits = document.getElementsByClassName("digit-btn")
    // console.log(digits);
    for(let x = 0; x < digits.length; x++) {
        digits[x].addEventListener("click", () => {
            updateDisplay(digits[x].textContent);
        })
    }
}

function updateDisplay(digit) {
    let disp = document.getElementById("display");
    let currDisp = disp.textContent;
    disp.textContent = currDisp + toString(digit);
}


function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x/y;
}

function operate(operator, x, y) {
    switch (operator) {
        case "+":
            add(x, y);
            break;
        case "-":
            subtract(x, y);
            break;
        case "*":
            multiply(x, y);
            break;
        case "/":
            divide(x, y);
            break;
        default:
            console.log("ERROR: could not recognize operator");
    }
}