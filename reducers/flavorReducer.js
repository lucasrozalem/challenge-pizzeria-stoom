import update from "immutability-helper";

import {
  RESET_INITIAL_STATE,
  HANDLE_SET_INITIAL_VALUE,
  HANDLE_CHANGE_FLAVOR,
  HANDLE_RESET_FLAVOR,
  HANDLE_VISIBLE_MODAL,
  HANDLE_ERROR_FINALIZED_PIZZA,
  HANDLE_SUCCESS_REQUEST,
  HANDLE_LOADING_REQUEST,
} from "../constants/actionTypes";

const initialState = {
  pizzaTypeModal: "info",
  messageError: "",
  errorFinalizedPizza: false,
  pizzaTitleModal: "",
  isVisiblePizzaModal: false,
  selectedDough: "",
  total: 0,
  bugHelper: false,
  description: "",
  size: "",
  dough: "",
  priceSize: 0,
  priceDough: 0,
  priceFlavor: 0,
  selectedSize: "",
  selectedFlavor: "",
  pizzaLoadingRequest: false,
};

const flavorReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_INITIAL_STATE:
      return initialState;

    case HANDLE_CHANGE_FLAVOR:
      return update(state, {
        selectedFlavor: { $set: action.payload.name },
        priceFlavor: { $set: action.payload.priceFlavor },
        description: { $set: action.payload.description },
        bugHelper: { $set: !state.bugHelper },
      });

    case HANDLE_RESET_FLAVOR:
      return update(state, {
        selectedFlavor: { $set: "" },
        priceFlavor: { $set: 0 },
        description: { $set: "" },
        bugHelper: { $set: !state.bugHelper },
      });

    case HANDLE_SET_INITIAL_VALUE:
      return update(state, {
        selectedDough: { $set: action.payload.dough },
        selectedSize: { $set: action.payload.size },
        selectedFlavor: { $set: action.payload.flavor },
        priceDough: { $set: action.payload.priceDough },
        priceSize: { $set: action.payload.priceSize },
        priceFlavor: { $set: action.payload.priceFlavor },
        description: { $set: action.payload.description },
        size: { $set: action.payload.size },
        dough: { $set: action.payload.dough },
        flavor: { $set: action.payload.flavor },
        total: { $set: action.payload.total },
        bugHelper: { $set: !state.bugHelper },
      });

    case HANDLE_VISIBLE_MODAL:
      return update(state, {
        isVisiblePizzaModal: { $set: !state.isVisiblePizzaModal },
        pizzaTitleModal: { $set: "Finalizar Pedido?" },
        pizzaTypeModal: { $set: "info" },
        errorFinalizedPizza: { $set: false },
        pizzaLoadingRequest: { $set: false },
      });

    case HANDLE_ERROR_FINALIZED_PIZZA:
      return update(state, {
        errorFinalizedPizza: { $set: true },
        pizzaLoadingRequest: { $set: false },
        pizzaTitleModal: { $set: "Por favor selecione todos os passos" },
        pizzaTypeModal: { $set: "danger" },
        messageError: { $set: action.payload.message },
      });

    case HANDLE_LOADING_REQUEST:
      return update(state, {
        pizzaLoadingRequest: { $set: true },
        pizzaTypeModal: { $set: "warning" },
        pizzaTitleModal: { $set: "Aguarde" },
      });

    case HANDLE_SUCCESS_REQUEST:
      return update(state, {
        pizzaLoadingRequest: { $set: false },
        pizzaSuccessRequest: { $set: true },
        pizzaErrorRequest: { $set: false },
        pizzaTypeModal: { $set: "success" },
        pizzaTitleModal: { $set: "Obrigado por fazar seu pedido!" },
      });
    default:
      return state;
  }
};

export { flavorReducer };
