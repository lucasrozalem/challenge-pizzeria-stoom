import { combineReducers } from "redux";

import * as doughReducers from "./doughReducer";
import * as sizeReducers from "./sizeReducer";
import * as flavorReducers from "./flavorReducer";
import * as recommendationReducers from "./recommendationReducer";

const rootReducer = combineReducers({
  ...doughReducers,
  ...sizeReducers,
  ...flavorReducers,
  ...recommendationReducers,
});

export default rootReducer;
