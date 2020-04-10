import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Messages from './pages/Messages';
import MessageCreate from './pages/MessageCreate';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Messages></Messages>
        </Route>
        <Route path="/create">
          <MessageCreate></MessageCreate>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
