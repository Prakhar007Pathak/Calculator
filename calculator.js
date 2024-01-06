let display = document.getElementById('display');
let currentInput = '';

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function percentage() {
  currentInput = (parseFloat(currentInput) / 100).toString();
  updateDisplay();
}

function appendOperator(operator) {
  currentInput += operator;
  updateDisplay();
}

function appendToDisplay(value) {
  currentInput += value;
  updateDisplay();
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch (error) {
    currentInput = 'Error';
    updateDisplay();
  }
}

function updateDisplay() {
  display.value = currentInput;
}
