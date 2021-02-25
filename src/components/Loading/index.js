import React, { Component } from 'react'
import Child from './child';
import Test from './Test.js';
export default class Loading extends Component {
  click = ()=>{
    Test.show();
  }
  click2 = ()=>{
    Test.hide();
  }
  render() {
    console.log(Test);
    return (
			<div>
				<button onClick={this.click}>测试</button>
				<button onClick={this.click2}>测试</button>

        <Child></Child>
			</div>
    )
  }
}
