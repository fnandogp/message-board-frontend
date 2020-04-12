import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import messages from './messages';
import alert from './alert';
import { MessagesState } from './messages/types';
import { AlertState } from './alert/types';

export interface ApplicationState {
  messages: MessagesState;
  alert: AlertState;
}

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    messages,
    alert,
  });

export default createRootReducer;
