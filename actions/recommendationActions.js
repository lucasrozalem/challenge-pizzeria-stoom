import {
  HANDLE_ERROR_FINALIZED_PIZZA,
  HANDLE_SET_INITIAL_VALUE_RECOMMENDATION,
  HANDLE_RECOMMENDATION_VISIBLE_MODAL,
  HANDLE_RECOMMENDATION_LOADING_REQUEST,
  HANDLE_RECOMMENDATION_SUCCESS_REQUEST,
} from "../constants/actionTypes";

export const handleLoadingRequest = () => ({
  type: HANDLE_RECOMMENDATION_LOADING_REQUEST,
  payload: {},
  meta: {},
  error: false,
});

export const handleSuccessRequest = () => ({
  type: HANDLE_RECOMMENDATION_SUCCESS_REQUEST,
  payload: {},
  meta: {},
  error: false,
});


export const handleVisibleModal = () => ({
  type: HANDLE_RECOMMENDATION_VISIBLE_MODAL,
  payload: {},
  meta: {},
  error: false,
});

export const handleErrorModal = ({ message }) => ({
  type: HANDLE_ERROR_FINALIZED_PIZZA,
  payload: { message },
  meta: {},
  error: false,
});

export const handleSetInitialValue = ( { recommendation }  ) => ({
  type: HANDLE_SET_INITIAL_VALUE_RECOMMENDATION,
  payload: { recommendation },
  meta: {},
  error: false,
});
