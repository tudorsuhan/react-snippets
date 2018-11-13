import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from '../actions/actionTypes'

const fetchReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return state
        case FETCH_SUCCESS:
            return { ...state, posts: action.payload }
        case FETCH_ERROR:
            return action.error
        default:
            return state
    }
}

export default fetchReducer