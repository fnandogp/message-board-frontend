import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Messages from '../../pages/Messages';
import MessageCreate from '../../pages/MessageCreate';

const AppRoutes: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route path="/" component={Messages} exact></Route>
      <Route path="/create" component={MessageCreate}></Route>
    </Switch>
  );
};
export default AppRoutes;
