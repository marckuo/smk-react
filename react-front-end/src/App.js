import React, { Component } from 'react';
import axios from 'axios';
import style from './stylesheets/style.css';
import Sidebar from './components/sidebar';
import Header from './components/header';
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
        temp_data_array: [],
        humid_data_array: [],
        door_data_array: [],
        beverage_data_array: [],
        selected_sensor: null,
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

  _beverageAllApiCall = () => {
    let self= this;
    axios.get(`http://localhost:4000/api/all/beverage`)
    .then(function(res) {
      self.setState({
        beverage_all: res.data  
      })
    })
  }

  _doorAllApiCall = () => {
    let self= this;
    axios.get(`http://localhost:4000/api/all/door`)
    .then(function(res) {
      self.setState({
        door_all: res.data
      })
    })
  }

  _humidAllApiCall = () => {
    let self= this;
    axios.get(`http://localhost:4000/api/all/humid`)
    .then(function(res) {
      const HumidAllApiRes = [];
      res.data.map(function(i){
        HumidAllApiRes.push({x:i.id,
                        y:parseInt(i.value)});
      })
        self.setState({
          humid_data_array: HumidAllApiRes
        })
      });
  }

  _tempAllApiCall = () => {
    console.log(this.state.selected_sensor);
    var sensor = this.state.selected_sensor;
    console.log(this.state.selected_sensor);
    let self= this;
    axios.get(`http://localhost:4000/api/all/temp`)
    .then(function(res) {
      const TempAllApiRes = [];
      res.data.map(function(i){
        TempAllApiRes.push({x:i.id,
                        y:parseInt(i.value)});
      })
        self.setState({
          temp_data_array: TempAllApiRes
        })
      });
  }

  _setTempSelected = () => {
    this.setState({
      selected_sensor: "temp",
      graph_data_array: this.state.temp_data_array
    })
  }

  _setHumidSelected = () => {
    this.setState({
      selected_sensor: "humid",
      graph_data_array: this.state.humid_data_array
    })
  }

  _setBeverageSelected = () => {
    this.setState({
      selected_sensor: "beverage",
      graph_data_array: this.state.beverage_data_array
    })
  }

  _setDoorSelected = () => {
    this.setState({
      selected_sensor: "door",
      graph_data_array: this.state.door_data_array
    })
  }

  _setGraphData = () => {
    this.setState({

    })
  }

  componentWillMount(){
  	this._tempApiCall();
    this._tempAllApiCall();
    this._humidApiCall();
  	this._humidAllApiCall();
    this._beverageApiCall();
    this._beverageAllApiCall();
    this._doorApiCall();
    this._doorAllApiCall();

		let self= this;

		socket.on('temp', function(data){
      let last_id = self.state.temp_data_array.length;
      console.log("last id", last_id);
			console.log('this inside socket: ' + data);
      self._tempAllApiCall();
      self._setTempSelected();
      self.setState({
				temp_val: data,
        selected_sensor: "temp",
        graph_data_array: self.state.graph_data_array.concat([{x: last_id, y: parseInt(data)}])
			});
   
		});

		socket.on('humid', function(data){
			console.log('this inside socket: ' + data);
      self.setState({
				humid_val: data
			});
      self._humidAllApiCall();
      self._setHumidSelected();
		});

		socket.on('beverage', function(data){
			console.log('this inside socket: ' + data);
			self.setState({
				beverage_val: data
			});
      self._beverageAllApiCall();
		});

		socket.on('door', function(data){
			console.log('this inside socket: ' + data);
			self.setState({
				door_val: data
			});
      self._doorAllApiCall();
		});
  }

  render() {
		return (
			<grid>
        <row className="show-grid">
  		    <Header />
        </row>
        <row className="show-grid">
          <Sidebar {...this.state} 
            _setTempSelected={this._setTempSelected}
            _setHumidSelected={this._setHumidSelected} 
            _setBeverageSelected={this._setBeverageSelected} 
            _setDoorSelected={this._setDoorSelected} />
          <Body {...this.state} />
        </row>
			</grid>
			);
		}
	}
