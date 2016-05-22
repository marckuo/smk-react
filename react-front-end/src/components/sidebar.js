import React, { Component } from 'react';
import style from '../stylesheets/style.css';
import Icon from './sidebar/icon';
import Value from './sidebar/value';
import Grid from 'react-bootstrap/lib/Grid';
import axios from 'axios';

export default class Sidebar extends Component {

  render() {
    return (
      <div className="col-xs-4">
        <row>
          <Icon className="temp" image={this.props.temp_img} />
            <Value className="temp" value={`${this.props.temp_val}°C`} />
          <Icon className="humid" image={this.props.humid_img} />
            <Value className="humid" value={`${this.props.humid_val}%`}/>
        </row>
        <row>
          <Icon className="beverage" image={this.props.beverage_img} />
            <Value className="beverage" value={`${this.props.beverage_val}`} />
          <Icon className="door" image={this.props.door_img} />
            <Value className="door" value={this.props.door_val} />
        </row>
        <row>
          <Icon />
          <div id="sketch"></div>
          <Icon />
          <Value />
        </row>
      </div>
    )
  }
}