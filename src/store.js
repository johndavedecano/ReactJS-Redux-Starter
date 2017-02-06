/* eslint-disable */

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './application/modules/reducer';
import createLogger from 'redux-logger';
import request from './application/helpers/request';

const thunkMiddleware = thunk.withExtraArgument(request);

function configureStoreProd(initialState) {
  const middlewares = [thunkMiddleware];
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares)),
  );
}

const logger = createLogger();
const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

function configureStoreDev(initialState) {
  const middlewares = [logger, thunkMiddleware];
  return createStore(
    rootReducer,
    initialState,
    composeWithDevToolsExtension(
      applyMiddleware(...middlewares),
    ),
  );
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
