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

  handleSave(id, text, category){
    this.props.editData(id, text, category)
    this.setState({edit: false})
  }


  render() {
    const { edit } = this.state;
    const { item, id, category } = this.props;
    let elem;
    if(this.state.edit){
      elem = (
          <TextInput text={ item } onSave={(text) => this.handleSave(id, text, category)}/>
      )
    } else {
      elem = (
         <span>
           { item }
         </span>  
      )
    }
    return (
        <td onDoubleClick={ this.handleDoubleClick.bind(this)}>
          { elem }
        </td>   
    );
  }
}
