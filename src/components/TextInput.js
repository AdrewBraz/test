import React, { Component } from 'react';

export default class TextInput extends Component {
  constructor(props){
    super(props)
    
    this.state = { 
      text: ""
     }
  
    }

  handleSubmit(e){
    const text = e.target.value.trim();

    if(e.which === 13){
      this.props.onSave(text)
    }
  }

  handleChange(e){
    this.setState({ text: e.target.value })
  }

  handleBlur(e){
    this.props.onSave(e.target.value)
  }
  
  render() {
    return (
      <input className=""
        type="text"
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit} />
    )
  }
}