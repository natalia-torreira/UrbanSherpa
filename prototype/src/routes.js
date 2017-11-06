import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import PageIndex from './components/PageIndex';
import PageNotFound from './components/PageNotFound';

const routes = (
  <Route path='/' component={Layout}>
    <IndexRoute component={PageIndex}/>
    <Route path='*' component={PageNotFound}/>
  </Route>
);

export default routes;
