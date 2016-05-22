import React, { Component } from 'react';
import axios from 'axios';
import style from './stylesheets/style.css';
import Sidebar from './components/sidebar';
import io from 'socket.io-client';
var socket = io('http://localhost:4000');

export default class App extends Component {
	constructor(props) {
    super(props);
		  this.state = {
		    temp_img: "temp.png",
		    humid_img: "humid.png",
		    door_img: "door.png",
		    beverage_img: "beverage.png"
		  }
  }


  _beverageApiCall = () => {
    let self= this;
    axios.get(`http://localhost:4000/api/last/beverage`)
    .then(function(res) {
      self.setState({
        beverage_val: res.data.value
      })
    })
  }

  _doorApiCall = () => {
    let self= this;
    axios.get(`http://localhost:4000/api/last/door`)
    .then(function(res) {
      self.setState({
        door_val: res.data.value
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
			console.log("api temp", res)
      self.setState({
        temp_val: res.data.value
      })
    })
  }

	// _tempSocket = () => {
	// 	let self= this;
	// 	socket.on('temp', function(data){
	// 		console.log('this inside socket: ' + data);
	// 		self.setState({
	// 			temp_val: data.value
	// 		});
	// 	});
	// }

  componentWillMount(){
  	this._beverageApiCall();
  	this._doorApiCall();
  	this._humidApiCall();
  	this._tempApiCall();
		// this._tempSocket();
		let self= this;

		socket.on('temp', function(data){
			console.log('this inside socket: ' + data);
			self.setState({
				temp_val: data
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
				sound_val: spectrumMap
			});
		});

	}

  render() {
		return (
			<div className="container">
			<Sidebar {...this.state} />
			</div>
			);
		}
	}
