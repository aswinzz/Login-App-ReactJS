/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import SignupPage from 'containers/SignupPage/Loadable';
import SigninPage from 'containers/SigninPage/Loadable';
import SignoutPage from 'containers/SignoutPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ForgotPage from 'containers/ForgotPage/Loadable';
import Header from 'containers/Header/Loadable';
export default function App() {
  return (
    <div>
    <Header/>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/login" component={SigninPage} />
        <Route exact path="/logout" component={SignoutPage} />
        <Route exact path="/forgot" component={ForgotPage} />
        <Route component={NotFoundPage} />
      </Switch>
     
    </div>
  );
}
