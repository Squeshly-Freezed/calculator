
const calculate = function() {
    
    let expression = {
        firstInput: "",
        secondInput: "",
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
                if (expression.operator && expression.firstInput != "" && (!expression.secondInput.substring(0, 1).includes("0") || expression.secondHasDecimal)) {
                    updateDisplay(expression.secondInput += event.target.textContent);
                }
                else if (expression.clearOldSum && (!expression.firstInput.substring(0, 1).includes("0") || expression.firstHasDecimal)) {
                    expression.firstInput = "";
                    expression.clearOldSum = false;
                    updateDisplay(expression.firstInput += event.target.textContent);
                }
                else if (!expression.firstInput.substring(0, 1).includes("0") || expression.firstHasDecimal) {
                    updateDisplay(expression.firstInput += event.target.textContent);
                }
            }

            if (event.target.classList.contains("number")) {
                if (expression.operator && expression.firstInput != "") {
                    updateDisplay(expression.secondInput += event.target.textContent);
                } else if (expression.clearOldSum) {
                    expression.firstInput = "";
                    expression.clearOldSum = false;
                    updateDisplay(expression.firstInput += event.target.textContent);
                } else {
                    updateDisplay(expression.firstInput += event.target.textContent);
                }
            }

            if (event.target.classList.contains("operator")) {
                expression.clearOldSum = false;
                if (!expression.operator) {
                    expression.operator = event.target.textContent;
                } else if (expression.operator) {
                    operate();
                    expression.secondInput = "";
                    expression.secondHasDecimal = false;
                    expression.firstInput = `${expression.firstInput}`;
                    expression.operator = event.target.textContent;
                }
            }

            if (event.target.classList.contains("clear")) {
                clear();
            }
            
            if (event.target.classList.contains("equals")) {
                operate();
                expression.secondInput = "";
                expression.secondHasDecimal = false;
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
                if (expression.clearOldSum) {
                    expression.firstInput = "";
                    expression.clearOldSum = false;
                    updateDisplay(expression.firstInput = "0.");
                }
                if (expression.operator && !expression.secondHasDecimal) {
                    expression.secondInput == "" ? updateDisplay(expression.secondInput = "0.") : updateDisplay(expression.secondInput += ".");
                } else if (!expression.firstHasDecimal) {
                    expression.firstInput == "" ? updateDisplay(expression.firstInput = "0.") : updateDisplay(expression.firstInput += ".");
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
        if (expression.firstInput && `${expression.firstInput}`.slice(0, 100).includes(".")) {
            expression.firstHasDecimal = true;
        } else expression.firstHasDecimal = false;
        if (expression.secondInput && `${expression.secondInput}`.slice(0, 100).includes(".")) {
            expression.secondHasDecimal = true;
        } else expression.secondHasDecimal = false;
    }

    const clear = function() {
        expression.firstInput = "";
        expression.secondInput = "";
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
        if ((expression.firstInput != "" && expression.secondInput != "")) {
            switch (expression.operator) {
                case "+":
                    updateDisplay(expression.firstInput = parseFloat(expression.firstInput) + parseFloat(expression.secondInput));
                    break;
                case "-":
                    updateDisplay(expression.firstInput = parseFloat(expression.firstInput) - parseFloat(expression.secondInput));
                    break;
                case "*":
                    updateDisplay(expression.firstInput = parseFloat(expression.firstInput) * parseFloat(expression.secondInput));
                    break;
                case "/":
                    updateDisplay(expression.firstInput = parseFloat(expression.firstInput) / parseFloat(expression.secondInput));
                    break;
                case "%":
                    updateDisplay(expression.firstInput = parseFloat(expression.firstInput) % parseFloat(expression.secondInput));
                    break; 
                default: updateDisplay(expression.firstInput);
            }
        }
    }

    document.addEventListener("DOMContentLoaded", initializeEventListeners);

};

calculate();