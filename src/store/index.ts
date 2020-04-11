import { createStore, applyMiddleware, Store, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';
import { MessagesState } from './ducks/messages/types';
import { AlertState } from './ducks/alert/types';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export interface ApplicationState {
  messages: MessagesState;
  alert: AlertState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
