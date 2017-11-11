import  React, { Component }from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Menu from './Menu';
import Home from './Home'
import App from './App'

export default class Main extends Component {
    constructor(){
        super()
    }
    
    render(){
        return(
            <div> 
                <Menu {...this.props} />
                <Route exact path="/" render={() => <Home {...this.props} /> }></Route>
                <Route path="/employees"  component={() => <App {...this.props} />}></Route>
                <Route path="/departments"  component={() => <App {...this.props} />}></Route>
            </div>    
        )
    }
}