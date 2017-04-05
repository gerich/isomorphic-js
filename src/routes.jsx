import React from 'react';
import { IndexRoute, Route, Router, createMemoryHistory }  from 'react-router';
import App from 'components/App';
import CounterPage from 'components/CounterPage';
import HelloWorldPage from 'components/HelloWorldPage';
import TimePage from 'components/TimePage';

const routes =  (
  <Router history={createMemoryHistory()}>
    <Route component={App} path='/'>
      <IndexRoute component={HelloWorldPage} />
      <Route component={CounterPage} path='counters' />
      <Route component={TimePage} path='time' />
    </Route>
  </Router>
);

export default routes;
