import React, { Component } from 'react';
import style from '../stylesheets/style.css';
import Icon from './sidebar/icon';
import Logo from './sidebar/logo';
import Value from './sidebar/value';
import Sound from './sidebar/sound';
import axios from 'axios';

export default class Sidebar extends Component {

  render() {
    return (
      <div className="sidebar">
        <div className="row"><Logo /></div>
        <div className="row">
          <Icon className="temp" image={this.props.temp_img} />

            <Value value={`${this.props.temp_val}°C`} />
        </div>
        <div className="row">
          <Icon className="humid" image={this.props.humid_img} />
            <Value value={`${this.props.humid_val}%`}/>

        </div>
        <div className="row">
          <Icon className="beverage" image={this.props.beverage_img} />
            <Value value={this.props.beverage_val} />
        </div>
        <div className="row">
          <Icon className="door" image={this.props.door_img} />
            <Value value={this.props.door_val} />
        </div>
        <div className="row">
          <Icon />
            <Sound value={this.props.sound_val}/>
        </div>
        <div className="row">
          <Icon />
          <Value />
        </div>
      </div>
    )
  }
}
