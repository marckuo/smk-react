import React, { Component } from 'react';
import style from './../../../stylesheets/style.css';


export default class Value extends Component {
  render() {
    return (
      <div className={`value ${this.props.name}`}>
      	{this.props.val}{
            (this.props.name && this.props.name === "temp")
          ? <span className="unit">°C</span>
          : null
          }{
            (this.props.name && this.props.name === "humid")
          ? <span className="unit">%</span>
          : null
          }{
            (this.props.name && this.props.name === "door")
          ? <span className="unit"> TIMES</span>
          : null
          }{
            (this.props.name && this.props.name === "beverage")
          ? <span className="unit"> CUPS</span>
          : null
          }{
            (this.props.name && this.props.name === "member")
          ? <span className="unit"> USERS</span>
          : null
          }
      </div>
    )
  }
}
