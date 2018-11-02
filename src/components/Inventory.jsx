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
              <div>
                <div>{e.model}</div>
                <div>{e.car}</div>
                <div>{e.days}</div>
                <button
                  className="btn btn-primary"
                  onClick={() => this.props.newRent(e)}
                >
                  Add rent
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Inventory;
