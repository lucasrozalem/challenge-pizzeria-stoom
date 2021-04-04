import {
  RESET_INITIAL_STATE,
  HANDLE_INPUT_CHANGE,
  HANDLE_CHECKBOX_CHANGE,
  HANDLE_SELECT_CHANGE,
  HANDLE_LOADING_REQUEST,
  HANDLE_ERROR_REQUEST,
  HANDLE_SUCCESS_REQUEST,
  HANDLE_ERROR_WITH_MESSAGE_REQUEST,
} from "../constants/actionTypes";

export const resetInitialState = () => ({
  type: RESET_INITIAL_STATE,
});

export const handleInputChange = ({ name, value }) => ({
  type: HANDLE_INPUT_CHANGE,
  payload: { name, value },
  meta: {},
  error: false,
});

export const handleSelectChange = ({ name, value }) => ({
  type: HANDLE_SELECT_CHANGE,
  payload: { name, value },
  meta: {},
  error: false,
});

export const handleCheckboxChange = ({ checkedValues }) => ({
  type: HANDLE_CHECKBOX_CHANGE,
  payload: { checkedValues },
  meta: {},
  error: false,
});

export const handleLoadingRequest = () => ({
  type: HANDLE_LOADING_REQUEST,
  payload: {},
  meta: {},
  error: false,
});

export const handleErrorRequest = () => ({
  type: HANDLE_ERROR_REQUEST,
  payload: {},
  meta: {},
  error: false,
});

export const handleErrorWithMessageRequest = ({ message }) => ({
  type: HANDLE_ERROR_WITH_MESSAGE_REQUEST,
  payload: { message },
  meta: {},
  error: false,
});

export const handleSuccessRequest = () => ({
  type: HANDLE_SUCCESS_REQUEST,
  payload: {},
  meta: {},
  error: false,
});
