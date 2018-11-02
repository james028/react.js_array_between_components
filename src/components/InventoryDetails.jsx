import React, { Component } from "react";

class InventoryDetails extends Component {
  render() {
    return (
      <div>
        <div>{this.props.rents.car}</div>
        <div>{this.props.rents.model}</div>
        <div>{this.props.rents.days}</div>
      </div>
    );
  }
}

export default InventoryDetails;
