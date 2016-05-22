import React, { Component } from 'react';
import { render } from 'react-dom';
import Grid from 'react-bootstrap/lib/Grid';
import * as V from 'victory';

export default class Graph extends Component {

  render() {

    console.log(this.props.temp_all);

    return (
      <div id='graph'>
      <V.VictoryChart>
        
        <V.VictoryAxis
        style={{
          axis: {stroke: "black"},
          grid: {strokeWidth: 2},
          ticks: {stroke: "red"},
          tickLabels: {fontSize: 12},
          axisLabel: {fontsize: 16},
          label: {stroke: "black"}
        }}
        label="Time" standalone={false}/>
        <V.VictoryAxis dependentAxis
        style={{
          axis: {stroke: "black"},
          grid: {strokeWidth: 2},
          ticks: {stroke: "red"},
          tickLabels: {fontSize: 12},
          axisLabel: {fontsize: 16}
        }}
        label="Temperature" domain={[0,40]} standalone={false}/>

        <V.VictoryLine 
         data={[
          {x: 0, y: 1},
          {x: 1, y: 3},
          {x: 2, y: 2},      
          {x: 3, y: 4},
          {x: 4, y: 3},
          {x: 5, y: 5}
        ]}
        />

      </V.VictoryChart>
      </div>
    );
  }
}