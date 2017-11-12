import React, { Component } from 'react';

export default class FilterInput extends Component {
  constructor(props){
    super(props)
  }

  handleChange(e){
    e.preventDefault()
    const text = this.textInput.value.trim().toLowerCase();
    this.props.filterData(text)
  }

  render() {
    return (
      <div className="input-wrapper">
        <div className="input-group input-group-lg">
          <input className="form-control"
            ref={ (input) => this.textInput = input}
            type="text"
            placeholder="filter"
            autoFocus="true"
            onChange={this.handleChange.bind(this)}
          />
        </div>  
      </div>  
    );
  }
}