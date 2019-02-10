import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0 //property
  };
  render() {
    return (
      <div>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>{" "}
        {/*render value of count property*/}
        <button className="btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state; //picking count property and storing in a seperate const
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
