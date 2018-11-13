import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import Routes from './rooter/Router';

export default class App extends Component {

    static propTypes = {
        history: PropTypes.object
    }

    render() {
        const { history } = this.props;
        return(
            <BrowserRouter history={history}>
                <Routes />
            </BrowserRouter>
        );
    }
}