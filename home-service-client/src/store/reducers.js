import { combineReducers } from 'redux';

import Services from 'store/services/reducer';
import Image from 'store/image/reducer';
import Booking from 'store/booking/reducer';
import Customer from 'store/customer/reducer';
import Payment from 'store/payment/reducer';
import Provider from 'store/provider/reducer';
import Review from 'store/review/reducer';
import Category from 'store/category/reducer';

import Auth from 'store/auth/reducer';
import Register from 'store/auth/register/reducer';
import RefreshToken from 'store/auth/refreshToken/reducer';

const rootReducer = combineReducers({
  Services,
  Image,
  Booking,
  Customer,
  Payment,
  Provider,
  Review,
  Category,

  Auth,
  Register,
  RefreshToken,
});

export default rootReducer;
