import fetch from 'cross-fetch';
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from './actionTypes';

function fetchPostsRequest() {
    return {
        type: FETCH_REQUEST
    }
}

function fetchPostsSuccess(payload) {
    return {
        type: FETCH_SUCCESS,
        payload
    }
}

function fetchPostsError() {
    return {
        type: FETCH_ERROR
    }
}

export function fetchPostsWithRedux() {
    return (dispatch) => {
        dispatch(fetchPostsRequest());
            return fetchPosts().then(([response, json]) =>{
                if(response.status === 200){
                dispatch(fetchPostsSuccess(json))
            } else {
                dispatch(fetchPostsError())
            }
        })
    }
}

export function fetchPosts() {
    const URL = "https://www.zoso.ro/wp-json/wp/v2/posts?_embed&per_page=20";
    return fetch(URL, { method: 'GET'})
        .then( response => Promise.all([response, response.json()]) );
}