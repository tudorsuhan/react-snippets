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
            }
        default:
            return state
    }
}

export default fetchReducer