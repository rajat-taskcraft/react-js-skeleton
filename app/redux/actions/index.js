import Cookies from 'js-cookie';
import * as types from './actionConstants';

/* Notification */
export const setNotif = (payload) => ({
  type: types.SET_NOTIF,
  payload,
});

/* UI */
export const setUI = (payload) => ({
  type: types.SET_UI,
  payload,
});

export const showToast = (payload) => ({
  type: types.SHOW_TOAST,
  payload,
});

export const isLoadingTrue = () => ({
  type: types.IS_LOADING_TRUE,
});

export const isLoadingFalse = () => ({
  type: types.IS_LOADING_FALSE,
});

export const setInterestData = (payload) => ({
  type: types.SET_INTEREST_DATA,
  payload,
});

export const getUserDetails = () => ({
  type: types.GET_USER_DETAILS,
});

export const setUserDetails = (payload) => ({
  type: types.SET_USER_DETAILS,
  payload,
});

export const setVendorData = (payload) => ({
  type: types.SET_VENDOR_DATA,
  payload,
});

export const updateVendorOnboarding = (payload) => ({
  type: types.UPDATE_ONBOARDING_DATA,
  payload,
});

export const getVendorOnboarding = () => ({
  type: types.GET_ONBOARDING_DATA,
});

export const setUserType = () => ({
  type: types.SET_USER_TYPE,
  payload: Cookies.get('ut') === 'Staff' ? false : true,
});
