import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import messages from './messages';
import { MessagesState } from './messages/types';

export interface ApplicationState {
  messages: MessagesState;
}

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    messages,
  });

export default createRootReducer;
