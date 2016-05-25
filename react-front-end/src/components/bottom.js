import React, { Component } from 'react';
import style from '../stylesheets/style.css';
import Icon from './bottom/icon';
import Value from './bottom/value';
import Buttons from './bottom/buttons';
import Grid from 'react-bootstrap/lib/Grid';
import axios from 'axios';
import TempGraph from './graphs/tempgraph'
import HumidGraph from './graphs/humidgraph'
import BeverageGraph from './graphs/beveragegraph'
import DoorGraph from './graphs/doorgraph'

export default class Sidebar extends Component {  
  
  // _setTempDataNull = () => {
  //   this.props._setGraphDataNull("temp")
  // }
  // _setHumidDataNull = () => {
  //   this.props._setGraphDataNull("humid")
  // }
  // _setBeverageDataNull = () => {
  //   this.props._setGraphDataNull("beverage")
  // }
  //  _setDoorDataNull = () => {
  //   this.props._setGraphDataNull("door")
  // }
  // _setApiHumidTime = (time) => {
  //   this.props._setApiData('humid', time)
  // }

  // _setApiBeverageTime = (time) => {
  //   this.props._setApiData('beverage', time)
  // }

  // _setApiDoorTime = (time) => {
  //   this.props._setApiData('door', time)
  // }

  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-3 bluebg-dark">
          <div className="button">
            <div className="row h-center v-center">
              <div>
                <Icon image={this.props.temp_img} />
              </div>
              <div>
                <Value value={`${this.props.temp_val}°C`} />
              </div>
            </div>
            <div className="row">
              <Buttons _setApiTime = {this.props._setApiTempTime} />
            </div>
            <TempGraph time={this.props.select_temp_time} data={this.props.temp_data_array} />
          </div>
        </div>
            
        <div className="col-xs-12 col-sm-3 bluebg-light">
          <div className="button">
            <div className="row h-center v-center">
              <div>
                <Icon image={this.props.humid_img} />
              </div>
              <div>
                <Value value={`${this.props.humid_val}%`}/>
              </div>
            </div>
            <div className="row">
              <Buttons _setApiTime = {this.props._setApiHumidTime} />
            </div>
            <HumidGraph time={this.props.select_humid_time} data={this.props.humid_data_array} />
          </div>
        </div>

        <div className="col-xs-12 col-sm-3 bluebg-dark">
          <div className="button">
            <div className="row h-center v-center">
              <div>
                <Icon image={this.props.beverage_img} />
              </div>
              <div>
                <Value value={`${this.props.beverage_val}`} />
              </div>
            </div>
            <div className="row">
              <Buttons _setApiTime = {this.props._setApiBeverageTime} />
            </div>
            <BeverageGraph time={this.props.select_beverage_time} data={this.props.beverage_data_array} />
          </div>
        </div>

        <div className="col-xs-12 col-sm-3 bluebg-light">
          <div className="button">
            <div className="row h-center v-center">
              <div>
                <Icon image={this.props.door_img} />
              </div>
              <div>
                <Value value={`${this.props.door_val}`} />
              </div>
            </div>
            <div className="row">
              <Buttons _setApiTime = {this.props._setApiDoorTime} />
            </div>
            <DoorGraph time={this.props.select_door_time} data={this.props.door_data_array} />
          </div>
        </div>
      </div>
    )
  }
}