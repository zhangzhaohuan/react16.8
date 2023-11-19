import React, { Component } from 'react'
const shallowequal = require('shallowequal');

export default class Index extends Component {
  state= {
    show:false
  }


  componentDidMount(){
    const object = { 'user': 'fred' };
    const other = { 'user': 'fred' };
    const a1 = [{name:'zhangsan'}];
    const a2 = [{name:'zhangsan'}];
     
    shallowequal(object, other);
    console.log(shallowequal(object, other));
    console.log(shallowequal(a1, a2));

    console.log();
  }
  componentWillUnmount(){

  }


  
  render() {
    return (
      <div>

ShallowEqual

      </div>
    )
  }
}
