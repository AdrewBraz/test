import React from 'react';
import { render } from 'react-dom';
import style from './style.scss'

import Main from './components/Main';

import { BrowserRouter, Router, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import { Provider } from 'react-redux'
import store, { history } from './store'

const router = (
    <Provider store={ store }> 
        <BrowserRouter >
            <ConnectedRouter history={history}>
                <Main>
                </Main>   
            </ConnectedRouter>    
        </BrowserRouter> 
    </Provider>     
)


render(router, document.getElementById('root'))