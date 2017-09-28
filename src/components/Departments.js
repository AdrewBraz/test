import  React, { Component } from 'react'
import axios from 'axios'

export default class Departments extends Component{
    constructor(props){
        super(props)
    }

    handleRequest(){
        this.props.fetchDepartments()
    }

    render(){
        return(
            <div className="container">
                <p>some text d</p>
                <button onClick= {this.handleRequest.bind(this)} className="btn"> click</button>
            </div>    
        )
    }
}
