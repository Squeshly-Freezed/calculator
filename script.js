
const calculate = function() {

    let expression = {
            firstInput: 0,
            operator: null,
            secondInput: 0,
        };

    document.addEventListener("contextmenu", (event) => event.preventDefault());
    const buttonContainer = document.querySelector("#button-container");
    const display = document.querySelector("#display");

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




        // if (!expression.operator && event.target.classList.contains("number")) {
        //     expression.firstInput = event.target.textContent;
        //     showDisplay(expression.firstInput);
        //     console.log(expression);
        // }
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
        // if (expression.operator && event.target.classList.contains("number")) {
        //     // expression.firstInput = event.target.textContent;
        //     expression.secondInput = event.target.textContent;
        // }
        if (expression.operator && event.target.classList.contains("equals")) {
            operate();
            expression.secondInput = 0;
            expression.operator = null;
        }
        console.log(expression);
    });


    const showDisplay = function(response) {
        display.textContent = "";
        display.textContent = response;
    }

    const add = function() {
        expression.firstInput = expression.firstInput + expression.secondInput;
    }

    const subtract = function(operand) {
        return firstInput -= operand;
    }

    const multiply = function(operand) {
        return firstInput *= operand;
    }

    const divide = function(operand) {
        return firstInput /= operand;
    }

    const clear = function() {
        expression.firstInput = 0;
        expression.operator = null;
        expression.secondInput = 0;
        showDisplay(0);
    }

    const operate = function() {
        switch (expression.operator) {
            case "+":
                add();
                showDisplay(expression.firstInput);
                break;
        }
    }

};

calculate();