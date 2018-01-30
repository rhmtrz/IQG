import React, { Component } from 'react';

import './App.css';

class Button extends Component {


  render() {
    const element = React.createElement (
      'input',
      {type: 'number'}
    )
    return (
      <form>{element}</form>
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
