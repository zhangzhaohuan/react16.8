import React, { Component } from 'react'
import Test from './Test.js';
export default class componentName extends Component {
  componentDidMount(){
    Test.show();
  }

  render() {
    return (
      <div>
        child
      </div>
    )
  }
}
