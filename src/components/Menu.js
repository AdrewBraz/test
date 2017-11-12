import  React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Menu extends Component{
    constructor(){
        super()
    }

    render(){
        return(
          <div>
            <div className="container-fluid">
              <div className="jumbotron jumbotron-fluid">
                <div className="container">
                  <h1 className="display-3">React-Redux Table</h1>
                  <p className="lead">This app is build with React-Redux. You can sort, edit and filter this table</p>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="main-nav">
                <ul className="nav nav-pills justify-content-center">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/departments">Departments</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/employees">Employees</NavLink>
                    </li>
                </ul>
              </div>  
            </div>
          </div>    
        )
    }
}