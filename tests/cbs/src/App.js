import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import './App.scss';
import NavigationTabs from './components';
import { fetchPostsWithRedux } from './actions/actionCreators';
import configureStore from './store/configureStore';

const store = configureStore();

function mapStateToProps(state){
	return {
        posts: state.posts
    }
}

let Container = connect(
    mapStateToProps, 
    fetchPostsWithRedux
)(NavigationTabs);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="app">
                    <Container />
                </div>
            </Provider>
        );
    }
}