import {
  HANDLE_CHECKBOX_CHANGE,
  HANDLE_RESET_CHECKBOX_CHANGE,
  HANDLE_SET_INITIAL_VALUE,
} from "../constants/actionTypes";

export const handleCheckboxChangeDough = ({ name, priceDough }) => ({
  type: HANDLE_CHECKBOX_CHANGE,
  payload: { name, priceDough },
  meta: {},
  error: false,
});

export const handleResetCheckboxDough = () => ({
  type: HANDLE_RESET_CHECKBOX_CHANGE,
  payload: {},
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
