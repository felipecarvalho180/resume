
import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/home/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path='/resume' component={ Home }/>
      <Redirect from='/' to='/resume'/>
    </Switch>
  );
};