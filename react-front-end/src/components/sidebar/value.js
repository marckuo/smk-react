import React, { Component } from 'react';
import style from '../../stylesheets/style.css';

export default class Value extends Component {
  render() {
    return (
      <div className="value">
      	{this.props.value}
      </div>
    )
  }
}