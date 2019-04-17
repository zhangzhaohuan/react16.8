import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'

import Home from './components/Home'
import Mainconcepts from './components/Mainconcepts'
import AdvancedGuides from './components/AdvancedGuides'
import ApiReference from './components/ApiReference'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li>
                <Link to='/mainconcepts'>主要概念</Link>
              </li>
              <li>
                <Link to='/advancedGuides'>高级指引</Link>
              </li>
              <li>
                <Link to='/apiReference'>api参考</Link>
              </li>
            </ul>
            <Switch>
              <Route path='/mainconcepts' component={Mainconcepts} />
              <Route path='/advancedGuides' component={AdvancedGuides} />
              <Route path='/apiReference' component={ApiReference} />
              <Route path='/' component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
