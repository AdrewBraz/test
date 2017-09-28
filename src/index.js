import React from 'react';
import { render } from 'react-dom';
require('bootstrap')
import "bootstrap/scss/bootstrap.scss";

import Menu from './components/Menu';

import App from './components/App';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import { Provider } from 'react-redux'
import store, { history } from './store'

const router = (
    <Provider store={ store }> 
        <BrowserRouter >
            <ConnectedRouter history={history}>
                <App>
                </App>   
            </ConnectedRouter>    
        </BrowserRouter> 
    </Provider>     
)


render(router, document.getElementById('root'))