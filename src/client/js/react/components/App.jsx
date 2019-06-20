import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '_routes/appRoutes';
import './App.scss';

const App = () => (
  <Switch>
    {routes.map((route, index) => (
      <Route key={`${route.path ? route.path : `404Page`}-${index}`} {...route} />
    ))}
  </Switch>
)

export default App;