import React, { Component } from 'react';
import style from './../../../stylesheets/style.css';


export default class Value extends Component {
  render() {
    return (
      <div className={`col-xs-6 value ${this.props.name}`}>
      	{this.props.val}
      </div>
    )
  }
}
