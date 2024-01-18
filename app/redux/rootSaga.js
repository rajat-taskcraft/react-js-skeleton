import { getApiReq, patchApiReq } from 'Helpers/ApiHandlers';
import Cookies from 'js-cookie';
import { put, takeLatest, all, select } from 'redux-saga/effects';

function* getUserDetails() {
  if (Cookies.get('isLoggedIn')) {
    let isVendor = Cookies.get('ut');
    let str =
      isVendor === 'Vendor' ? '/vendors/get-details' : '/staffs/get-details';
    const response = yield getApiReq(str);
    try {
      if (response.status) {
        yield put({
          type: 'SET_USER_DETAILS',
          payload: response.data,
        });
      } else {
        yield put({
          type: 'SHOW_TOAST',
          payload: { type: 'error', message: response.error },
        });
      }
    } catch (e) {
      yield put({ type: 'SET_USER_DETAILS', payload: null });
    }
  }
}

function* updateVendorOnboarding() {
  const { updateOnboardingDetails } = yield select(
    (state) => state.vendorDetails,
  );
  yield patchApiReq('/vendors/onboarding', updateOnboardingDetails);
  getOnboardingData();
}

function* getOnboardingData() {
  let isVendor = Cookies.get('ut');
  if (isVendor === 'Vendor') {
    const response = yield getApiReq('/vendors/onboarding');
    try {
      if (response.status) {
        yield put({
          type: 'SET_ONBOARDING_DATA',
          payload: response.data,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
}

function* actionWatcher() {
  yield takeLatest('GET_USER_DETAILS', getUserDetails);
  yield takeLatest('GET_USER_DETAILS', getOnboardingData);
  yield takeLatest('UPDATE_ONBOARDING_DATA', updateVendorOnboarding);
  yield takeLatest('GET_ONBOARDING_DATA', getOnboardingData);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
