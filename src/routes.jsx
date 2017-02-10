import React from 'react';
import { Route, Redirect } from 'react-router';

import App from './App';
import Home from './containers/Home/Home';

export default (
  <Route component={App}>
    <Route component={Home} path="/" />
    <Redirect from="/index.html" to="/" />
    <Redirect from="/*/" to="/*" />
  </Route>
);
