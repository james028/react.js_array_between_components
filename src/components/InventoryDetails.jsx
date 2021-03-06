import React, { Component } from "react";

class InventoryDetails extends Component {
  render() {
    return (
      <div>
        <div>{this.props.rent.car}</div>
        <div>{this.props.rent.model}</div>
        <div>{this.props.rent.days}</div>
        <button
          className="btn btn-success"
          onClick={() => this.props.newRent(this.props.rent)}
        >
          Add Rent
        </button>
        <button
          className="btn btn-danger"
          onClick={() => this.props.removeRents(this.props.rent.car)}
        >
          Remove Rent
        </button>
      </div>
    );
  }
}

export default InventoryDetails;
