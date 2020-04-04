import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Messages from './pages/Messages';

export default function AppRouter() {
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
