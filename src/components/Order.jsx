import React, { Component } from "react";

class Order extends Component {
  render() {
    return (
      <div>
        Orders:
        <div>
          {this.props.orders.map((e, i) => {
            return (
              <div key={i}>
                <div>{e.car}</div>
                <div>{e.model}</div>
                <div>{e.days}</div>
                <button
                  className="btn btn-danger"
                  onClick={() => this.props.remove(e.car)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Order;

/**/
