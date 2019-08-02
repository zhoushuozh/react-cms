import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import Admin from './Admin';
import Login from './pages/Login';
import Home from './pages/Home';
import Buttons from './pages/ui/Buttons';
import NoMatch from './components/NoMatch';

export default class Router extends React.Component{
  render() {
    return (<BrowserRouter>
      <App>
        <Switch>
          <Route path="/admin" render={() =>
            <Admin>
              <Switch>
                <Route path="/admin" exact component={Home} />
                <Route path="/admin/ui/buttons" component={Buttons} />
                <Route component={NoMatch} />
              </Switch>
            </Admin>
          } />
          <Route component={NoMatch} />
          <Route path="/login" component={Login} />
        </Switch>
      </App>
    </BrowserRouter>)
  }
}