import React, { Component } from 'react';
import style from '../../../stylesheets/style.css';

export default class Logo extends Component {
  render() {
    return (
      <div className="v-center h-center">
      	<img id="logo" src="src/images/smk_blue.png"/>
      </div>
    )
  }
}