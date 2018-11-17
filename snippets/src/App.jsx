import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import './styles/app.css'

import Routes from './rooter/Router';

const store = configureStore()

export default class App extends Component {

    static propTypes = {
        history: PropTypes.object
    }

    render() {
        const { history } = this.props;
        return(
            <Provider store={store}>
                <BrowserRouter history={history}>
                    <Routes />
                </BrowserRouter>
            </Provider>
        );
    }
}