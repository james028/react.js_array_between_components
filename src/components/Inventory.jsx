import React, { Component } from "react";
import InventoryDetails from "./InventoryDetails";
import { fbase } from "../fbase";

class Inventory extends Component {
  state = {
    rents: []
  };

  componentDidMount() {
    this.ref = fbase.syncState("rentstore/rents", {
      context: this,
      state: "rents"
    });
  }

  componentWillUnmount() {
    fbase.removeBinding(this.ref);
  }

  render() {
    return (
      <div>
        <div>
          <h3>Your rent cars: </h3>
          {this.state.rents.map((e, i) => {
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
