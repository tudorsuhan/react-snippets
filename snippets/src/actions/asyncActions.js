import { fetchPostsRequest, fetchPostsSuccess, fetchPostsError } from './actionCreators';

export const androidPosts = () => {
    return (dispatch) => {
        dispatch(fetchPostsRequest());
        return androidPostsFetch() 
            .then(results => {
                if (results.status === 200) {
                    dispatch(fetchPostsSuccess(results))
                } else {
                    dispatch(fetchPostsRequest())
                }
            })
            .catch(error => dispatch(fetchPostsError(error)))
    }
}

export const androidPostsFetch = () => {
    const ANDROID_URL = "http://android.softwsp.com/wp-json/wp/v2/posts?per_page=100";
    return fetch(ANDROID_URL)
        .then(response => { return response.json() })
}

export const fetchPostsWithRedux = () => {
    return (dispatch) => {
        dispatch(fetchPostsRequest());
        return fetchPosts()
            .then(([response, json]) => {
                if (response.status === 200) {
                    dispatch(fetchPostsSuccess(json))
                } else {
                    dispatch(fetchPostsRequest())
                }
            })
            .catch(error => dispatch(fetchPostsError(error)))
    }
}

export const fetchPosts = () => {
    const URL = "http://android.softwsp.com/wp-json/wp/v2/posts?per_page=20";
    return fetch(URL, { method: 'GET' })
        .then(response => Promise.all([response, response.json()]));
}