import React, { Component } from 'react';
import axios from 'axios';
import style from './stylesheets/style.css';
import Bottom from './components/bottom';
import Top from './components/top';
import io from 'socket.io-client';
import Grid from 'react-bootstrap/lib/Grid';
var socket = io('https://quiet-castle-31566.herokuapp.com');

export default class App extends Component {
	constructor(props) {
    super(props);
		  this.state = {
        temp_img: "temperature_.svg",
		    humid_img: "humidity_.svg",
		    door_img: "door_.svg",
		    beverage_img: "coffee_.svg",
        member_img: "member_.svg",
        sound_img: "sound_.svg",
        temp_data_array: [{x:0,y:0}],
        humid_data_array: [{x:0,y:0}],
        door_data_array: [{x:0,y:0}],
        beverage_data_array: [{x:0,y:0}],
        sound_data_array: [{x:0,y:1},{x:1,y:2},{x:2,y:3},{x:3,y:4},{x:4,y:5},{x:5,y:6},{x:6,y:7},{x:7,y:6},{x:8,y:5},{x:9,y:4},{x:10,y:3},{x:11,y:2},{x:12,y:1},],
        member_data_array: [{x:0,y:0}],
        selected_sensor: null,
        selected_temp_time: null,
        selected_humid_time: null,
        selected_beverage_time: null,
        selected_door_time: null,
        selected_member_time: null
		  }
  }

  _beverageApiCall = () => {
    let self= this;
    axios.get(`https://quiet-castle-31566.herokuapp.com/api/last/beverage`)
    .then(function(res) {
      self.setState({
        beverage_val: res.data
      })
    })
  }

  _doorApiCall = () => {
    let self= this;
    axios.get(`https://quiet-castle-31566.herokuapp.com/api/last/door`)
    .then(function(res) {
      self.setState({
        door_val: res.data
      })
    })
  }

  _humidApiCall = () => {
    let self= this;
    axios.get(`https://quiet-castle-31566.herokuapp.com/api/last/humid`)
    .then(function(res) {
      self.setState({
        humid_val: res.data.value
      })  
    })
  }

  _tempApiCall = () => {
    let self= this;
    axios.get(`https://quiet-castle-31566.herokuapp.com/api/last/temp`)
    .then(function(res) {
      self.setState({
        temp_val: res.data.value
      })
    })
  }

  _memberApiCall= () => {
    let self= this;
    axios.get(`https://quiet-castle-31566.herokuapp.com/api/signed_in`)
    .then(function(res) {
      self.setState({
        member_val: res.data
      })
    })
  }

  _setApiTempTime = (time="day") => {
    console.log('api call happening');
    console.log(time);
    let self= this;
    axios.get(`https://quiet-castle-31566.herokuapp.com/api/history/${time}/temp`)
    .then(function(res) {
      // console.log(res);
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
    axios.get(`https://quiet-castle-31566.herokuapp.com/api/history/${time}/humid`)
    .then(function(res) {
      // console.log(res);
      const ApiRes = [];
      res.data.map(function(i){
        // console.log("i is",i)
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
    axios.get(`https://quiet-castle-31566.herokuapp.com/api/history/${time}/beverage`)
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
    axios.get(`https://quiet-castle-31566.herokuapp.com/api/history/${time}/door`)
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



  _setApiMemberTime = () => {
  //   // console.log('api call happening');
  //   // console.log(time);
    let self= this;
      axios.get(`https://quiet-castle-31566.herokuapp.com/api/signed_in`)
    .then(function(res) {
      const ApiRes = [];
        ApiRes.push({x:0,y:res.data});
      
      self.setState({
        member_data_array: ApiRes
      })
      console.log(self.state.member_data_array)
    })
  }

  componentWillMount(){
  	this._tempApiCall();
    this._humidApiCall();
    this._beverageApiCall();
    this._doorApiCall();
    this._memberApiCall();
    this._setApiTempTime();
    this._setApiHumidTime();
    this._setApiBeverageTime();
    this._setApiDoorTime();
    this._setApiMemberTime();

		let self= this;

		socket.on('temp', function(data){
      let last_temp_id = self.state.temp_data_array.length;
			// console.log('this inside socket: ' + data);
   //    self._tempAllApiCall();
   //    self._setTempSelected();
      self.setState({
				temp_val: data,
        temp_data_array: self.state.temp_data_array.concat([{x: last_temp_id+1, y: parseInt(data)}])
			});
		});

		socket.on('humid', function(data){
      let last_humid_id = self.state.humid_data_array.length;
			// console.log('this inside socket: ' + data);
      self.setState({
				humid_val: data,
        humid_data_array: self.state.humid_data_array.concat([{x: last_humid_id+1, y: parseInt(data)}])
			});
		});

		socket.on('beverage', function(data){
			// console.log('this inside socket: ' + data);
			self.setState({
				beverage_val: data
			});
		});

		socket.on('door', function(data){
			// console.log('this inside socket: ' + data);
			self.setState({
				door_val: data
			});

		});

		socket.on('sound', function(data){

		  // var spectrumMap = data.map(function(num, index){
		  //  return {'x': index + 1, 'y': num};
		  // });
			self.setState({
				sound_data_array: data
			});
		});

    socket.on('member', function(data){
      console.log('this inside socket: ' + data);
      self.setState({
        member_val: data,
        member_data_array: [{x: 0, y: data }]
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
