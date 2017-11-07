import React, { Component } from 'react';
import TextInput from "./TextInput";

export default class TableCell extends Component {
  constructor(props){
    super(props)
    this.state = {
      edit: false
    }
  }

  handleDoubleClick(){
    this.setState({ edit: true });
  }

  handleSave(id, text){
    if(this.props.location.path === "/employees"){
      this.props.editEmployee(id, text)
    } else if(this.props.location.path === "/departments"){
      this.props.editDepartment(id, text)
    }
    this.setState({edit: false})
  }


  render() {
    const { edit } = this.state;
    const { item } = this.props;
    let elem;
    if(this.state.edit){
      elem = (
          <TextInput onSave={(text) => this.handleSave(item.id, text)}/>
      )
    } else {
      elem = (
         <span>
           { item }
         </span>  
      )
    }
    return (
        <td>
          { elem }
        </td>   
    );
  }
}