import React, { Component } from 'react';
import style from './../../../stylesheets/style.css';

export default class Icon extends Component {

  render() {

    let style = {
    fill: 'white'
  };

    return (
      <div className="col-xs-6 h-center v-center">
        <img style={style} src={`/src/images/icons/${this.props.img}`} height="60px" width="60px"/>
      </div>
    )
  }
}
