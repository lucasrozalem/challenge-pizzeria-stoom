import update from "immutability-helper";

import {
  RESET_INITIAL_STATE,
  HANDLE_ERROR_FINALIZED_PIZZA,
  HANDLE_RECOMMENDATION_VISIBLE_MODAL,
  HANDLE_RECOMMENDATION_LOADING_REQUEST,
  HANDLE_RECOMMENDATION_SUCCESS_REQUEST,
  HANDLE_SET_INITIAL_VALUE_RECOMMENDATION,
} from "../constants/actionTypes";

const initialState = {
  recommendationTypeModal: "info",
  recommendationTitleModal: "Sua Pizza",
  isVisibleRecommendationModal: false,
  recommendation: {},
  bugHelper: false,
  recommendationLoadingRequest: false,
  messageError: "",
  errorFinalizedRecommendation: false,
};

const recommendationReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_INITIAL_STATE:
      return initialState;

    case HANDLE_SET_INITIAL_VALUE_RECOMMENDATION:
      return update(state, {
        recommendation: { $set: action.payload.recommendation },
        bugHelper: { $set: !state.bugHelper },
      });

    case HANDLE_RECOMMENDATION_VISIBLE_MODAL:
      return update(state, {
        isVisibleRecommendationModal: {
          $set: !state.isVisibleRecommendationModal,
        },
        recommendationTitleModal: { $set: "Finalizar Pedido?" },
        recommendationTypeModal: { $set: "info" },
        recommendationLoadingRequest: { $set: false },
      });

    case HANDLE_ERROR_FINALIZED_PIZZA:
      return update(state, {
        recommendationLoadingRequest: { $set: false },
        recommendationTitleModal: {
          $set: "Por favor selecione todos os passos",
        },
        recommendationTypeModal: { $set: "danger" },
        messageError: { $set: action.payload.message },
      });

    case HANDLE_RECOMMENDATION_LOADING_REQUEST:
      return update(state, {
        recommendationLoadingRequest: { $set: true },
        recommendationTypeModal: { $set: "warning" },
        recommendationTitleModal: { $set: "Aguarde" },
      });

    case HANDLE_RECOMMENDATION_SUCCESS_REQUEST:
      return update(state, {
        recommendationLoadingRequest: { $set: false },
        pizzaSuccessRequest: { $set: true },
        pizzaErrorRequest: { $set: false },
        recommendationTypeModal: { $set: "success" },
        recommendationTitleModal: { $set: "Obrigado por fazar seu pedido!" },
      });
    default:
      return state;
  }
};

export { recommendationReducer };
