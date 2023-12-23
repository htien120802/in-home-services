import { all, fork } from 'redux-saga/effects';

import Services from 'store/services/saga';
import Image from 'store/image/saga';
import Booking from 'store/booking/saga';
import Customer from 'store/customer/saga';
import Payment from 'store/payment/saga';
import Provider from 'store/provider/saga';
import Review from 'store/review/saga';
import Category from 'store/category/saga';

import Auth from 'store/auth/saga';
import Register from 'store/auth/register/saga';
import RefreshToken from 'store/auth/refreshToken/saga';

export default function* rootSaga() {
  yield all([
    fork(Services),
    fork(Image),
    fork(Booking),
    fork(Customer),
    fork(Payment),
    fork(Provider),
    fork(Review),
    fork(Category),

    fork(Auth),
    fork(Register),
    fork(RefreshToken),
  ]);
}
