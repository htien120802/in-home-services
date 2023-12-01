import { all, fork } from 'redux-saga/effects';

import Services from 'store/services/saga';

import Login from 'store/auth/login/saga';
import Register from 'store/auth/register/saga';
import RefreshToken from 'store/auth/refreshToken/saga';
import Logout from 'store/auth/logout/saga';

export default function* rootSaga() {
  yield all([
    fork(Services),

    fork(Login),
    fork(Register),
    fork(RefreshToken),
    fork(Logout),
  ]);
}
