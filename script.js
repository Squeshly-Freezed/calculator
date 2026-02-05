
const calculate = function() {
    
    let expression = {
        firstInput: "",
        secondInput: "",
        operator: null,
        clearOldSum: false,
        hasDecimal: false,
    };

    function initializeEventListeners() {

        const buttonContainer = document.querySelector("#button-container");
        buttonContainer.addEventListener("mousedown", handleButtons);
        function handleButtons (event) {

            if (event.target.classList.contains("number")) {
                if (expression.operator) {
                    showDisplay(expression.secondInput += event.target.textContent);    
                } else if (expression.clearOldSum) {
                    expression.hasDecimal = false; //confirm this line should stay here.
                    expression.firstInput = "";
                    expression.clearOldSum = false;
                    showDisplay(expression.firstInput += event.target.textContent);
                } else {
                    showDisplay(expression.firstInput += event.target.textContent);
                }
            }

            if (event.target.classList.contains("operator")) {
                if (!expression.operator) {
                    expression.operator = event.target.textContent;
                } else {
                    operate();
                    expression.secondInput = "";
                    expression.firstInput = `${expression.firstInput}`;
                    expression.operator = event.target.textContent;
                }
            }

            if (event.target.classList.contains("clear")) {
                clear();
            }
            
            if (expression.operator && event.target.classList.contains("equals")) {
                operate();
                expression.secondInput = "";
                expression.operator = null;
                expression.firstInput = `${expression.firstInput}`;
                expression.clearOldSum = true;
            }

            if (event.target.classList.contains("MC")) {
                if (expression.firstInput == 1337) {
                clear();
                showEasterEgg();
                }
            }

            if (event.target.classList.contains("decimal")) {
                if (expression.operator && !expression.hasDecimal) {
                    if (expression.secondInput == "") {
                        showDisplay(expression.secondInput += "0");
                        showDisplay(expression.secondInput += ".")
                    } else showDisplay(expression.secondInput += ".");
                    // expression.hasDecimal = true;
                } else if (!expression.hasDecimal) {
                    // expression.hasDecimal = true;
                    expression.firstInput == "" ? showDisplay(expression.firstInput += "0.") : showDisplay(expression.firstInput += ".");
                }
            }
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
        if (display.textContent.slice(0, 100).includes(".")) {
            expression.hasDecimal = true;
        } else {
            expression.hasDecimal = false;
        }
    }

    const clear = function() {
        expression.firstInput = "";
        expression.secondInput = "";
        expression.operator = null;
        expression.hasDecimal = false;
        showDisplay("0");
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
                showDisplay(expression.firstInput = parseFloat(expression.firstInput) + parseFloat(expression.secondInput));
                break;
            case "-":
                showDisplay(expression.firstInput = parseFloat(expression.firstInput) - parseFloat(expression.secondInput));
                break;
            case "*":
                showDisplay(expression.firstInput = parseFloat(expression.firstInput) * parseFloat(expression.secondInput));
                break;
            case "/":
                showDisplay(expression.firstInput = parseFloat(expression.firstInput) / parseFloat(expression.secondInput));
                break;
            case "%":
                showDisplay(expression.firstInput = parseFloat(expression.firstInput) % parseFloat(expression.secondInput));
                break; 
        }
    }

    document.addEventListener("DOMContentLoaded", initializeEventListeners);

};

calculate();