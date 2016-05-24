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
        <button className="smbutton" onClick = {this._setApiTime.bind(this, 'day')}>D</button>
        <button className="smbutton" onClick = {this._setApiTime.bind(this, 'week')}>W</button>
        <button className="smbutton" onClick = {this._setApiTime.bind(this, 'month')}>M</button>
      </div>
    )
  }
}

