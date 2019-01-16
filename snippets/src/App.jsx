import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './styles/app.css';

import Routes from './rooter/Router';

const store = configureStore();
console.log('Redux store state', store.getState()); // GET default state

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
);

export default App;
