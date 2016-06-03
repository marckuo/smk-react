import React, { Component } from 'react';
import style from '../../stylesheets/style.css';
import Grid from 'react-bootstrap/lib/Grid';
import Logo from './header/logo';

export default class Header extends Component {

  render() {
    return (
      <div className="logo">
        <Logo />
      </div>
    )
  }
}