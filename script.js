
const calculate = function() {
    
    document.addEventListener('DOMContentLoaded', initializeEventListeners);

    let expression = {
        firstInput: 0,
        operator: null,
        secondInput: 0,
    };
        
    function initializeEventListeners() {

        document.addEventListener("contextmenu", (event) => event.preventDefault());

        const buttonContainer = document.querySelector("#button-container");
        buttonContainer.addEventListener("click", (event) => {
            
            if (event.target.classList.contains("number")) {
                if (expression.operator) {
                    expression.secondInput = parseInt(event.target.textContent);
                    showDisplay(expression.secondInput);    
                } else {
                    expression.firstInput = parseInt(event.target.textContent);
                    showDisplay(expression.firstInput);
                }
            }

            if (event.target.classList.contains("operator")) {
                if (!expression.operator) {
                    expression.operator = event.target.textContent;
                } else {
                    operate();
                    expression.secondInput = 0;
                    expression.operator = event.target.textContent;
                }

            }

            if (event.target.classList.contains("clear")) {
                clear();
            }
            
            if (expression.operator && event.target.classList.contains("equals")) {
                operate();
                expression.secondInput = 0;
                expression.operator = null;
            }

            if (event.target.classList.contains("MC")) {
                if (expression.firstInput == 1337);
                clear();
                showEasterEgg();
            }

            console.log(expression);

        });

    }

    const character = document.querySelector("#lady");
    const display = document.querySelector("#display");
    const showDisplay = function(response) {
        display.textContent = response;
    }

    const add = function() {
        expression.firstInput = expression.firstInput + expression.secondInput;
    }

    const subtract = function() {
        expression.firstInput = expression.firstInput - expression.secondInput;
    }

    const multiply = function() {
        expression.firstInput = expression.firstInput * expression.secondInput;
    }

    const divide = function() {
        expression.firstInput = expression.firstInput / expression.secondInput;
    }

    const modulo = function() {
        expression.firstInput = expression.firstInput % expression.secondInput;
    }

    const clear = function() {
        expression.firstInput = 0;
        expression.operator = null;
        expression.secondInput = 0;
        showDisplay(0);
    }

    const showEasterEgg = function() {
        character.style.display="inline";
    }

    const operate = function() {
        switch (expression.operator) {
            case "+":
                add();
                showDisplay(expression.firstInput);
                break;
            case "-":
                subtract();
                showDisplay(expression.firstInput);
                break;
            case "*":
                multiply();
                showDisplay(expression.firstInput);
                break;
            case "/":
                divide();
                showDisplay(expression.firstInput);
                break;
            case "%":
                modulo();
                showDisplay(expression.firstInput);
                break; 
        }
    }

};

calculate();