import React, { Component } from "react";
//import Homepage from "./Homepage";
import { fbase, firebaseApp } from "../fbase";
import { Link } from "react-router-dom";

class AdminPanel extends Component {
  state = {
    rent: {
      model: "",
      car: "",
      days: "",
      cash: ""
    },
    rents: [],
    isLogged: false,
    email: "",
    password: ""
  };

  onChange = e => {
    const newRent = {
      ...this.state.rent,
      [e.target.name]: e.target.value
    };
    this.setState({
      rent: newRent
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const newOneRent = { ...this.state.rent };
    //const newArrRents = [...this.state.rents];

    //this.props.rentMain(newOneRent);

    this.setState({
      rents: [...this.state.rents, newOneRent],
      rent: {
        model: "",
        car: "",
        days: "",
        cash: ""
      }
    });
    console.log("new", newOneRent);
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

  handleLoginChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  authenticate = e => {
    e.preventDefault();

    firebaseApp
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.setState({
          isLogged: true
        });
      })
      .catch(() => {
        alert("Unable to login");
      });
  };

  render() {
    const { isLogged } = this.state;
    return (
      <div>
        {!isLogged && (
          <form onSubmit={this.authenticate} style={{ marginTop: "50px" }}>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleLoginChange}
            />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleLoginChange}
            />
            <button className="btn btn-primary">Login</button>
          </form>
        )}
        {isLogged && (
          <form onSubmit={this.onSubmit}>
            <div>
              <label>
                Car model:{" "}
                <input
                  type="text"
                  name="model"
                  value={this.state.rent.model}
                  onChange={this.onChange}
                />
              </label>
              <label>
                Car:{" "}
                <input
                  type="text"
                  name="car"
                  value={this.state.rent.car}
                  onChange={this.onChange}
                />
              </label>
              <label>
                Days of rental:{" "}
                <input
                  type="text"
                  name="days"
                  value={this.state.rent.days}
                  onChange={this.onChange}
                />
              </label>
              <label>
                Cash:
                <select value={this.state.rent.cash} onChange={this.onChange}>
                  <option value="pln">PLN</option>
                  <option value="euro">Euro</option>
                  <option value="gbp">GBP</option>
                </select>
              </label>
            </div>
            <br />
            <button className="btn btn-success">Add</button>
            <Link to="/">Go home</Link>
          </form>
        )}
      </div>
    );
  }
}

export default AdminPanel;

/**/
