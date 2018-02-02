import React, { Component } from 'react';

import './App.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    const inputNumber = /[1-9]/;
    if (event.target.value == "" || inputNumber.test(event.target.value)) {
      this.setState({value: event.target.value})
    }
  }
  render() {

    return (
      <form>
        <input value={this.state.value} onChange={this.onChange} maxLength="1" />
      </form>
    );
  }
}

class Numbers extends Component {
  render() {
    return (
      <div>Hello Word</div>
    )
  }
}


export default Button;
