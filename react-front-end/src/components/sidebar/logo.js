import React, { Component } from 'react';
import style from '../../stylesheets/style.css';
import Grid from 'react-bootstrap/lib/Grid';

export default class Logo extends Component {
  

  render() {
    return (
      <div className="logo col-xs-4">
      	<img id="logo" src="src/images/smk_blue.png"/>
      </div>
    )
  }
}