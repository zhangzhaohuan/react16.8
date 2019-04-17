import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import HandlingEvents from './HandlingEvents'


const Mainconcepts = () => {
  return <div></div>
}
export default class componentName extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to='/mainconcepts/handlingEvents'>事件处理</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/mainconcepts/handlingEvents' component={HandlingEvents} />
          <Route path='/mainconcepts' component={Mainconcepts} />

        </Switch>
      </div>
    )
  }
}
