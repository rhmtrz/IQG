import React from 'react';

export default class Calculator extends React.Component {
  state = {
    displayValue: '0',
    waitingForOperand: false,
    operator: null,
    value: null
  }

  inputDigit = (digit) => {
    const { displayValue, waitingForOperand } = this.state

    if (waitingForOperand) {
        this.setState({
          displayValue: String(digit),
          waitingForOperand: false
        })
      } else {
      this.setState({
        displayValue: displayValue === '0' ? String(digit) : displayValue + digit
      })
    }
  }

  inputDot = () => {
    const { displayValue, waitingForOperand } = this.state

    if (waitingForOperand === true) {
      this.setState({
        displayValue: '.',
        waitingForOperand: false,
      });
    } else if (displayValue.indexOf('.') === -1) {
      this.setState({
        displayValue: displayValue + '.',
      });
    }
  };

  clearDisplay = () => {
    const { displayValue } = this.state

    this.setState({
      displayValue: '0',
      waitingForOperand: false,
      operator: null,
      value: null
    })
  }

  inputPercent = () => {
    const {displayValue } = this.state
    const value = parseFloat(displayValue)

    this.setState({
      displayValue: String(value / 100)
    })
  }

  performOperation = (nextOperator) => {
    const {displayValue, operator, value } = this.state
    const nextValue = parseFloat(displayValue)
    console.log('.....nextValue.....');
    console.log(nextValue);
    console.log(nextOperator)

    const operations = {
      '/': (prevValue, nextValue) => prevValue / nextValue,
      '*': (prevValue, nextValue) => prevValue * nextValue,
      '-': (prevValue, nextValue) => prevValue - nextValue,
      '+': (prevValue, nextValue) => prevValue + nextValue,
      '=': (prevValue, nextValue) => nextValue
    }

    if (value == null) {
      this.setState({
        value: nextValue
      })
    } else if (operator) {
      const currentValue = value || 0
      const computedValue = operations[operator](currentValue, nextValue)
        console.log('..... computedValue ....');
        console.log(computedValue);

      this.setState({
        value: computedValue,
        displayValue: String(computedValue)
      })
    }

    this.setState({
      waitingForOperand: true,
      operator: nextOperator
    })
  }

  render() {
    const { displayValue } = this.state;
    return (
      <div>
        <div>{displayValue}
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </div>
        <button onClick={() => this.inputDigit(0)}>0</button>
        <button onClick={() => this.inputDot()}>.</button>
        <button onClick={() => this.inputDigit(1)}>1</button>
        <button onClick={() => this.inputDigit(2)}>2</button>
        <button onClick={() => this.inputDigit(3)}>3</button>
        <button onClick={() => this.inputDigit(4)}>4</button>
        <button onClick={() => this.inputDigit(5)}>5</button>
        <button onClick={() => this.inputDigit(6)}>6</button>
        <button onClick={() => this.inputDigit(7)}>7</button>
        <button onClick={() => this.inputDigit(8)}>8</button>
        <button onClick={() => this.inputDigit(9)}>9</button>
        <button onClick={() => this.performOperation('+')}>+</button>
        <button onClick={() => this.performOperation('-')}>-</button>
        <button onClick={() => this.performOperation('*')}>*</button>
        <button onClick={() => this.performOperation('/')}>/</button>
        <button onClick={() => this.performOperation('=')}>=</button>
        <button onClick={() => this.clearDisplay()}>AC</button>
        <button onClick={() => this.inputPercent()}>%</button>
      </div>
    )
  }
}
