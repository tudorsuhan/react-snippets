import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import fetchReducer from '../reducers/reducers'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
    return createStore(
        fetchReducer,
        preloadedState,
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    )
}