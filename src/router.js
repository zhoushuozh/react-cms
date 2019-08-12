import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import NoMatch from './components/NoMatch';
import Admin from './Admin';
import Login from './pages/Login';
import Home from './pages/Home';
import Buttons from './pages/ui/Buttons';
import Modals from './pages/ui/Modals';
import Loadings from './pages/ui/Loadings';
import Notifications from './pages/ui/Notifications';
import Messages from './pages/ui/Messages';
import TabsPage from './pages/ui/TabsPage';
import Carousels from './pages/ui/Carousels';

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
                <Route path="/admin/ui/modals" component={Modals} />
                <Route path="/admin/ui/loadings" component={Loadings} />
                <Route path="/admin/ui/notifications" component={Notifications} />
                <Route path="/admin/ui/messages" component={Messages} />
                <Route path="/admin/ui/tabs" component={TabsPage} />
                <Route path="/admin/ui/carousel" component={Carousels} />
                <Route component={NoMatch} />
              </Switch>
            </Admin>
          } />
          <Route path="/login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
      </App>
    </BrowserRouter>)
  }
}