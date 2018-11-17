import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import monitorReducersEnhancer from '../enhancers/monitorReducers'
// import loggerMiddleware from '../middleware/logger'
import fetchReducer from '../reducers/reducers'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = compose(...enhancers)
  const store = createStore(fetchReducer, preloadedState, composedEnhancers)
  return store
}