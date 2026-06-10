// Basic math functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Nice try, solar wizard. No dividing by zero.";
    }

    return a / b;
}

// Calls the correct math function based on the operator
function operate(operator, firstNumber, secondNumber) {
    const a = Number(firstNumber);
    const b = Number(secondNumber);

    if (operator === "+") {
        return add(a, b);
    }

    if (operator === "−") {
        return subtract(a, b);
    }

    if (operator === "×") {
        return multiply(a, b);
    }

    if (operator === "÷") {
        return divide(a, b);
    }

    return secondNumber;
}

// Calculator state
let firstNumber = "";
let operator = "";
let secondNumber = "";
let currentDisplayValue = "0";
let shouldResetDisplay = false;
let hasError = false;

// DOM elements
const display = document.querySelector("#display");
const expression = document.querySelector("#expression");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const actionButtons = document.querySelectorAll("[data-action]");

// Initial display
updateDisplay();

// Number buttons
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        appendNumber(button.textContent);
    });
});

// Operator buttons
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        chooseOperator(button.textContent);
    });
});

// Action buttons
actionButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const action = button.dataset.action;

        if (action === "clear") {
            clearCalculator();
        }

        if (action === "backspace") {
            deleteLastDigit();
        }

        if (action === "decimal") {
            appendDecimal();
        }

        if (action === "equals") {
            evaluate();
        }
    });
});

// Adds a number to the display
function appendNumber(number) {
    if (hasError) {
        clearCalculator();
    }

    if (currentDisplayValue === "0" || shouldResetDisplay) {
        currentDisplayValue = number;
        shouldResetDisplay = false;
    } else {
        currentDisplayValue += number;
    }

    updateDisplay();
}

// Adds a decimal point
function appendDecimal() {
    if (hasError) {
        clearCalculator();
    }

    if (shouldResetDisplay) {
        currentDisplayValue = "0";
        shouldResetDisplay = false;
    }

    if (currentDisplayValue.includes(".")) {
        return;
    }

    currentDisplayValue += ".";
    updateDisplay();
}

// Handles operator selection
function chooseOperator(selectedOperator) {
    if (hasError) {
        clearCalculator();
        return;
    }

    // If the user presses an operator first, use the current display as first number
    if (firstNumber === "") {
        firstNumber = currentDisplayValue;
        operator = selectedOperator;
        shouldResetDisplay = true;
        updateDisplay();
        return;
    }

    // If user presses operators consecutively, replace the previous operator
    if (shouldResetDisplay) {
        operator = selectedOperator;
        updateDisplay();
        return;
    }

    secondNumber = currentDisplayValue;

    const result = operate(operator, firstNumber, secondNumber);

    if (typeof result === "string") {
        showError(result);
        return;
    }

    currentDisplayValue = formatResult(result);
    firstNumber = currentDisplayValue;
    operator = selectedOperator;
    secondNumber = "";
    shouldResetDisplay = true;

    updateDisplay();
}

// Evaluates the current operation
function evaluate() {
    if (hasError) {
        clearCalculator();
        return;
    }

    // Do nothing if the calculator does not have a complete operation
    if (firstNumber === "" || operator === "" || shouldResetDisplay) {
        return;
    }

    secondNumber = currentDisplayValue;

    const result = operate(operator, firstNumber, secondNumber);

    if (typeof result === "string") {
        showError(result);
        return;
    }

    currentDisplayValue = formatResult(result);

    firstNumber = "";
    operator = "";
    secondNumber = "";
    shouldResetDisplay = true;

    updateDisplay();
}

// Clears everything
function clearCalculator() {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    currentDisplayValue = "0";
    shouldResetDisplay = false;
    hasError = false;

    updateDisplay();
}

// Deletes the last digit
function deleteLastDigit() {
    if (hasError) {
        clearCalculator();
        return;
    }

    if (shouldResetDisplay) {
        return;
    }

    if (currentDisplayValue.length === 1) {
        currentDisplayValue = "0";
    } else {
        currentDisplayValue = currentDisplayValue.slice(0, -1);
    }

    updateDisplay();
}

// Updates both display lines
function updateDisplay() {
    display.textContent = currentDisplayValue;

    if (firstNumber !== "" && operator !== "") {
        expression.textContent = `${firstNumber} ${operator}`;
    } else {
        expression.textContent = "";
    }
}

// Formats long decimal results
function formatResult(result) {
    const roundedResult = Math.round(result * 100000000) / 100000000;

    return roundedResult.toString();
}

// Shows division by zero or other calculator errors
function showError(message) {
    currentDisplayValue = message;
    firstNumber = "";
    operator = "";
    secondNumber = "";
    shouldResetDisplay = true;
    hasError = true;

    updateDisplay();
}

// Keyboard support
document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (key >= "0" && key <= "9") {
        appendNumber(key);
    }

    if (key === ".") {
        appendDecimal();
    }

    if (key === "+" || key === "-" || key === "*" || key === "/") {
        event.preventDefault();

        const operatorMap = {
            "+": "+",
            "-": "−",
            "*": "×",
            "/": "÷",
        };

        chooseOperator(operatorMap[key]);
    }

    if (key === "Enter" || key === "=") {
        event.preventDefault();
        evaluate();
    }

    if (key === "Backspace") {
        deleteLastDigit();
    }

    if (key === "Escape") {
        clearCalculator();
    }
});

const currentYear = document.querySelector("#currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}