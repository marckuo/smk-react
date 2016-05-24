import React, { Component } from 'react';
import style from '../../stylesheets/style.css';

export default class Buttons extends Component {
  constructor(props) {
    super(props);
  }

  _setApiTime = (time) => {
    this.props._setApiTime(time);
  }

  render() {
    return (
      <div className="row">
        <button className="smbutton" onClick = {this.props._setGraphDataNull.bind(this)}>NOGRAPH</button>
        <button className="smbutton" onClick = {this._setApiTime.bind(this, 'day')}>DAY</button>
        <button className="smbutton" onClick = {this._setApiTime.bind(this, 'week')}>WEEK</button>
        <button className="smbutton" onClick = {this._setApiTime.bind(this, 'month')}>MONTH</button>
      </div>
    )
  }
}

