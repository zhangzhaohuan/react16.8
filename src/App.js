import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'

import Home from './components/Home'
import Mainconcepts from './components/Mainconcepts'
import AdvancedGuides from './components/AdvancedGuides'
import ApiReference from './components/ApiReference'


// hook start
import UseStateDemo from './components/UseStateDemo'
import UseEffectDemo from './components/UseEffectDemo'
import UseReducerDemo from './components/UseReducerDemo'
import UseMemoDemo from './components/UseMemoDemo'
import UseApiDemo from './components/UseApiDemo'
import HookExample from './components/HookExample'
// hook end


// component 
import Bread from './components/Bread'
import Loading from './components/Loading'
import AxxInput from './components/Input';


import './App.less';

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
              {/* hook start */}
              <li>
                <div>
                    hook
                </div>
                <ul>
                  <li>
                    <Link to='/useStateDemo'>UseStateDemo</Link>
                  </li>
                  <li>
                    <Link to='/useEffectDemo'>useEffectDemo</Link>
                  </li>
                  <li>
                    <Link to='/useReducerDemo'>UseReducerDemo</Link>
                  </li>

                  <li>
                    <Link to='/useMemoDemo'>UseMemoDemo</Link>
                  </li>
                  <li>
                    <Link to='/useApiDemo'>UseApi:请求数据</Link>
                  </li>
                  <li>
                    <Link to='/hookExample'>HookExample</Link>
                  </li>
                  <li>
                    <Link to='/bread'>bread</Link>
                  </li>
                  <li>
                    <Link to='/loading'>loading</Link>
                  </li>
                  <li>
                    <Link to='/axxinput'>axxinput</Link>
                  </li>
                </ul>
              </li>
              {/* hook end */}

            </ul>
            <Switch>
              {/* 核心概念 */}
              <Route path='/mainconcepts' component={Mainconcepts} />
              {/* 高级指引 */}
              <Route path='/advancedGuides' component={AdvancedGuides} />
              {/* api */}
              <Route path='/apiReference' component={ApiReference} />
              {/* hook start */}
              <Route path='/useStateDemo' component={UseStateDemo} />
              <Route path='/useEffectDemo' component={UseEffectDemo} />
              <Route path='/useReducerDemo' component={UseReducerDemo} />
              <Route path='/useMemoDemo' component={UseMemoDemo} />
              <Route path='/useApiDemo' component={UseApiDemo} />

              <Route path='/hookExample' component={HookExample} />
              {/* hook end */}

              <Route path='/bread' component={Bread} />
              <Route path='/loading' component={Loading} />
              <Route path='/axxinput' component={AxxInput} />
              <Route path='/' component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
