import React, { Component } from 'react'

export default class HandlingEvents extends Component {
  state = {
    id: 5
  }

  deleteRow1(id, e) {
    console.log(id);
    console.log(e);
  }
  deleteRow2(id, id2, e) {
    console.log(id);
    console.log(id2);
    console.log(e);
  }
  render() {
    const { id } = this.state;
    const id2 = id + 1;
    return (
      <div>
        <button onClick={(e) => this.deleteRow1(id, e)}>Delete Row</button>
        <button onClick={this.deleteRow2.bind(this, id, id2)}>Delete Row</button>
      </div>
    )
  }
}
