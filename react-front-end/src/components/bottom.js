import React, { Component } from 'react';
import style from '../stylesheets/style.css';
import Grid from 'react-bootstrap/lib/Grid';
import Sensor from './bottom/sensor';

export default class Bottom extends Component {  
  
  constructor(props) {
    super(props);
      this.state = {
        temp_name: "temp",
        humid_name:"humid",
        beverage_name:"beverage",
        door_name:"door",
        member_name:"member",
        sound_name:"sound"
      }
    }

  render() {
    return (
      <div className="sensor-container"> 
        <div className="sensor">
          <div className="sensor-bg-yellow">
            <Sensor img={this.props.member_img} val={this.props.member_val} name={this.state.member_name} data={this.props.member_data_array} />
          </div>
        </div>

        <div className="sensor">
          <div className="sensor-bg-purple">
            <Sensor img={this.props.sound_img} name={this.state.sound_name} data={this.props.sound_data_array} />
          </div>
        </div>

        <div className="sensor">
          <div className="sensor-bg-red">
            <Sensor img={this.props.temp_img} val={this.props.temp_val} name={this.state.temp_name}  _setApiTime = {this.props._setApiTempTime} time={this.props.selected_temp_time} data={this.props.temp_data_array} />
          </div>
        </div>
                
        <div className="sensor">
          <div className="sensor-bg-blue">
            <Sensor img={this.props.humid_img} val={this.props.humid_val} name={this.state.humid_name} _setApiTime = {this.props._setApiHumidTime} time={this.props.selected_humid_time} data={this.props.humid_data_array} />
          </div>
        </div>
       
       <div className="sensor pink">
          <div className="sensor-bg-pink">
            <Sensor img={this.props.beverage_img} val={this.props.beverage_val} name={this.state.beverage_name} _setApiTime = {this.props._setApiBeverageTime} time={this.props.selected_beverage_time} data={this.props.beverage_data_array} />
          </div>
        </div>
        
        <div className="sensor">
          <div className="sensor-bg-green">
            <Sensor img={this.props.door_img} val={this.props.door_val} name={this.state.door_name} _setApiTime = {this.props._setApiDoorTime} time={this.props.selected_door_time} data={this.props.door_data_array} />
          </div>
        </div>
    </div>
    )
  }
}

// _setApiTime = {this.props._setApiMemberTime} time={this.props.selected_member_time}