import {
  HANDLE_CHECKBOX_CHANGE,
  HANDLE_RESET_CHECKBOX_CHANGE,
  HANDLE_SET_INITIAL_VALUE,
  HANDLE_SELECT_CHANGE,
} from "../constants/actionTypes";

export const handleCheckboxChangeSize = ({ name, priceSize }) => ({
  type: HANDLE_CHECKBOX_CHANGE,
  payload: { name, priceSize },
  meta: {},
  error: false,
});

export const handleResetCheckboxSize = () => ({
  type: HANDLE_RESET_CHECKBOX_CHANGE,
  payload: {},
  meta: {},
  error: false,
});

export const handleSelectChange = ({ name, priceSize }) => ({
  type: HANDLE_SELECT_CHANGE,
  payload: { name, priceSize },
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
  flavor
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
    flavor
  },
  meta: {},
  error: false,
});
