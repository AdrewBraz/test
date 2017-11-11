import { combineReducers } from 'redux'
import {routerReducer } from 'react-router-redux'

import allData from './allData'

const rootReducer = combineReducers({allData, routing: routerReducer})

export default rootReducer