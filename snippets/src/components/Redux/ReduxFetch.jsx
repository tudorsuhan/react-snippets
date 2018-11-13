import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostsWithRedux } from '../../actions/actionCreators'

class ReduxFetch extends Component {
    render() {
        return <div>DIV</div>;
    }
}

function mapStateToProps(state){
	return {
        posts: state.posts
    }
}

const FetchDataWithRedux = connect(
    mapStateToProps, 
    fetchPostsWithRedux
)(ReduxFetch)

export default FetchDataWithRedux