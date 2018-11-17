import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import fetchReducer from '../reducers/reducers'
import monitorReducersEnhancer from '../enhancers/monitorReducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const loggerMiddleware = createLogger()
const enhancers = [monitorReducersEnhancer, loggerMiddleware]
const composedEnhancers = compose(...enhancers)

export default function configureStore(preloadedState) {
    return createStore(
        fetchReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunkMiddleware, composedEnhancers))
    )
}