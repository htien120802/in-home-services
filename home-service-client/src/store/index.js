import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { actionRefreshToken, actionLogout } from 'store/actions';

import rootReducer from './reducers';
import rootSaga from './sagas';

import { getRefreshTokenFromCookie } from 'utils';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const tokenMiddleware = () => (next) => (action) => {
  const accessToken = localStorage.getItem('accessToken');
  const accessTokenExpirationTime = localStorage.getItem('accessTokenExpirationTime');
  const refreshToken = getRefreshTokenFromCookie();

  if (action.requiresAuth) {
    const currentTime = Date.now();

    if (accessToken
      && accessTokenExpirationTime
      && accessTokenExpirationTime < currentTime + 60000) {
      store.dispatch(actionRefreshToken());
    }

    if (!refreshToken) {
      store.dispatch(actionLogout());
    }
  }

  return next(action);
};

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, tokenMiddleware)),
);
sagaMiddleware.run(rootSaga);

export default store;
