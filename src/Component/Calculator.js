import React from 'react';
import Key from './ButtonCalculator';

const DisplayWindow = ({expression}) => {
  console.log('---expression---');
  console.log(expression);
  return (
    <input type='text' value={expression} disabled={true}/>
  );
}

export default class Calculator extends React.Component {
  constructor() {
    super();

    this.state = {
      expression: '0',
    };

    this.onKeyPressed = (text) => {
      this.setState((prev) => ({
        expression: prev.expression + text,
      }));
    };

/*
   this.onDeletePressed = () => {
      this.setState(
        (prev) => ({
          if (prev.expression.length <= 1) {
            expression: 0
          } else {
            expression: prev.expression.slice(0, -1)
          }
        })
      )
    } */

    this.onDeletePressed = () => {
      this.setState(
        (prev) => ({
          expression: prev.expression.length <= 1 ? '0' : prev.expression.slice(0, -1),
        })
      );
    };

    this.onEvaluatePressed = () => {
      const result = eval(this.state.expression);
      this.setState((prev) => ({
        expression: result.toString(),
      }));
    };
  }

  render() {
    const { expression } = this.state;
    return (
      <div>
        <DisplayWindow expression={expression}/>
        <Key text='0' onKeyPressed={this.onKeyPressed}/>
        <Key text='1' onKeyPressed={this.onKeyPressed}/>
        <Key text='2' onKeyPressed={this.onKeyPressed}/>
        <Key text='3' onKeyPressed={this.onKeyPressed}/>
        <Key text='4' onKeyPressed={this.onKeyPressed}/>
        <Key text='5' onKeyPressed={this.onKeyPressed}/>
        <Key text='6' onKeyPressed={this.onKeyPressed}/>
        <Key text='7' onKeyPressed={this.onKeyPressed}/>
        <Key text='8' onKeyPressed={this.onKeyPressed}/>
        <Key text='9' onKeyPressed={this.onKeyPressed}/>
        <Key text='+' onKeyPressed={this.onKeyPressed}/>
        <Key text='-' onKeyPressed={this.onKeyPressed}/>
        <Key text='*' onKeyPressed={this.onKeyPressed}/>
        <Key text='/' onKeyPressed={this.onKeyPressed}/>
        <button onClick={this.onDeletePressed}>C</button>
        <button onClick={this.onEvaluatePressed}>=</button>
      </div>
    )
  }
}
