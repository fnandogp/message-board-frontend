import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Messages from './containers/Messages';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Messages></Messages>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
