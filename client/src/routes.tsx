import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Dashboard from './pages/DashBoard';
import InfoClient from './pages/InfoClient';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/client" component={InfoClient} />
      </Switch>
    </BrowserRouter>
  );
}