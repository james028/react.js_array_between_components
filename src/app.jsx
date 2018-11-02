import React, { Component } from "react";
import "./styles.css";
import Header from "./components/Header";
import PanelAdmin from "./components/Adminpanel";
import Inventory from "./components/Inventory";
import Order from "./components/Order";

class App extends Component {
  state = {
    rentMain: []
  };

  onSubmitRent = event => {
    const newRent = [...this.state.rentMain];

    newRent.push(event);

    this.setState({
      rentMain: newRent
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
              <Inventory rentMain={this.state.rentMain} />
            </div>
            <div className="col-md-4">
              <Order orders={this.state.orders} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
