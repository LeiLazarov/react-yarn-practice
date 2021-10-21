import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './components/Home'

const history = createBrowserHistory()

const App = () => <>
  <Router history={history}>
    <Switch>
      <Route
        path='/'
        exact
        component={ () => <Home/>}
      />
    </Switch>
  </Router>
</>;

export default App;
