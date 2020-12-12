import { userConstants } from "./actionConstants";

const INIT_STATE = {
  isLogined: false,
  userDetails: {},
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
