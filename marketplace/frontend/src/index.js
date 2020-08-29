import './assets/scss/main.scss';
import React from 'react';
import App from './components/App';

import { render } from 'react-dom';

import { Provider } from 'react-redux';

import store from './Redux/index';


render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'));