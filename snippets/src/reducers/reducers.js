<<<<<<< HEAD
/**
 * Default state
 */
const persistentState = {
    loading: false,
    error: null,
    posts: []
}

const fetchReducer = (state = persistentState, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { 
                ...state, 
                loading: true, 
                error: null
            }
        case 'FETCH_SUCCESS':
            return { 
                ...state, 
                loading: false, 
                posts: action.payload
            }
        case 'FETCH_ERROR':
            return { 
                ...state, 
                loading: false, 
                error: action.payload.error,
                posts: []
=======
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from '../actions/actionTypes'

const fetchReducer = (state = { posts: [], loading: false, error: null }, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return { 
                ...state, 
                loading: true 
            }
        case FETCH_SUCCESS:
            return { 
                ...state, 
                loading: false, 
                posts: action.payload 
            }
        case FETCH_ERROR:
            return { 
                ...state, 
                loading: false, 
                error: action.error 
>>>>>>> a49ebf4fca167770181ea2f80b27ae3780e4b1a9
            }
        default:
            return state
    }
}

export default fetchReducer