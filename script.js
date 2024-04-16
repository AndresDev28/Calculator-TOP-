// operation variables

let number1 = '';
let number2 = '';
let operator = '';
let result = '';
const numberButtons = document.querySelectorAll(".number");
const allClear = document.getElementById('all-clear');
const operand = document.querySelectorAll('.operator')
const equals = document.getElementById('equals');

// functions declarations

const add = function (a, b) {
    return a + b;
}

const sub = function (a, b) {
    return a - b;
}

const mult = function (a, b) {
    return a * b;
}

const div = function (a, b) {
    if (b === 0) {
        throw new Error('Division by zero')
    }
    return a / b;
}

// Create the operation function

const operation = function (number1, operator, number2) {
    switch (operator) {
        case '+':
            return add(number1, number2);
        case '-':
            return sub(number1, number2);
        case '*':
            return mult(number1, number2);
        case '÷':
            return div(number1, number2);
        default:
            throw new Error('Invalid operator');
    }
};

// Section to display de number clicked on de screen

function updateDisplay () {
    const previousOperandDisplay = document.querySelector('.previous-operand');
    previousOperandDisplay.innerText = number1 + operator + number2;
}

numberButtons.forEach(button => {
    button.addEventListener('click', updateScreen)
});

function updateScreen(event) {
    if(!operator) {
        number1 += event.target.innerText;
    }else {
        number2 += event.target.innerText;
    }
    updateDisplay();
}

// Section to add de operator to the ecuation
operand.forEach(button => {
    button.addEventListener('click', showOperand);
})

function showOperand(e) {
    operator = e.target.innerText;
    updateDisplay();
}

// Section to make the math and get the result

equals.addEventListener('click', getResult);

function getResult() {
    let result = operation(parseFloat(number1), operator, parseFloat(number2));
    const currentOperandDisplay = document.querySelector('.current-operand');
    currentOperandDisplay.innerText = result;
}

// Section to clear the screen display
allClear.addEventListener('click', clearScreen);

function clearScreen() {
    number1 = '';
    number2 = '';
    operator = '';
    result = '';

    const previousOperandDisplay = document.querySelector('.previous-operand');
    const currentOperandDisplay = document.querySelector('.current-operand');
    previousOperandDisplay.innerText = '';
    currentOperandDisplay.innerText = '';

    updateDisplay();
}

// Call updateDisplay to set up de screen.
updateDisplay();