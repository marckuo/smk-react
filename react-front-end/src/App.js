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
		    temp_img: "temp.png",
		    humid_img: "humid.png",
		    door_img: "door.png",
		    beverage_img: "beverage.png",
        temp_data_array: null,
        humid_data_array: null,
        door_data_array: null,
        beverage_data_array: null,
        selected_sensor: null,
        selected_temp_time: null,
        selected_humid_time: null,
        selected_beverage_time: null,
        selected_door_time: null,
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

  _setApiTempTime = (time) => {
    console.log('api call happening');
    console.log(time);
    let self= this;
    axios.get(`http://localhost:4000/api/history/${time}/temp`)
    .then(function(res) {
      console.log(res);
      const ApiRes = [];
      res.data.map(function(i){
        ApiRes.push(i);
      })
      self.setState({
        selected_temp_time: time,
        temp_data_array: ApiRes
      })
    })
  }

  _setApiHumidTime = (time) => {
    console.log('api call happening');
    console.log(time);
    let self= this;
    axios.get(`http://localhost:4000/api/history/${time}/humid`)
    .then(function(res) {
      console.log(res);
      const ApiRes = [];
      res.data.map(function(i){
        ApiRes.push(i);
      })
      self.setState({
        selected_humid_time: time,
        humid_data_array: ApiRes
      })
    })
  }

  _setApiBeverageTime = (time) => {
    console.log('api call happening');
    console.log(time);
    let self= this;
    axios.get(`http://localhost:4000/api/history/${time}/beverage`)
    .then(function(res) {
      console.log(res);
      const ApiRes = [];
      res.data.map(function(i){
        ApiRes.push(i);
      })
      self.setState({
        selected_beverage_time: time,
        beverage_data_array: ApiRes
      })
    })
  }

  _setApiDoorTime = (time) => {
    console.log('api call happening');
    console.log(time);
    let self= this;
    axios.get(`http://localhost:4000/api/history/${time}/door`)
    .then(function(res) {
      console.log(res);
      const ApiRes = [];
      res.data.map(function(i){
        ApiRes.push(i);
      })
      self.setState({
        selected_door_time: time,
        door_data_array: ApiRes
      })
    })
  }

  _setGraphDataNull = (sensor) => {
    switch(sensor) {
      case "temp":
        this.setState({
          temp_data_array: null
        })
        break;
      case "humid":
        this.setState({
          humid_data_array: null
        })
        break;
      case "beverage":
        this.setState({
          beverage_data_array: null
        })
        break;
      case "door":
        this.setState({
          door_data_array: null
        })
        break;
    }
  }

  componentWillMount(){
  	this._tempApiCall();
    this._humidApiCall();
    this._beverageApiCall();
    this._doorApiCall();
		let self= this;

		socket.on('temp', function(data){
      // let last_id = self.state.temp_data_array.length;
      // console.log("last id", last_id);
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
        
        <div className="col-xs-12 col-sm-3">
          
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

        <div className="col-xs-12 col-sm-9">
          
          <div className="row top">
          <Sidebar {...this.state}
            _setApiTempTime={this._setApiTempTime}
            _setApiHumidTime={this._setApiHumidTime}
            _setApiBeverageTime={this._setApiBeverageTime}
            _setApiDoorTime={this._setApiDoorTime}
            _setGraphDataNull={this._setGraphDataNull} />
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
