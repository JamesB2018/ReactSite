import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0 //property
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };
  render() {
    return (
      <div>
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
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
