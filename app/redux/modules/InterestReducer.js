import { SET_INTEREST_DATA } from '../actions/actionConstants';

const initialState = {
  organizationName: '',
  fullName: '',
  email: '',
  mobile: '',
  designation: '',
};

const InterestReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INTEREST_DATA:
      for (const [key, value] of Object.entries(action.payload)) {
        state[key] = value;
      }
      return { ...state };
    default:
      return state;
  }
};
export default InterestReducer;
