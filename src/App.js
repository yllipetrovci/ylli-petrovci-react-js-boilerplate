import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';// Redirect
import Main from './containers/dashboard';
import SidebardMenu from './components/sidebarMenu';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="row">

            <div className="col-12 col-md-2 pr-md-0">
              <SidebardMenu />
            </div>
            <div className="col-12 col-md-10 pl-md-0">
              <div className='pl-0 col-12 pr-0'>
                <div className="container">
                  <Header name="Name" />
                </div>
              </div>
              <Route exact path="/" component={Main} />
            </div>
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
