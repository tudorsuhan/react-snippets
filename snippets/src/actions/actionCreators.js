export const fetchPostsRequest = loading => ({
    type: 'FETCH_REQUEST',
    payload: { loading }
})

export const fetchPostsSuccess = payload => ({
    type: 'FETCH_SUCCESS',
    payload, 
    receivedAt: Date.now()
})

export const fetchPostsError = error => ({
    type: 'FETCH_ERROR',
    payload: { error }
})
