import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostsWithRedux } from '../../actions/actionCreators'

class ReduxFetch extends Component {
    componentDidMount() {
        this.props.fetchPostsWithRedux()
    }
    render() {
        console.log(this.props)
        return (
            <ul>
				{
                    this.props.posts && 
                    this.props.posts.map((post) =>{
                        return(
                            <li key={post.id}>{post.title.rendered}</li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
	posts: state.posts
})

const FetchDataWithRedux = connect(
    mapStateToProps, 
    { fetchPostsWithRedux }
)(ReduxFetch)

export default FetchDataWithRedux

/**
 * https://stackoverflow.com/questions/39813984/how-to-fetch-data-through-api-in-redux
 * http://jsfiddle.net/cdagli/b2uq8704/6/
 */