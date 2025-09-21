const calculatorState = {
  A: 0,
  operator: null,
  B: null,
  clearAll() {
    this.A = 0;
    this.operator = null;
    this.B = null;
  },
};

export function handleButtonClick(
  value,
  display,
  register,
  operatorSymbols,
  functionalSymbols
) {
  if (operatorSymbols.includes(value)) {
    handleOperator(value, display, register);
  } else if (functionalSymbols.includes(value)) {
    handleTopFunction(value, display, register);
  } else {
    handleNumberInput(value, display, register);
  }
}

function handleOperator(value, display, register) {
  if (value === '=') {
    calculatorState.B = register.value;
    const numA = Number(calculatorState.A);
    const numB = Number(calculatorState.B);

    let result;
    switch (calculatorState.operator) {
      case '÷':
        result = numB === 0 ? 'Error' : numA / numB;
        break;
      case '×':
        result = numA * numB;
        break;
      case '-':
        result = numA - numB;
        break;
      case '+':
        result = numA + numB;
        break;
      case '%':
        result = (numA * numB) / 100;
    }

    register.value = result;
    display.value = result;
    calculatorState.clearAll();
  } else {
    if(calculatorState.operator === null){
      calculatorState.operator = value;
      calculatorState.A = register.value;
      register.value = '';
      display.value += value;
    }else{
      calculatorState.operator = value;
      display.value = display.value.slice(0, display.value.length - 1);
      display.value += value;
    }
  }
}

function handleTopFunction(value, display, register) {
  switch (value) {
    case 'AC':
      calculatorState.clearAll();
      register.value = '';
      display.value = '';
      break;
    case '±':
      display.value = display.value.slice(
        0,
        display.value.length - register.value.length
      );
      register.value *= -1;
      display.value += register.value;
      break;
    case '%':
      calculatorState.operator = value;
      calculatorState.A = register.value;
      register.value = '';
      display.value += value;
      break;
    case '⌫':
      if (register.value.length > 0) {
        register.value = register.value.slice(0, register.value.length - 1);
        display.value = display.value.slice(0, display.value.length - 1);
      }
      break;
  }
}

function handleNumberInput(value, display, register) {
  if (value === '.') {
    if(!register.value.includes('.') && !display.value.includes('.')){
      register.value += value;
      display.value += value;
    }
  } else if (register.value === '0') {
    register.value = value;
    display.value = value;
  } else {
    register.value += value;
    display.value += value;
  }
}
