import React, { Component } from 'react';
import style from '../stylesheets/style.css';
import Grid from 'react-bootstrap/lib/Grid';
import Graph from './body/graph';

export default class Body extends Component {
  
  render () {
    return (
      <div className="col-xs-8">
        <Graph data={this.props.temp_all} />
      </div>
    );
  }
}