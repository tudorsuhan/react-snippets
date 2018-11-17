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
            }
        default:
            return state
    }
}

export default fetchReducer