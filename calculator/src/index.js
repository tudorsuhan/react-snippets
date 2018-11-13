import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';
import Calculator from './Calculator';
import registerServiceWorker from './registerServiceWorker';

const ROOT = document.getElementById('app');

ReactDOM.render(
    <Calculator />, 
    ROOT
);
registerServiceWorker();
