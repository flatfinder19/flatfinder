import React, { Component } from "react";

class CheckBox extends Component {

  toggle = () => {
    this.props.context.actions.setLocationFeatures(
      this.props.index,
      this.props.name,
      this.props.id
    );
  };

  render() {

    return (
      <input
        type="checkbox"
        checked={this.props.value}
        onChange={this.toggle}
      />
    );
  }
}

export default CheckBox;