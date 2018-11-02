import React, { Component } from "react";

class AdminPanel extends Component {
  state = {
    rent: {
      model: "",
      car: "",
      days: "",
      cash: ""
    }
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

    this.props.onRent(newOneRent);
    this.setState({
      rent: {
        model: "",
        car: "",
        days: "",
        cash: ""
      }
    });
    console.log("new", newOneRent);
  };

  render() {
    return (
      <div>
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
        </form>
      </div>
    );
  }
}

export default AdminPanel;
