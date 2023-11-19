import React, { Component } from 'react'
import "./index.less"
export default class Index extends Component {
  state= {
    show:false
  }


  componentDidMount(){

  }
  componentWillUnmount(){

  }

  onMouseEnter = ()=>{
    console.log('onMouseEnter');
    this.setState({
      show:true
    })
  }
  onMouseLeave = ()=>{
    console.log('onMouseLeave');
    this.setState({
      show:false
    })
  }

  onClick = ()=>{
    console.log("click");
  }

  
  render() {
    return (
      <div>

        <div className="father" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
          {
            this.state.show&&          <div className="child" onClick={this.onClick}>

            </div>
          }

        </div>

      </div>
    )
  }
}
