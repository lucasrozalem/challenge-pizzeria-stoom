import {
  HANDLE_SET_INITIAL_VALUE,
  HANDLE_CHANGE_FLAVOR,
  HANDLE_RESET_FLAVOR,
  HANDLE_VISIBLE_MODAL,
  HANDLE_ERROR_FINALIZED_PIZZA,
  HANDLE_LOADING_REQUEST,
  HANDLE_SUCCESS_REQUEST,
} from "../constants/actionTypes";

export const handleResetFlavor = () => ({
  type: HANDLE_RESET_FLAVOR,
  payload: {},
  meta: {},
  error: false,
});

export const handleLoadingRequest = () => ({
  type: HANDLE_LOADING_REQUEST,
  payload: {},
  meta: {},
  error: false,
});

export const handleSuccessRequest = () => ({
  type: HANDLE_SUCCESS_REQUEST,
  payload: {},
  meta: {},
  error: false,
});

export const handleChangeFlavor = ({ name, priceFlavor, description }) => ({
  type: HANDLE_CHANGE_FLAVOR,
  payload: { name, priceFlavor, description },
  meta: {},
  error: false,
});

export const handleVisibleModal = () => ({
  type: HANDLE_VISIBLE_MODAL,
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

export const handleSetInitialValue = ({
  description,
  size,
  dough,
  priceSize,
  priceDough,
  total,
  priceFlavor,
  flavor,
}) => ({
  type: HANDLE_SET_INITIAL_VALUE,
  payload: {
    description,
    size,
    dough,
    priceSize,
    priceDough,
    total,
    priceFlavor,
    flavor,
  },
  meta: {},
  error: false,
});
