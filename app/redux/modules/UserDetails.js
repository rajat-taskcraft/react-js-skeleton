import { SET_USER_DETAILS, SET_USER_TYPE } from '../actions/actionConstants';

const initialState = {
  user: {
    id: '9744bd11-bc6d-4916-a12a-6a78b80319bf',
    firstName: 'amit 01',
    lastName: 'yadav',
    email: 'amit.mongoosetech@gmail.com',
    mobile: '9669443389',
    dialCode: '+91',
    country: 'India',
    status: 'Active',
    isMobileVerified: true,
    isEmailVerified: false,
    isDeleted: false,
    createdAt: '2023-07-07T08:09:29.029Z',
    updatedAt: '2023-07-10T06:43:41.769Z',
  },
  offset: 0,
  isVendor: false,
};

const UserDetails = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_DETAILS:
      return {
        ...state,
        user: action.payload,
      };
    case SET_USER_TYPE:
      return {
        ...state,
        isVendor: action.payload,
      };

    default:
      return state;
  }
};

export default UserDetails;
