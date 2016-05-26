import React, { Component } from 'react';
import { render } from 'react-dom';
import Grid from 'react-bootstrap/lib/Grid';
import * as V from 'victory';

export default class HumidGraph extends Component {

  render() {
    var time = ""
    switch (this.props.time) {
      case "day":
        time = "Today"
        break;
      case "week":
        time = "This Week"
        break;
      case "month":
        time = "This Month"
        break;
    }

      return (
        <div id='graph'>               
        <V.VictoryChart>
          
          <V.VictoryAxis
          label= {time}
          style={{
            axis: {stroke: "#3670D2"},
            grid: {strokeWidth: 2},
            ticks: {stroke: "#3670D2"},
            tickLabels: {fontSize: 15, fill:"#3670D2"},
            axisLabel: {fill:"#3670D2"}

          }}
          tickCount={0}
           standalone={false}/>
          <V.VictoryAxis dependentAxis
          label="Humidity (%)"
          style={{
            axis: {stroke: "#3670D2"},
            grid: {strokeWidth: 2},
            ticks: {stroke: "#3670D2"},
            tickLabels: {fontSize: 15, fill:"#3670D2"},
            axisLabel: {fontSize: 15, fill:"#3670D2"}
          }}
          // tickCount={4}
          // domain={[0,100]}
          standalone={false}/>

          <V.VictoryLine 
          style={{
            data: {
              stroke: "#3670D2",
              strokeWidth: 5,
              // fill: "#3670D2"
            }
          }}
           data={this.props.data}

           animate={{duration:500}}
          />



        </V.VictoryChart>
        </div>
      );
  }
}
