import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Gallery from './Gallery';
import imgUrls from './data/data'
import registerServiceWorker from './registerServiceWorker';

render(
    <Gallery imgUrls={imgUrls} />, 
    document.getElementById('root')
);
registerServiceWorker();
