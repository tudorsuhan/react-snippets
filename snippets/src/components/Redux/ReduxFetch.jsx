import React, { Component } from 'react'
import { connect } from 'react-redux'
<<<<<<< HEAD
import { fetchPostsWithRedux } from '../../actions/asyncActions'
=======
import { fetchPostsWithRedux } from '../../actions/actionCreators'
>>>>>>> a49ebf4fca167770181ea2f80b27ae3780e4b1a9

class ReduxFetch extends Component {
    componentDidMount() {
        this.props.fetchPostsWithRedux()
    }
    render() {
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