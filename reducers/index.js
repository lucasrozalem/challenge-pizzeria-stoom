import { combineReducers } from 'redux';

import * as navbarReducers from './navbarReducer';
import * as doughReducers from './doughReducer';
import * as sizeReducers from './sizeReducer';
import * as flavorReducers from './flavorReducer';

const rootReducer = combineReducers({
  ...navbarReducers,
  ...doughReducers,
  ...sizeReducers,
  ...flavorReducers
});

export default rootReducer;