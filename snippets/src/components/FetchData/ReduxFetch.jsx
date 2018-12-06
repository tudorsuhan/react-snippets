import React, { Component } from 'react';
import { connect } from 'react-redux';
import { androidPosts } from '../../actions/asyncActions';

class ReduxFetchData extends Component {
    componentDidMount() {
        this.props.androidPosts()
    }
    render() {
        console.log(this.props);
        return (
            <div>ReduxFetch Component</div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.data
})

const DataFetchingWithRedux = connect(
    mapStateToProps,
    { androidPosts }
)(ReduxFetchData);

export default DataFetchingWithRedux;