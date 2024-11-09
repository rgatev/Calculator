const display = document.querySelector("#display");
const keypadButtons = document.querySelectorAll(".numbers");
const deleteOperator = document.querySelector("#delete");
const operatorButton = document.querySelectorAll(".operator");
const resultButton = document.querySelector("#result");

let defaultResult = 0;

let currentResult = defaultResult;
let currentNumber = 0;
let prevNumber = 0;
let operator = "";
let btn;
let description;

deleteOperator.addEventListener("click", clearDisplayText);

function sum() {
    currentResult = +currentNumber + +prevNumber;

    console.log("result is:", currentResult);
    display.textContent = currentResult;
}

function subtract() {
    currentResult = prevNumber - currentNumber;

    console.log("result is:", currentResult);
    display.textContent = currentResult;
}

function division() {
    currentResult = prevNumber / currentNumber;
    display.textContent = currentResult;
}

function multiply() {
    currentResult = parseInt(currentNumber * prevNumber);
    display.textContent = currentResult;
}

resultButton.addEventListener("click", () => {
    switch (operator) {
        case "+":
            sum();
            break;
        case "-":
            subtract();
            break;
        case "x":
            multiply();
            break;
        case "/":
            division();
            break;
    }
    currentNumber = currentResult;
});

// document.querySelector(".special")?.classList.remove("special");
// resultButton.classList.add("special");

// clearText function whenever i click AC
function clearDisplayText() {
    // document.querySelector(".special")?.classList.remove("special");
    if (deleteOperator) {
        currentNumber = 0;
        prevNumber = 0;
        currentResult = 0;
    }
    display.textContent = "0";
    console.log("display is cleared");
}

// keypad buttons
keypadButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(".special") ? .classList.remove("special");
        currentNumber += btn.textContent;

        currentNumber = parseInt(currentNumber);
        if (display.textContent === "0") {
            display.textContent = btn.textContent;
        } else {
            display.textContent += btn.textContent;
        }
        currentNumber = display.textContent;
    });
});
// operator buttons

operatorButton.forEach((btn) => {
    btn.addEventListener("click", () => {
        // document.querySelector(".special")?.classList.remove("special");
        btn.classList.add("special");

        operator = btn.textContent;
        prevNumber = currentNumber;
        display.textContent += operator;
        currentNumber = 0;
    });
});

// resultButton.addEventListener("click", subtract);