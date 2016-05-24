import React, { Component } from 'react';
import style from '../stylesheets/style.css';
import Icon from './sidebar/icon';
import Value from './sidebar/value';
import Buttons from './sidebar/buttons'
import Grid from 'react-bootstrap/lib/Grid';
import axios from 'axios';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  // tempSelected = () => {
  //   this.props._setTempSelected();
  // }

  // humidSelected = () => {
  //   this.props._setHumidSelected();
  // }

  // beverageSelected = () => {
  //   this.props._setBeverageSelected();
  // }

  // doorSelected = () => {
  //   this.props._setDoorSelected();
  // }
  
  _setApiTempTime = (time) => {
    this.props._setApiData('temp', time)
  }

  _setApiHumidTime = (time) => {
    this.props._setApiData('humid', time)
  }

  _setApiBeverageTime = (time) => {
    this.props._setApiData('beverage', time)
  }

  _setApiDoorTime = (time) => {
    this.props._setApiData('door', time)
  }

  render() {
    return (
      <div>
        <div className="col-xs-6 col-sm-3 topbtn">
          <div className="button">
            <Icon image={this.props.temp_img} />
            <Value value={`${this.props.temp_val}°C`} />
            <Buttons _setApiTime = {this._setApiTempTime} />
          </div>
        </div>
            
        <div className="col-xs-6 col-sm-3 topbtn">
          <div className="button">
            <Icon image={this.props.humid_img} />
            <Value value={`${this.props.humid_val}%`}/>
            <Buttons _setApiTime = {this._setApiHumidTime}/>
          </div>
        </div>

        <div className="col-xs-6 col-sm-3 topbtn">
          <div className="button">
            <Icon image={this.props.beverage_img} />
            <Value value={`${this.props.beverage_val}`} />
            <Buttons _setApiTime = {this._setApiBeverageTime}/>
          </div>
        </div>

        <div className="col-xs-6 col-sm-3 topbtn">
          <div className="button">
            <Icon image={this.props.door_img} />
            <Value value={`${this.props.door_val}`} />
            <Buttons _setApiTime = {this._setApiDoorTime}/>
          </div>
        </div>
      </div>
    )
  }
}