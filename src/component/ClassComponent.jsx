import React, { Component } from "react";
import TextField from "./TextField";
import CountField from "./CountField";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "",
      countValue: 0
    };
  }

  // componentWillReceiveProps : 사용하면 안 된다고 함
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("class getDerived ", nextProps, prevState);
  }

  handleChange = e => {
    this.setState({ textValue: e.target.value });
  };

  handleCountChange = e => {
    this.setState({ countValue: e });
  };

  render() {
    console.log("class render");
    return (
      <div className="ComponentWrapper">
        <span> Class Component </span>
        <div className="ClassComponent">
          <TextField
            value={this.state.textValue}
            onChange={this.handleChange}
          />
          <CountField
            defaultValue={this.state.countValue}
            onChange={this.handleCountChange}
          />
        </div>
      </div>
    );
  }
}

export default ClassComponent;
