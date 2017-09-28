import {createStore, applyMiddleware, combineReducers} from "redux"
import { syncHistoryWithStore } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import rootReducer from './reducers/index'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { RouterMiddleware, routerMiddleware, routerReducer } from 'react-router-redux'

const logger = createLogger()
export const history = createHistory()
const middleware = routerMiddleware(history)



const store = createStore(
    rootReducer,
    applyMiddleware(thunk, middleware, logger)
)

export default store 