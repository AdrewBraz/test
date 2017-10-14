import  React, { Component } from 'react'
import axios from 'axios'


export default class Employees extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="container">
              <table className="table">
                  <thead>
                      Employees
                  </thead>
                  <tbody>
                      {this.props.employees.list.map(i => {
                          return `<tr >${i.name}</tr>`
                      })}
                  </tbody>
              </table>
            </div>    
        )
    }
}