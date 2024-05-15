import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import your components here
import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';

// Define the routes
const routes = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/directors" component={Directors} />
      <Route path="/actors" component={Actors} />
      <Route path="/movie/:id" component={Movie} />
    </Switch>
  </Router>
);

export default routes;