import update from "immutability-helper";

import {
  RESET_INITIAL_STATE,
  HANDLE_LOADING_REQUEST_NAVBAR,
  HANDLE_ERROR_REQUEST_NAVBAR,
  HANDLE_SUCCESS_REQUEST_NAVBAR,
  HANDLE_SET_VALUES_NAVBAR,
  HANDLE_NAVBAR_MOBILE,
} from "../constants/actionTypes";

const initialState = {
  name: "",
  email: "",
  loginMade: false,
  loadingNavbar: false,
  menuMobileVisible: false,
};

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_INITIAL_STATE:
      return initialState;

    case HANDLE_LOADING_REQUEST_NAVBAR:
      return update(state, {
        loadingNavbar: { $set: true },
      });

    case HANDLE_ERROR_REQUEST_NAVBAR:
      return update(state, {
        loadingNavbar: { $set: false },
        loginMade: { $set: false },
        name: { $set: "" },
        email: { $set: "" },
      });

    case HANDLE_NAVBAR_MOBILE:
      return update(state, {
        menuMobileVisible: { $set: !state.menuMobileVisible },
      });

    case HANDLE_SUCCESS_REQUEST_NAVBAR:
      return update(state, {
        loadingNavbar: { $set: false },
        loginMade: { $set: true },
      });

    case HANDLE_SET_VALUES_NAVBAR:
      return update(state, {
        name: { $set: action.payload.name },
        email: { $set: action.payload.email },
        loginMade: { $set: true },
        loadingNavbar: { $set: false },
      });

    default:
      return state;
  }
};

export { navbarReducer };
