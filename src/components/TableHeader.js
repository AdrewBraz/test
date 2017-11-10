import React, { Component } from 'react';

export default class TableHeader extends Component {
  constructor(props){
    super(props)
    this.state= {
      sortDir: "ASC"
    }
  }
  
  toggleDir(){
    const { sortDir } = this.state;
    if(sortDir === "DESC"){
      this.setState({sortDir: "ASC"})
    }
    if(sortDir === "ASC"){
      this.setState({sortDir: "DESC"})
    }
  }

  handleClick(sortKey, sortDir){
    this.toggleDir()
    this.props.sortDepartments(sortKey, sortDir)
  }
  
  render() {
    const { sortKey } = this.props;
    const sortDir = this.state.sortDir;
    return (
        <th onClick={ () => this.handleClick(sortKey, sortDir)}>{this.props.category}</th>   
    );
  }
}