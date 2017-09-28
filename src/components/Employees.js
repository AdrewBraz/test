import  React, { Component } from 'react'
import axios from 'axios'


export default class Employees extends Component{
    constructor(props){
        super(props)
    }

    handleRequest(){
        this.props.fetchEmployees();
    }

    render(){
        return(
            <div className="container">
                <p>some text e</p>
                <button className="btn" onClick= {this.handleRequest.bind(this)}> click</button>
            </div>    
        )
    }
}