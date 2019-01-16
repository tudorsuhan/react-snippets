import { combineReducers } from 'redux';

import images from './images';

const combinedReducers = combineReducers({
  images,
});

const rootReducer = (state, action) => combinedReducers(state, action);

export default rootReducer;
