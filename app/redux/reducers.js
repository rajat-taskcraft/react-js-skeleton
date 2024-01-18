import { combineReducers } from '@reduxjs/toolkit';
import ui from './modules/ui';
import notification from './modules/notification';
import userReducer from './modules/userReducer';
import InterestReducer from './modules/InterestReducer';
import UserDetails from './modules/UserDetails';
import VendorDetails from './modules/vendorDetails';

export default function createReducer() {
  const rootReducer = combineReducers({
    ui,
    notification,
    userReducer,
    interestReducer: InterestReducer,
    userDetails: UserDetails,
    vendorDetails: VendorDetails,
  });

  return rootReducer;
}
