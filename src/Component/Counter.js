import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  increment = () => {
    this.setState({
      value: this.state.value + 1
    });
  }

  decrement = () => {
    this.setState({
      value: this.state.value -1
    })
  }

  render() {
    return (
      <div>
        {this.state.value}
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}
