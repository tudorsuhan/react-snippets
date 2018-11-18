import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import './styles/app.css'

import Routes from './rooter/Router'

const store = configureStore()

console.log(store.getState())

export default class App extends Component {

    static propTypes = {
        history: PropTypes.object
    }

    render() {
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </Provider>
        );
    }
}