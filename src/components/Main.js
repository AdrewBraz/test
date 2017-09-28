import  React, { Component }from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Menu from './Menu';
import Home from './Home'
import Departments from './Departments'
import Employees from './Employees'

export default class Main extends Component {
    constructor(){
        super()
    }

    render(){
        console.log(this.props)
        return(
            <div> 
                <Menu {...this.props} />
                <Route exact path="/" render={() => <Home {...this.props} /> }></Route>
                <Route path="/employees"  component={() => <Employees {...this.props} />}></Route>
                <Route path="/departments"  component={() => <Departments {...this.props} />}></Route>
            </div>    
        )
    }
}