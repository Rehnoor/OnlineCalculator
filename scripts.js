let firstNum = null;
let op = null;
let secondNum = null;
const defNum = "0.0";
let currDisp = defNum;

window.onload = function() {
    let digits = document.getElementsByClassName("digit-btn")
    for(let x = 0; x < digits.length; x++) {
        digits[x].addEventListener("click", () => {
            console.log(digits[x].textContent);
            updateDisplay(digits[x].textContent);
        })
    }
    let ops = document.getElementsByClassName("fn-btn");
    for(let y = 0; y < ops.length; y++) {
        ops[y].addEventListener("click", () => {
            if (op !== null && currDisp !== defNum) {
                // console.log("HERE");
                let ans = operate(op, firstNum, currDisp);
                console.log("=" + ans);
                firstNum = ans;
                currDisp = defNum;
                updateDisplay(ans);
            } else {
                firstNum = currDisp;
                updateDisplay(defNum);
            }
            op = ops[y].textContent
            console.log(op);
        })
    }

    let eq = document.getElementById("eq-btn");
    eq.addEventListener("click", () => {
        secondNum = currDisp;
        let ans = operate(op, firstNum, secondNum);
        // console.log(ans);
        firstNum = ans;
        updateDisplay(firstNum);
    })

    let clr = document.getElementById("clr-btn");
    clr.addEventListener("click", () => {
        updateDisplay(defNum);
        firstNum = null;
        secondNum = null;
        op = null;
    })


}

function updateDisplay(digit) {
    let disp = document.getElementById("display");
    if (currDisp == defNum) {
        disp.textContent = digit;
        currDisp = digit;
    } else if (digit == defNum) {
        disp.textContent = defNum;
        currDisp = defNum;
    } else {
        disp.textContent = currDisp + digit;
        currDisp = currDisp + digit;
    }
}


function add(x, y) {
    return Number(x) + Number(y);
}

function subtract(x, y) {
    return Number(x) - Number(y);
}

function multiply(x, y) {
    return Number(x) * Number(y);
}

function divide(x, y) {
    return Number(x)/Number(y);
}

function operate(operator, x, y) {
    let ans;
    switch (operator) {
        case "+":
            ans = add(x, y);
            break;
        case "-":
            ans = subtract(x, y);
            break;
        case "x":
            ans = multiply(x, y);
            break;
        case "÷":
            ans = divide(x, y);
            break;
        default:
            ans = null;
            console.log("ERROR: could not recognize operator");
    }
    return ans;
}