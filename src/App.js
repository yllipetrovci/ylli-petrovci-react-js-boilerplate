import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';// Redirect
import Main from './containers/dashboard';
import SidebardMenu from './components/sidebarMenu';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="row">
            <div className="col-12 col-md-3 pr-md-0">
              <SidebardMenu />
            </div>
            <div className="col-12 col-md-9 pl-md-0">
              <Route exact path="/" component={Main} />
            </div>
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
