import {
  RESET_INITIAL_STATE,
  HANDLE_INPUT_CHANGE,
  TOGGLE_LOADING,
  HANDLE_IMAGE_FILE_CHANGE,
  HANDLE_RADIO_CHANGE,
  HANDLE_CHECKBOX_CHANGE,
  HANDLE_SWITCH_CHANGE,
  HANDLE_SELECT_CHANGE,
  HANDLE_STEP_CHANGE,
  HANDLE_TAB_CHANGE,
  HANDLE_LOADING_REQUEST,
  HANDLE_ERROR_REQUEST,
  HANDLE_SUCCESS_REQUEST,
  HANDLE_ERROR_WITH_MESSAGE_REQUEST,
  HANDLE_SET_ADRESS_VIA_CEP,
  HANDLE_RESET_ADRESS_VIA_CEP,
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

export const handleRadioChange = ({ name, value }) => ({
  type: HANDLE_RADIO_CHANGE,
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

export const handleSwitchChange = ({ name, value }) => ({
  type: HANDLE_SWITCH_CHANGE,
  payload: {
    name,
    value,
  },
  meta: {},
  error: false,
});

export const handleStepChange = ({ value }) => ({
  type: HANDLE_STEP_CHANGE,
  payload: {
    value,
  },
  meta: {},
  error: false,
});

export const handleTabChange = ({ value }) => ({
  type: HANDLE_TAB_CHANGE,
  payload: {
    value,
  },
  meta: {},
  error: false,
});

export const toggleLoading = ({ name, value }) => ({
  type: TOGGLE_LOADING,
  payload: { name, value },
  meta: {},
  error: false,
});

export const handleImageFileChange = ({ image }) => ({
  type: HANDLE_IMAGE_FILE_CHANGE,
  payload: {
    image,
  },
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

export const handleSetAdressViaCep = ({
  street,
  complement,
  district,
  city,
  state,
  ibge,
}) => ({
  type: HANDLE_SET_ADRESS_VIA_CEP,
  payload: { street, complement, district, city, state, ibge },
  meta: {},
  error: false,
});

export const handleResetAdressViaCep = () => ({
  type: HANDLE_RESET_ADRESS_VIA_CEP,
  payload: {},
  meta: {},
  error: false,
});
