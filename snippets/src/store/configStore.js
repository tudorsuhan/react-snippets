import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import monitorReducersEnhancer from '../enhancers/monitorReducers'
import fetchReducer from '../reducers/reducers'

const loggerMiddleware = createLogger()

const configureStore = (preloadedState) => {
    const middlewares = [loggerMiddleware, thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)
    const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
    const composedEnhancers = composeWithDevTools(compose(...enhancers))
    const store = createStore(fetchReducer, preloadedState, composedEnhancers)
    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('../reducers/reducers', () => store.replaceReducer(fetchReducer))
    }
    return store
}
export default configureStore