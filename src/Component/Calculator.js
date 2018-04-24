import React from 'react';

export default class Calculator extends React.Component {
  state = {
    displayValue: '0',
    waitingForOperand: false,
    operator: null
  }

  inputDigit = (digit) => {
    const { displayValue } = this.state

    this.setState({
      displayValue: displayValue === '0' ? String(digit) : displayValue + digit
    })
  }

  inputDot = () => {
    const {displayValue } = this.state
    if (displayValue.indexOf('.') === -1) {
      this.setState({
        displayValue: displayValue + '.'
      });
    }
  };

  clearDisplay = () => {
    const { displayValue } = this.state

    this.setState({
      displayValue: '0'
    })
  }

  inputPercent = () => {
    const {displayValue } = this.state
    const value = parseFloat(displayValue)

    this.setState({
      displayValue: String(value / 100)
    })
  }

  performOperation = (operator) => {
    this.setState({
      waitingForOperand: true,
      operator: operator
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
