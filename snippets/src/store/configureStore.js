import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import throttle from 'lodash/throttle'

import fetchReducer from '../reducers/reducers'
import { loadState, saveState } from '../utils/localStorage'
import monitorReducersEnhancer from '../enhancers/monitorReducers'

const loggerMiddleware = createLogger()
const enhancers = [monitorReducersEnhancer, loggerMiddleware]
const composedEnhancers = compose(...enhancers)

<<<<<<< HEAD
=======
/**
 * Default state
 */
// const persistentState = {
//     loading: false,
//     error: null,
//     posts: []
// }

>>>>>>> e3a35f34e8ae2c3cafcf12b61cd60734bd02a0b3
const configureStore = () => {
    const persistentState = loadState()
    const store = createStore(
        fetchReducer,
        persistentState,
        composeWithDevTools(applyMiddleware(thunkMiddleware, composedEnhancers))
    )
    /**
     * Persisting the state to the localStorage
     */
    store.subscribe(throttle(() => {
        saveState(store.getState())
    }, 1000))
    return store
}

export default configureStore
