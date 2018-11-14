import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_ERROR
} from './actionTypes'

export function fetchPostsRequest() {
    return {
        type: FETCH_REQUEST
    }
}

export function fetchPostsSuccess(payload) {
    return {
        type: FETCH_SUCCESS,
        payload
    }
}

export function fetchPostsError(error) {
    return {
        type: FETCH_ERROR,
        error
    }
}

export function fetchPostsWithRedux() {
    return (dispatch) => {
        dispatch(fetchPostsRequest());
        return fetchPosts().then(([response, json]) => {
            if (response.status === 200) {
                dispatch(fetchPostsSuccess(json))
            } else {
                dispatch(fetchPostsError())
            }
        })
    }
}

export function fetchPosts() {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    return fetch(URL, {
            method: 'GET'
        })
        .then(response => Promise.all([response, response.json()]));
}