/*
// Get the elements
const addButton = document.getElementById('add');
const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const resultDisplay = document.getElementById('calculation-result');

// Define the add function
function add(number1, number2) {
    return number1 + number2;
}

// Attach event listener for the addition button
addButton.addEventListener('click', function() {
    const number1 = parseFloat(number1Input.value) || 0;
    const number2 = parseFloat(number2Input.value) || 0;
    const result = add(number1, number2);
    resultDisplay.textContent = result;
});




// Repeat similar steps for other operation buttons (subtract, multiply, divide)
// Don't forget input validation!
// Get the elements
const addButton = document.getElementById('add');
const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const resultDisplay = document.getElementById('calculation-result');

// Define the add function
function add(number1, number2) {
    return number1 + number2;
}

// Attach event listener for the addition button
addButton.addEventListener('click', function() {
    const number1 = parseFloat(number1Input.value) || 0;
    const number2 = parseFloat(number2Input.value) || 0;
    const result = add(number1, number2);
    resultDisplay.textContent = result;
});

// Repeat similar steps for other operation buttons (subtract, multiply, divide)
// Don't forget input validation!





const multiplyButton = document.getElementById('multiply');

function multiply(number1, number2) {
    return number1 * number2;
}

multiplyButton.addEventListener('click', function() {
    const number1 = parseFloat(number1Input.value) || 0;
    const number2 = parseFloat(number2Input.value) || 0;
    const result = multiply(number1, number2);
    resultDisplay.textContent = result;
});




const divideButton = document.getElementById('divide');

function divide(number1, number2) {
    if (number2 === 0) {
        return 'Error: Division by zero';
    }
    return number1 / number2;
}

divideButton.addEventListener('click', function() {
    const number1 = parseFloat(number1Input.value) || 0;
    const number2 = parseFloat(number2Input.value) || 0;
    const result = divide(number1, number2);
    resultDisplay.textContent = result;
});
*/


// Get the elements
const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const resultDisplay = document.getElementById('calculation-result');

// Define arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return 'Error: Division by zero';
    }
    return number1 / number2;
}

// Attach event listeners for operation buttons
const operationButtons = document.querySelectorAll('.operation-button');
operationButtons.forEach(button => {
    button.addEventListener('click', function() {
        const operation = button.dataset.operation;
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;
        let result;

        switch (operation) {
            case 'add':
                result = add(number1, number2);
                break;
            case 'subtract':
                result = subtract(number1, number2);
                break;
            case 'multiply':
                result = multiply(number1, number2);
                break;
            case 'divide':
                result = divide(number1, number2);
                break;
            default:
                result = 'Invalid operation';
        }

        resultDisplay.textContent = result;
    });
});
