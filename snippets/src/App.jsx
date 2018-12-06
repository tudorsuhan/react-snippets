import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import './styles/app.css'

import Routes from './rooter/Router'

const store = configureStore()

<<<<<<< HEAD
console.log('Redux store state', store.getState()) // GET default state
=======
console.log(store.getState()) // GET default state
>>>>>>> a49ebf4fca167770181ea2f80b27ae3780e4b1a9

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