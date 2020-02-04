import React, { Component } from "react";
import TextField from "./TextField";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: props.defaultValue
    };
  }

  // componentWillReceiveProps : 사용하면 안 된다고 함

  handleChange = e => {
    this.setState({ textValue: e.target.value });
  };

  render() {
    return (
      <div className="ComponentWrapper">
        <span> Class Component </span>
        <div className="ClassComponent">
          <TextField
            value={this.state.textValue}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default ClassComponent;
