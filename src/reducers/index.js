import { combineReducers } from 'redux'
import {routerReducer } from 'react-router-redux'

import employees from './employees'
import departments from './departments'

const rootReducer = combineReducers({employees, departments, routing: routerReducer})

export default rootReducer