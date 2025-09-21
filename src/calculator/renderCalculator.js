import { handleButtonClick } from './calculator.js';

export function renderCalculator() {
  const buttonValues = [
    '⌫',
    'AC',
    '%',
    '÷',
    '7',
    '8',
    '9',
    '×',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '±',
    '0',
    '.',
    '=',
  ];
  const operatorSymbols = ['÷', '×', '-', '+', '='];
  const functionalSymbols = ['AC', '±', '%', '⌫'];

  const display = document.getElementById('display');
  const register = document.getElementById('register');

  buttonValues.forEach((value) => {
    const button = createButton(value, operatorSymbols, functionalSymbols);
    button.addEventListener('click', () =>
      handleButtonClick(
        value,
        display,
        register,
        operatorSymbols,
        functionalSymbols
      )
    );
    document.getElementById('buttons').appendChild(button);
  });
}

function createButton(value, rightSymbols, topSymbols) {
  const button = document.createElement('button');
  button.innerText = value;
  if (rightSymbols.includes(value)) {
    button.style.backgroundColor = '#ffae3cff';
  } else if (topSymbols.includes(value)) {
    if (value != '±') {
      button.style.backgroundColor = '#b8b8b8ff';
      button.style.color = 'black';
    }
  }

  return button;
}
