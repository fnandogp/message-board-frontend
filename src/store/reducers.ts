import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import messages from './messages';

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    messages: messages,
  });

export default createRootReducer;
