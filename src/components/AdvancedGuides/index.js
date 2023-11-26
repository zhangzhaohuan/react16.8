import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import Hoc from './Hoc'

const Advanceguide = () => {
  return <div>Advanceguide</div>
}
export default class componentName extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to='/advancedGuides/hoc'>高阶组件</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/advancedGuides/hoc' component={Hoc} />
          <Route path='/advancedGuides' component={Advanceguide} />
        </Switch>
        </div>
    )
  }
}
