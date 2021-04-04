import {
  HANDLE_SET_VALUES_NAVBAR,
  HANDLE_LOADING_REQUEST_NAVBAR,
  HANDLE_ERROR_REQUEST_NAVBAR,
  HANDLE_SUCCESS_REQUEST_NAVBAR,
  HANDLE_NAVBAR_MOBILE,
} from "../constants/actionTypes";

export const handleSetValuesNavbar = ({ name, email }) => ({
  type: HANDLE_SET_VALUES_NAVBAR,
  payload: { name, email },
  meta: {},
  error: false,
});

export const handleLoadingRequestNavbar = () => ({
  type: HANDLE_LOADING_REQUEST_NAVBAR,
  payload: {},
  meta: {},
  error: false,
});

export const handleNavbarMobile = () => ({
  type: HANDLE_NAVBAR_MOBILE,
  payload: {},
  meta: {},
  error: false,
});

export const handleErrorRequestNavbar = () => ({
  type: HANDLE_ERROR_REQUEST_NAVBAR,
  payload: {},
  meta: {},
  error: false,
});

export const handleSuccessRequestNavbar = () => ({
  type: HANDLE_SUCCESS_REQUEST_NAVBAR,
  payload: {},
  meta: {},
  error: false,
});
