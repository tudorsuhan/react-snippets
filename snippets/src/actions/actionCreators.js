import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from './actionTypes'

export const fetchPostsRequest = (payload) => ({
    type: FETCH_REQUEST,
    payload
})

export const fetchPostsSuccess = (payload) => ({
    type: FETCH_SUCCESS,
    payload
})

export const fetchPostsError = (payload) => ({
    type: FETCH_ERROR,
    payload
})

export const fetchPostsWithRedux = () => {
    return (dispatch) => {
        dispatch(fetchPostsRequest());
        return fetchPosts()
            .then(([response, json]) => {
                if (response.status === 200) {
                    dispatch(fetchPostsSuccess(json))
                } else {
                    dispatch(fetchPostsError())
                }
        })
    }
}

export const fetchPosts = () => {
    const URL = "http://android.softwsp.com/wp-json/wp/v2/posts?per_page=20";
    return fetch(URL, {
            method: 'GET'
        })
        .then(response => Promise.all([response, response.json()]));
}