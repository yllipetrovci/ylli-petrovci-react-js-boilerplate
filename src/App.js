import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';// Redirect
import Dashboard from './containers/dashboard';
import SidebardMenu from './components/sidebarMenu';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="row row ml-0 mr-0">
          <div className="col-12 col-md-2 pr-0 pl-0">
            <SidebardMenu />
          </div>
          <div className="col-12 col-md-10 pl-md-0 pr-0">
            <div className='pl-0 col-12 pr-0'>
              <div className="container">
                <Header name="Name" />
              </div>
            </div>
            <Switch>
              <Route exact path="/" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
