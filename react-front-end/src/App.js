import React, { Component } from 'react';
import axios from 'axios';
import style from './stylesheets/style.css';
import Bottom from './components/bottom';
import Top from './components/top';
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
        profile_img: "profile.svg",
        sound_img: "sound.svg",
        temp_data_array: [{x:0,y:0}],
        humid_data_array: [{x:0,y:0}],
        door_data_array: [{x:0,y:0}],
        beverage_data_array: [{x:0,y:0}],
        sound_data_array: [{x:0,y:0}],
        profile_data_array: [{x:0,y:0}],
        selected_sensor: null,
        selected_temp_time: null,
        selected_humid_time: null,
        selected_beverage_time: null,
        selected_door_time: null,
        selected_profile_time: null,
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

  _profileApiCall= () => {
    let self= this;
    axios.get(`http://localhost:4000/api/signed_in`)
    .then(function(res) {
      self.setState({
        profile_val: res.data
      })
    })
  }

  _setApiTempTime = (time="day") => {
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

  _setApiHumidTime = (time="day") => {
    // console.log('api call happening');
    // console.log(time);
    let self= this;
    axios.get(`http://localhost:4000/api/history/${time}/humid`)
    .then(function(res) {
      // console.log(res);
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

  _setApiBeverageTime = (time="day") => {
    // console.log('api call happening');
    // console.log(time);
    let self= this;
    axios.get(`http://localhost:4000/api/history/${time}/beverage`)
    .then(function(res) {
      // console.log(res);
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

  _setApiDoorTime = (time="day") => {
    // console.log('api call happening');
    // console.log(time);
    let self= this;
    axios.get(`http://localhost:4000/api/history/${time}/door`)
    .then(function(res) {
      // console.log(res);
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

  // _setApiProfileTime = (time="day") => {
  //   // console.log('api call happening');
  //   // console.log(time);
  //   let self= this;
  //   axios.get(`http://localhost:4000/api/history/${time}/profile`)
  //   .then(function(res) {
  //     // console.log(res);
  //     const ApiRes = [];
  //     res.data.map(function(i){
  //       ApiRes.push(i);
  //     })
  //     self.setState({
  //       selected_profile_time: time,
  //       profile_data_array: ApiRes
  //     })
  //   })
  // }

  componentWillMount(){
  	this._tempApiCall();
    this._humidApiCall();
    this._beverageApiCall();
    this._doorApiCall();
    this._profileApiCall();
    this._setApiTempTime();
    this._setApiHumidTime();
    this._setApiBeverageTime();
    this._setApiDoorTime();

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

		socket.on('sound', function(data){

		  var spectrumMap = data.map(function(num, index){
		   return {'x': index + 1, 'y': num};
		  });
			self.setState({
				sound_data_array: spectrumMap
			});
		});

    socket.on('member', function(data){
      console.log('this inside socket: ' + data);
      self.setState({
        profile_val: data
      });
    });

	}

  render() {
		return (
      <div>
        <div>
          <Top {...this.state} />
        </div>
        <div>
          <Bottom {...this.state}
          _setApiTempTime={this._setApiTempTime}
          _setApiHumidTime={this._setApiHumidTime}
          _setApiBeverageTime={this._setApiBeverageTime}
          _setApiDoorTime={this._setApiDoorTime}
          // _setApiProfileTime={this._setApiProfileTime} 
          />
        </div>
      </div>

			);
		}
	}
