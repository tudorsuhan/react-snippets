// Core
import { combineReducers } from 'redux';

// Reducers
import app from 'reducers';

const combinedReducers = combineReducers({
  app,
});

const rootReducer = (state, action) => combinedReducers(state, action);

export default rootReducer;
