import React, { Component } from "react";

class Order extends Component {
  render() {
    return (
      <div>
        Orders:
        <div />
      </div>
    );
  }
}

export default Order;

/*          {this.props.orders.map((e, i) => {
            return (
              <div key={i}>
                <div>{e.car}</div>
                <div>{e.model}</div>
                <div>{e.days}</div>
              </div>
            );
          })}*/
