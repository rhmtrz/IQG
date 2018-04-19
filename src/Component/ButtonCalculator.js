import React from 'react';

export default class Key extends React.Component {
  constructor() {
    super();

    this.onKeyPressed = () => {
      this.props.onKeyPressed(this.props.text)
    }
  }

  render() {
    const onKeyPressed = this.onKeyPressed;
    return(
      <button onClick={onKeyPressed}>{this.props.text}</button>
    )
  }
}
