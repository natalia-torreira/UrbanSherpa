import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import PageIndex from './components/PageIndex';
import PageSignIn from './components/PageSignIn';
import PageUserAccount from './components/PageUserAccount';
import PageNotFound from './components/PageNotFound';

const routes = (
  <Route path='/' component={Layout}>
    <IndexRoute component={PageIndex}/>
    <Route path='/sign-in' component={PageSignIn}/>
    <Route path='/user-account' component={PageUserAccount}/>
    <Route path='*' component={PageNotFound}/>
  </Route>
);

export default routes;
