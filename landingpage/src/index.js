import React, { Component } from 'react';
import { render } from 'react-snapshot';
import './assets/sass/app.css';
import Home from './views/pages/Home/Home.js';
import registerServiceWorker from './registerServiceWorker';

const ROOT = document.getElementById('app');

class App extends Component {
    render() {
        return(
            <Home />
        );
    }
}

render(
    <App />, 
    ROOT
);
registerServiceWorker();
