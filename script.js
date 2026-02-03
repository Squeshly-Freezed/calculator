
const calculate = function() {

    let currentValue = 0;
    let secondInput = 0;
    // let operator = "+";

    let expression = {
            firstInput: 0,
            operator: null,
            secondInput: 0,
        };

    const buttonContainer = document.querySelector("#button-container");
    const display = document.querySelector("#display");

    buttonContainer.addEventListener("click", (event) => {
        
        if (event.target.classList.contains("number")) {
            expression.firstInput = event.target.textContent;
            showDisplay(expression.firstInput);
            console.log(expression);

        }
        if (event.target.classList.contains("operator")) {
            expression.operator = event.target.textContent;
            console.log(expression);
        }

        if (event.target.classList.contains("clear")) {
            clear(firstInput, secondInput, currentValue);
        }

    });


    const showDisplay = function(response) {
        display.textContent = response;
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

    const clear = function(firstInput, secondInput, currentValue) {
        display.textContent = 0;
        firstInput = 0;
        secondInput = 0;
        currentValue = 0;
    }

    const operate = function(operator, firstInput, secondInput) {
        // currentValue = 
        showDisplay(currentValue);
    }

};

calculate();