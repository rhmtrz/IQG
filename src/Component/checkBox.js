import React, { Component } from 'react';

export default class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    };
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked() {
    this.setState({checked: !this.state.checked})
  }
  message() {
    var msg;
    if (this.state.checked) {
      msg = "checked";
    } else {
      msg = "unchecked";
    }
    return msg
  }
  render () {
    return (
      <div>
        <input type="checkbox" defaultChecked={this.state.checked} onChange={this.handleChecked}/>
        <h3>Checkbox is {this.message()}</h3>
      </div>
    );
  }
}
