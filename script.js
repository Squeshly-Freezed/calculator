
const calculate = function() {
    
    let expression = {
        firstInput: 0,
        operator: null,
        secondInput: 0,
    };

    function initializeEventListeners() {

        const buttonContainer = document.querySelector("#button-container");
        buttonContainer.addEventListener("mousedown", handleButtons);
        function handleButtons (event) {

            if (event.target.classList.contains("number")) {
                if (expression.operator) {
                    expression.secondInput = parseFloat(event.target.textContent);
                    showDisplay(expression.secondInput);    
                } else {
                    expression.firstInput = parseFloat(event.target.textContent);
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
                if (expression.firstInput == 1337) {
                clear();
                showEasterEgg();
                }
            }

            // if (event.target.classList.contains("decimal")) {
            //     if (expression.operator) {
            //         expression.secondInput = parseInt(.)
            //     } else {
            //         expression.firstInput = 
            //     }
            // }
            console.log(expression);
        }
         
        document.addEventListener("contextmenu", (event) => event.preventDefault());

    }

    const display = document.querySelector("#display");
    const showDisplay = function(response) {
        display.style.visibility = "hidden";
        setTimeout(() => {
            display.style.visibility = "visible";
        }, 45);
        display.textContent = response;
    }

    const clear = function() {
        expression.firstInput = 0;
        expression.operator = null;
        expression.secondInput = 0;
        showDisplay(expression.firstInput);
    }

    const character = document.querySelector("#lady");
    const showEasterEgg = function() {
        character.style.visibility = "visible";
        character.style.opacity = "1";
        setTimeout(() => {
        character.style.visibility = "hidden";
        character.style.opacity = "0";
        }, 1337);
    }

    const operate = function() {
        switch (expression.operator) {
            case "+":
                showDisplay(expression.firstInput = expression.firstInput + expression.secondInput);
                break;
            case "-":
                showDisplay(expression.firstInput = expression.firstInput - expression.secondInput);
                break;
            case "*":
                showDisplay(expression.firstInput = expression.firstInput * expression.secondInput);
                break;
            case "/":
                showDisplay(expression.firstInput = expression.firstInput / expression.secondInput);
                break;
            case "%":
                showDisplay(expression.firstInput = expression.firstInput % expression.secondInput);
                break; 
        }
    }

    document.addEventListener("DOMContentLoaded", initializeEventListeners);

};

calculate();