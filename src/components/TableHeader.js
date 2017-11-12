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
    switch(sortDir){
      case "ASC":
        this.setState({ sortDir: "DESC"});
        break;  
      case "DESC":
        this.setState({ sortDir: "ASC"});
        break;
      default:
        break;
    }
  }

  handleClick(sortKey, sortDir){
    this.toggleDir()
    console.log(sortDir)
    this.props.sortData(sortKey, sortDir)
  }
  
  render() {
    const { sortKey } = this.props;
    const sortDir = this.state.sortDir;
    return (
        <th className="header" onClick={ () => this.handleClick(sortKey, sortDir)}>
        {this.props.category}
        { sortDir === 'DESC' ? <span> &#8593;</span> : <span> &#8595;</span>}</th>   
    );
  }
}