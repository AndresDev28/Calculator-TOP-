// operation variables

let number1 = '';
let number2 = '';
let operator = '';
let dotDecimal = '';
let result = '';
const numberButtons = document.querySelectorAll(".number");
const allClear = document.getElementById('all-clear');
const operand = document.querySelectorAll('.operator')
const equals = document.getElementById('equals');
const dot = document.getElementById('dot');
const delButton = document.getElementById('delete');

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
        return 'Err';
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

// Section to add dot to the numbers

dot.addEventListener('click', addDot);

function addDot(e) {
    // check if dot it´s allready include on the present number
    if (!number1.includes('.')) {
        number1 += '.';
    } else if (operator && !number2.includes('.')) {
        number2 += '.';
    }
    updateDisplay();
}

// Section to add de operator to the ecuation
operand.forEach(button => {
    button.addEventListener('click', addOperand);
})

function addOperand(e) {
    operator = e.target.innerText;
    updateDisplay();
}

// Section to make the math and get the result

equals.addEventListener('click', getResult);

function getResult() {
    let result = operation(parseFloat(number1), operator, parseFloat(number2));
    const currentOperandDisplay = document.querySelector('.current-operand');
    //Rounded result
    let roundedResult = parseFloat(result.toFixed(3))
    currentOperandDisplay.innerText = roundedResult;

    if (result !== '') {
        number1 = roundedResult;
        operator = '';
        number2 = '';
        updateDisplay();
    }
}

// Section to delet one digit with DEL button

delButton.addEventListener('click', delDigit);

function delDigit() {
    if (operator === '') {
        number1 = number1.slice(0, -1);
    } else if (number2 === '') {
        operator = '';
    } else {
        number2 = number2.slice(0, -1)
    }
    updateDisplay();
}

// Section to clear the screen display
allClear.addEventListener('click', clearScreen);

function clearScreen() {
    number1 = '';
    number2 = '';
    operator = '';
    result = '';
    dotDecimal = '';

    const previousOperandDisplay = document.querySelector('.previous-operand');
    const currentOperandDisplay = document.querySelector('.current-operand');
    previousOperandDisplay.innerText = '';
    currentOperandDisplay.innerText = '';

    updateDisplay();
}

// Call updateDisplay to set up de screen.
updateDisplay();