import React, { Component } from "react";
import InventoryDetails from "./InventoryDetails";

class Inventory extends Component {
  render() {
    return (
      <div>
        <div>
          <h3>Your rent cars: </h3>
          {this.props.rentMain.map((e, i) => {
            return (
              <InventoryDetails rent={e} key={i} newRent={this.props.newRent} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Inventory;
