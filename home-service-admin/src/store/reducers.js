import { combineReducers } from 'redux';

import Admin from 'store/admin/reducer';
import Category from 'store/category/reducer';

import Login from 'store/auth/login/reducer';
import Register from 'store/auth/register/reducer';
import RefreshToken from 'store/auth/refreshToken/reducer';
import Logout from 'store/auth/logout/reducer';

import headerSlice from '../features/common/headerSlice'
import modalSlice from '../features/common/modalSlice'
import rightDrawerSlice from '../features/common/rightDrawerSlice'
import leadsSlice from '../features/leads/leadSlice'

const rootReducer = combineReducers({
  Login,
  Register,
  RefreshToken,
  Logout,

  Admin,
  Category,

  header : headerSlice,
  rightDrawer : rightDrawerSlice,
  modal : modalSlice,
  lead : leadsSlice
});

export default rootReducer;
