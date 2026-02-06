const calculate = function() {
    
    let expression = {
        firstOperand: "",
        secondOperand: "",
        operator: null,
        clearOldSum: false,
        firstHasDecimal: false,
        secondHasDecimal: false,
    };

    function initializeEventListeners() {

        const buttonContainer = document.querySelector("#button-container");
        buttonContainer.addEventListener("mousedown", handleButtons);
        function handleButtons (event) {

            if (event.target.classList.contains("0")) {
                if (expression.operator && expression.firstOperand && (!expression.secondOperand.substring(0, 1).includes("0") || expression.secondHasDecimal)) {
                    updateDisplay(expression.secondOperand += event.target.textContent);
                }
                else if (expression.clearOldSum && (!expression.firstOperand.substring(0, 1).includes("0") || expression.firstHasDecimal)) {
                    expression.firstOperand = "";
                    expression.clearOldSum = false;
                    updateDisplay(expression.firstOperand += event.target.textContent);
                }
                else if ((!expression.firstOperand.substring(0, 1).includes("0") || expression.firstHasDecimal) && !expression.operator) {
                    updateDisplay(expression.firstOperand += event.target.textContent);
                }
            }

            if (event.target.classList.contains("number")) {
                if (expression.firstOperand.substring(0, 1).includes("0") && !expression.firstHasDecimal) expression.firstOperand = "";
                if (expression.secondOperand.substring(0, 1).includes("0") && !expression.secondHasDecimal) expression.secondOperand = "";
                if (expression.operator && expression.firstOperand) {
                    updateDisplay(expression.secondOperand += event.target.textContent);
                } else if (expression.clearOldSum) {
                    expression.firstOperand = "";
                    expression.clearOldSum = false;
                    updateDisplay(expression.firstOperand += event.target.textContent);
                } else if (!expression.operator) {
                    updateDisplay(expression.firstOperand += event.target.textContent);
                }
            }

            if (event.target.classList.contains("operator")) {
                expression.clearOldSum = false;
                if (!expression.operator && expression.firstOperand) {
                    expression.operator = event.target.textContent;
                } else if (expression.operator) {
                    operate();
                    expression.secondOperand = "";
                    expression.secondHasDecimal = false;
                    expression.firstOperand = `${expression.firstOperand}`;
                    expression.operator = event.target.textContent;
                }
            }

            if (event.target.classList.contains("clear")) {
                clear();
            }
            
            if (event.target.classList.contains("equals")) {
                operate();
                expression.secondOperand = "";
                expression.secondHasDecimal = false;
                expression.operator = null;
                expression.firstOperand = `${expression.firstOperand}`;
                expression.clearOldSum = true;
            }

            if (event.target.classList.contains("MC")) {
                if (expression.firstOperand == 1337) {
                clear();
                showEasterEgg();
                }
            }

            if (event.target.classList.contains("decimal")) {
                if (expression.clearOldSum) {
                    expression.firstOperand = "";
                    expression.clearOldSum = false;
                    updateDisplay(expression.firstOperand = "0.");
                }
                if (expression.operator && !expression.secondHasDecimal) {
                    expression.secondOperand == "" ? updateDisplay(expression.secondOperand = "0.") : updateDisplay(expression.secondOperand += ".");
                } else if (!expression.firstHasDecimal) {
                    expression.firstOperand == "" ? updateDisplay(expression.firstOperand = "0.") : updateDisplay(expression.firstOperand += ".");
                }
            }
            console.log(expression);
        }
         
        document.addEventListener("contextmenu", (event) => event.preventDefault());

    }

    const display = document.querySelector("#display");
    const updateDisplay = function(response) {
        display.style.visibility = "hidden";
        setTimeout(() => {
        display.style.visibility = "visible";
        }, 45);
        display.textContent = response;
        display.textContent = display.textContent.substring(0,14);
        if (expression.firstOperand && `${expression.firstOperand}`.slice(0, 100).includes(".")) {
            expression.firstHasDecimal = true;
        } else expression.firstHasDecimal = false;
        if (expression.secondOperand && `${expression.secondOperand}`.slice(0, 100).includes(".")) {
            expression.secondHasDecimal = true;
        } else expression.secondHasDecimal = false;
    }

    const clear = function() {
        expression.firstOperand = "";
        expression.secondOperand = "";
        expression.operator = null;
        expression.firstHasDecimal = false;
        expression.secondHasDecimal = false;
        expression.clearOldSum = false;
        updateDisplay("0");
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
        if ((expression.firstOperand && expression.secondOperand)) {
            switch (expression.operator) {
                case "+":
                    updateDisplay(expression.firstOperand = parseFloat(expression.firstOperand) + parseFloat(expression.secondOperand));
                    break;
                case "-":
                    updateDisplay(expression.firstOperand = parseFloat(expression.firstOperand) - parseFloat(expression.secondOperand));
                    break;
                case "*":
                    updateDisplay(expression.firstOperand = parseFloat(expression.firstOperand) * parseFloat(expression.secondOperand));
                    break;
                case "/":
                    updateDisplay(expression.firstOperand = parseFloat(expression.firstOperand) / parseFloat(expression.secondOperand));
                    break;
                case "%":
                    updateDisplay(expression.firstOperand = parseFloat(expression.firstOperand) % parseFloat(expression.secondOperand));
                    break; 
                default: updateDisplay(expression.firstOperand);
            }
        }
    }

    document.addEventListener("DOMContentLoaded", initializeEventListeners);

};

calculate();