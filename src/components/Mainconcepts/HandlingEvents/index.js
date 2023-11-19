import React, { Component } from "react";

export default class HandlingEvents extends Component {
  state = {
    id: 5,
  };
  /**
   * react函数传递参数方法一：直接箭头函数函数传参
   */
  handleclick1(id, e) {
    console.log(id);
    console.log(e);
    console.log(e.target);
    console.log('test')
    console.log('test2')
  }
  /**
   * react函数传递参数方法2：bind传参
    事件：this.handleclick.bind(this，要传的参数)
    函数：handleclick(传过来的参数，event)
   */
  handleclick2(id, id2, e) {
    console.log(id);
    console.log(id2);
    console.log(e);
  }
  render() {
    const { id } = this.state;
    const id2 = id + 1;
    return (
      <div>
        <button onClick={(e) => this.handleclick1(id, e)}>Delete Row</button>
        <button onClick={this.handleclick2.bind(this, id, id2)}>
          Delete Row
        </button>
      </div>
    );
  }
}
