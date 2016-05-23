import React, { Component } from 'react';
import style from '../stylesheets/style.css';
import Icon from './sidebar/icon';
import Value from './sidebar/value';
import Grid from 'react-bootstrap/lib/Grid';
import axios from 'axios';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  tempSelected = () => {
    this.props._setTempSelected();
  }

  humidSelected = () => {
    this.props._setHumidSelected();
  }

  beverageSelected = () => {
    this.props._setBeverageSelected();
  }

  doorSelected = () => {
    this.props._setDoorSelected();
  }

  render() {
    return (
      <div className="col-xs-4">
        <row>
          <div className="temp" onClick={this.tempSelected}>
            <Icon image={this.props.temp_img} />
              <Value value={`${this.props.temp_val}°C`} />
          </div>
          <div className="humid" onClick={this.humidSelected}>
            <Icon image={this.props.humid_img} />
              <Value value={`${this.props.humid_val}%`}/>
          </div>
        </row>
        <row>
          <div className="beverage" onClick={this.beverageSelected}>
            <Icon image={this.props.beverage_img} />
              <Value value={`${this.props.beverage_val}`} />
          </div>
          <div className="door" onClick={this.doorSelected}>
            <Icon image={this.props.door_img} />
            <Value value={this.props.door_val} />
          </div>
        </row>
        <row>
          {this.props.selected_sensor}
          <Icon />
          <div id="sketch"></div>
          <Icon />
          <Value />
        </row>
      </div>
    )
  }
}