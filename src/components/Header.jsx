import React, { Component } from "react";

class Header extends Component {
  state = {
    text: "Car rental"
  };

  render() {
    return (
      <div>
        <header>
          <h2>{this.state.text}</h2>
        </header>
      </div>
    );
  }
}

export default Header;
