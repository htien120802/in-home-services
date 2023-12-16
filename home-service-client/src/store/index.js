import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { actionRefreshToken, actionLogout } from 'store/actions';

import rootReducer from './reducers';
import rootSaga from './sagas';

import { decodeJWT } from 'utils';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const tokenMiddleware = () => (next) => (action) => {
  const accessToken = localStorage.getItem('accessToken');

  if (action.requiresAuth && accessToken) {
    const decodedToken = decodeJWT(accessToken);

    if (decodedToken) {
      const currentTime = Date.now();
      const bufferTime = 5 * 60 * 1000;

      if (decodedToken.payload.exp * 1000 - currentTime < bufferTime) {
        handleRefreshToken();
      }
    }
  }

  return next(action);
};

async function handleRefreshToken() {
  try {
    await store.dispatch(actionRefreshToken());
  } catch (error) {
    if (error.response && error.response.status === 500) {
      store.dispatch(actionLogout());
    }
  }
}

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, tokenMiddleware)),
);
sagaMiddleware.run(rootSaga);

export default store;
