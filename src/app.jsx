import React, { Component } from "react";
import "./styles.css";
import Header from "./components/Header";
import PanelAdmin from "./components/Adminpanel";
import Inventory from "./components/Inventory";
import Order from "./components/Order";

class App extends Component {
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
            <div className="col-md-4">
              <PanelAdmin onRent={this.onSubmitRent} />
            </div>
            <div className="col-md-4">
              <Inventory
                rentMain={this.state.rentMain}
                newRent={this.addNewRent}
              />
            </div>
            <div className="col-md-4">
              <Order orders={this.state.orders} remove={this.removeRent} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
