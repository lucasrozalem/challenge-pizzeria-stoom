import update from "immutability-helper";

import {
  RESET_INITIAL_STATE,
  HANDLE_CHECKBOX_CHANGE,
  HANDLE_SET_INITIAL_VALUE,
  HANDLE_RESET_CHECKBOX_CHANGE,
} from "../constants/actionTypes";

const initialState = {
  doughTypeModal: "info",
  doughTitleModal: "Sua Pizza",
  isVisibleDoughModal: false,
  selectedSize: "",
  selectedDough: "",
  selectedFlavor: "",
  priceDough: 0,
  total: 0,
  bugHelper: false,
  description: "",
  size: "",
  dough: "",
  priceSize: 0,
  priceFlavor: 0,
};

const sizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_INITIAL_STATE:
      return initialState;

    case HANDLE_CHECKBOX_CHANGE:
      return update(state, {
        selectedSize: { $set: action.payload.name },
        size: { $set: action.payload.name },
        priceSize: { $set: action.payload.priceSize },
        bugHelper: { $set: !state.bugHelper },
      });

    case HANDLE_RESET_CHECKBOX_CHANGE:
      return update(state, {
        selectedSize: { $set: "" },
        size: { $set: "" },
        priceSize: { $set: 0 },
        bugHelper: { $set: !state.bugHelper },
      });

    case HANDLE_SET_INITIAL_VALUE:
      return update(state, {
        selectedDough: { $set: action.payload.dough },
        selectedSize: { $set: action.payload.size },
        priceDough: { $set: action.payload.priceDough },
        priceSize: { $set: action.payload.priceSize },
        priceFlavor: { $set: action.payload.priceFlavor },
        description: { $set: action.payload.description },
        size: { $set: action.payload.size },
        dough: { $set: action.payload.dough },
        total: { $set: action.payload.total },
        flavor: { $set: action.payload.flavor },
        bugHelper: { $set: !state.bugHelper },
      });

    default:
      return state;
  }
};

export { sizeReducer };
