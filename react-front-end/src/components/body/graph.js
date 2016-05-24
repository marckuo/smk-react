import React, { Component } from 'react';
import { render } from 'react-dom';
import Grid from 'react-bootstrap/lib/Grid';
import * as V from 'victory';

export default class Graph extends Component {

  render() {
    if (this.props.data !== null) {
      return (
        <div id='graph'>
        <V.VictoryChart>
          <V.VictoryAxis
          label="Time"
          style={{
            axis: {stroke: "black"},
            grid: {strokeWidth: 2},
            ticks: {stroke: "black"},
            tickLabels: {fontSize: 15, fill:"black"},
            axisLabel: {fill:"black"}

          }}
           standalone={false}/>
          <V.VictoryAxis dependentAxis
          label="Temperature"
          style={{
            axis: {stroke: "black"},
            grid: {strokeWidth: 2},
            ticks: {stroke: "black  "},
            tickLabels: {fontSize: 15, fill:"black"},
            axisLabel: {fill:"black"}
          }}
           domain={[0,40]} standalone={false}/>

          <V.VictoryLine 
          style={{
            data: {
              stroke: "red",
              strokeWidth: 3
            }
          }}
           data={this.props.data}
          />

        </V.VictoryChart>
        </div>
      );
    }
    else {
        return (
          <div>
          </div>
        );
    }
  }
}
