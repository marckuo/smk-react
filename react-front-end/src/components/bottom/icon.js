import React, { Component } from 'react';
import style from '../../stylesheets/style.css';

export default class Icon extends Component {

  render() {

    let style = {
    fill: 'white'
  };

    return (
      <div className="col-xs-6 sbs svgicons">
        <img style={style} src={`/src/images/icons/${this.props.image}`} height="60px" width="60px"/>
      </div>
    )
  }
}
