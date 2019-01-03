import React, { Component } from "react";
import CheckBox from "../functions/checkbox";

export default class FlatFeatures extends Component {

  onInputChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const location = this.props.context;
    const flatSearchData = this.props.context;
    const isFurnished = this.props.context; 
    return (
      <div className="FlatFeatures">
        <div>
          <CheckBox
            context={this.props.context}
            // index={index}
            name="furnished"
            value={
              location && location.flatSearchData
                ? location.flatSearchData.isFurnished
                : null
            }
          />
          Flat is Furnished
        </div>
      </div>
    );
  }
}
