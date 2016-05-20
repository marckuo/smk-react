import React, { Component } from 'react';
import axios from 'axios';
import style from './stylesheets/style.css';
import Sidebar from './components/sidebar';

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
      self.setState({
        temp_val: res.data.value
      })
    })
  }

  componentWillMount(){
  	this._beverageApiCall();
  	this._doorApiCall();
  	this._humidApiCall();
  	this._tempApiCall();
  }

  render() {
		return (
			<div className="container">
			<Sidebar {...this.state} />
			</div>
			);
		}
	}