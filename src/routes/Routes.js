
import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'; 
import Home from '../pages/home/Home';
import Techs from '../pages/techs/Techs';
import Historic from '../pages/historic/Historic';
import PathConstants from '../constants/path/PathConstants';

export default function Routes() {
  return (
    <Switch>
      <Route path={ PathConstants.HOME } component={ Home }/>
      <Route path={ PathConstants.TECHS } component={ Techs }/>
      <Route path={ PathConstants.HISTORIC } component={ Historic }/>
      <Redirect from='/' to={ PathConstants.HOME }/>
    </Switch>
  );
};