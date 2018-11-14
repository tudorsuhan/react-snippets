import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostsWithRedux } from '../../actions/actionCreators'

class ReduxFetch extends Component {
    // componentDidMount() {
    //     this.props.fetchPostsWithRedux()
    // }
    render() {
        console.log(this.props.posts)
        return (
            <div>DIV</div>
        )
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