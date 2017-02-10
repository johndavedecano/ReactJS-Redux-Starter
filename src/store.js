import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './application/modules/reducer';
import createLogger from 'redux-logger';

import { rootSaga } from './application/modules/sagas';

const sagaMiddleware = createSagaMiddleware();

function configureStoreProd(initialState) {
  const middlewares = [sagaMiddleware];
  return createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));
}

const logger = createLogger();
const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

function configureStoreDev(initialState) {
  const middlewares = [sagaMiddleware, logger];
  return createStore(
    rootReducer,
    initialState,
    composeWithDevToolsExtension(applyMiddleware(...middlewares)),
  );
}

const configureStore = process.env.NODE_ENV === 'production'
  ? configureStoreProd
  : configureStoreDev;

sagaMiddleware.run(rootSaga);

export default configureStore;
