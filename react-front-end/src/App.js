import React, { Component } from 'react';
import axios from 'axios';
import style from './stylesheets/style.css';
import Sidebar from './components/sidebar';

export default class App extends Component {
  render() {
		return (
			<div className="container">
			<Sidebar />
			</div>
			);
		}
	}