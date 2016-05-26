import React, { Component } from 'react';
import style from '../stylesheets/style.css';
import Grid from 'react-bootstrap/lib/Grid';
import Header from './top/header';

export default class Top extends Component {

  render() {
    return (
      <div>
        <div className="col-xs-12 logodiv bluebg">
          <Header />
        </div>
      </div>
    )
  }
}