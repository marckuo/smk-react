import React, { Component } from 'react';
import style from '../stylesheets/style.css';
import Icon from './sidebar/icon';
import Logo from './sidebar/logo';
import Value from './sidebar/value';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="row"><Logo /></div>
        <div className="row"><Icon className="temp" /><Value /></div>
        <div className="row"><Icon className="humid" /><Value /></div>
        <div className="row"><Icon /><Value /></div>
        <div className="row"><Icon /><Value /></div>
        <div className="row"><Icon /><Value /></div>
        <div className="row"><Icon /><Value /></div>
      </div>
    )
  }
}