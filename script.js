let currentValue = 0;
let firstInput = 0;
let secondInput = 0;
let operator = "+";

const keyList = document.querySelectorAll(".key");
const buttonContainer = document.querySelector("#button-container");
const display = document.querySelector("#display");

buttonContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("number")) {
        firstInput = event.target.textContent;
        secondInput = 
        showDisplay();
        console.log(firstInput);
    }
    if (event.target.classList.contains("operator")) {
        operator = event.target.textContent;
        operate(operator);
        console.log(operator);
    }
});


const showDisplay = function() {
    display.textContent = firstInput || currentValue;
}

const add = function(operand) {
    return currentValue += operand;
}

const subtract = function(operand) {
    return currentValue -= operand;
}

const multiply = function(operand) {
    return currentValue *= operand;
}

const divide = function(operand) {
    return currentValue /= operand;
}

const operate = function(operator, firstInput, secondInput) {
    return ``
}