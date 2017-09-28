import  React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Menu extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="container-fluid">
              <div className="jumbotron jumbotron-fluid">
                <div className="container">
                  <h1 className="display-3">Fluid jumbotron</h1>
                  <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
              </div>
              <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
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
              </nav>
               
            </div>   
        )
    }
}