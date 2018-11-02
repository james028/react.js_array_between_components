import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import Adminpanel from "./Adminpanel";

class Homepage extends Component {
  state = {
    rentMain: [],
    orders: []
  };

  onSubmitRent = event => {
    const newRent = [...this.state.rentMain];

    newRent.push(event);

    this.setState({
      rentMain: newRent
    });
  };

  addNewRent = event => {
    this.setState({
      orders: [...this.state.orders, event]
    });
    console.log(this.state.orders);
  };

  removeRent = event => {
    this.setState({
      orders: this.state.orders.filter(item => event !== item.car)
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Adminpanel rentMain={this.onSubmitRent} />
            </div>
            <div className="col-md-6" style={{ marginTop: "50px" }}>
              <Inventory
                rentMain={this.state.rentMain}
                newRent={this.addNewRent}
              />
            </div>
            <div className="col-md-6" style={{ marginTop: "50px" }}>
              <Order orders={this.state.orders} remove={this.removeRent} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
