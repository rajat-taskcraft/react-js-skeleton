import {
  SET_ONBOARDING_DATA,
  SET_VENDOR_DATA,
  UPDATE_ONBOARDING_DATA,
} from '../actions/actionConstants';

const initialState = {
  vendor: null,
  updateOnboardingDetails: null,
  onboardingData: null,
  offset: 0,
};

const VendorDetails = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_VENDOR_DATA:
      return {
        ...state,
        vendor: action.payload,
      };
    case UPDATE_ONBOARDING_DATA:
      return {
        ...state,
        updateOnboardingDetails: action.payload,
      };
    case SET_ONBOARDING_DATA:
      return {
        ...state,
        onboardingData: action.payload,
      };

    default:
      return state;
  }
};

export default VendorDetails;
