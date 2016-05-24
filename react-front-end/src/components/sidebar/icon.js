import React, { Component } from 'react';
import style from '../../stylesheets/style.css';

export default class Icon extends Component {
  render() {
    return (
      <div className="icon">
      <img src={`/src/images/icons/${this.props.image}`} height="60px" width="60px"/>
      </div>
    )
  }
}