import React, { Component } from 'react'

export default class HandlingEvents extends Component {
  state = {
    id: 5
  }

  deleteRow1(id, e) {
    console.log(id);
    console.log(e);
  }
  deleteRow2(id,e) {
    console.log(id);
    console.log(e);
  }
  render() {
    const { id } = this.state;
    return (
      <div>
        <button onClick={(e) => this.deleteRow1(id, e)}>Delete Row</button>
        <button onClick={this.deleteRow2.bind(this, id)}>Delete Row</button>
      </div>
    )
  }
}
