import React, { Component } from 'react';
import axios from 'axios';
import style from './stylesheets/style.css';
import Sidebar from './components/sidebar';
import Header from './components/header';
import Sound from './components/sound';
import Profile from './components/profile';
import Body from './components/body';

import io from 'socket.io-client';
import Grid from 'react-bootstrap/lib/Grid';
var socket = io('http://localhost:4000');

export default class App extends Component {
	constructor(props) {
    super(props);
		  this.state = {
		    temp_img: "temperature.svg",
		    humid_img: "humidity.svg",
		    door_img: "door.svg",
		    beverage_img: "coffee.svg",
        temp_data_array: [],
        humid_data_array: [],
        door_data_array: [],
        beverage_data_array: [],
        selected_sensor: null,
        selected_time: null,
        graph_data_array: null
		  }
  }

  _beverageApiCall = () => {
    let self= this;
    axios.get(`http://localhost:4000/api/last/beverage`)
    .then(function(res) {
      self.setState({
        beverage_val: res.data
      })
    })
  }

  _doorApiCall = () => {
    let self= this;
    axios.get(`http://localhost:4000/api/last/door`)
    .then(function(res) {
      self.setState({
        door_val: res.data
      })
    })
  }

  _humidApiCall = () => {
    let self= this;
    axios.get(`http://localhost:4000/api/last/humid`)
    .then(function(res) {
      self.setState({
        humid_val: res.data.value
      })
    })
  }

  _tempApiCall = () => {
    let self= this;
    axios.get(`http://localhost:4000/api/last/temp`)
    .then(function(res) {
      self.setState({
        temp_val: res.data.value
      })
    })
  }

  _setApiData = (sensor,time) => {
    console.log('api call happening');
    console.log(sensor,time);
    let self= this;
    axios.get(`http://localhost:4000/api/history/${time}/${sensor}`)
    .then(function(res) {
      console.log(res);
      const ApiRes = [];
      res.data.map(function(i){
        ApiRes.push({x:i.id,
                        y:parseInt(i.value)});
      })
      self.setState({
        graph_data_array: ApiRes
      })
    });
  }

  componentWillMount(){
  	this._tempApiCall();
    this._humidApiCall();
    this._beverageApiCall();
    this._doorApiCall();
		let self= this;

		socket.on('temp', function(data){
      // let last_id = self.state.temp_data_array.length;
      console.log("last id", last_id);
			console.log('this inside socket: ' + data);
   //    self._tempAllApiCall();
   //    self._setTempSelected();
      self.setState({
				temp_val: data,
   //      selected_sensor: "temp",
   //      graph_data_array: self.state.graph_data_array.concat([{x: last_id, y: parseInt(data)}])
			});

		});

		socket.on('humid', function(data){
			console.log('this inside socket: ' + data);
      self.setState({
				humid_val: data
			});


		});

		socket.on('beverage', function(data){
			console.log('this inside socket: ' + data);
			self.setState({
				beverage_val: data
			});

		});

		socket.on('door', function(data){
			console.log('this inside socket: ' + data);
			self.setState({
				door_val: data
			});

		});
  }

  render() {
		return (
      <div className="container col-xs-12">

        <div className="col-xs-12 col-sm-2">

          <div className="row">
            <div className="col-xs-12 full">
              <Header />
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <Profile />
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <Sound />
            </div>
          </div>

        </div>

        <div className="col-xs-12 col-sm-10">

          <div className="row top">
          <Sidebar {...this.state}
                  // _setTempSelected={this._setTempSelected}
                  // _setHumidSelected={this._setHumidSelected}
                  // _setBeverageSelected={this._setBeverageSelected}
                  // _setDoorSelected={this._setDoorSelected}
                  _setApiData={this._setApiData} />
          </div>

          <div className="row">
            <div className="col-xs-12 graph-container">
              <Body {...this.state}/>
            </div>
          </div>

        </div>
      </div>
			);
		}
	}
