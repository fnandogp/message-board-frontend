import { createStore, applyMiddleware, Store, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import { ApplicationState } from './types';
import createRootReducer from './reducers';
import rootSaga from './sagas';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const routerMiddleware = createRouterMiddleware(history);

const store: Store<ApplicationState> = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(routerMiddleware, sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
