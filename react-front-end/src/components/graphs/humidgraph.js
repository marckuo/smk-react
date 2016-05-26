import React, { Component } from 'react';
import { render } from 'react-dom';
import Grid from 'react-bootstrap/lib/Grid';
import * as V from 'victory';

export default class HumidGraph extends Component {

  render() {
    var time = ""
    switch (this.props.time) {
      case "day":
        time = "TODAY"
        break;
      case "week":
        time = "WEEK"
        break;
      case "month":
        time = "MONTH"
        break;
    }

      return (
        <div id='graph'>               
        <V.VictoryChart>
          
          <V.VictoryAxis
          label= {time}
          style={{
            axis: {stroke: "#3670D2", strokeWidth: 3},
            grid: {strokeWidth: 2},
            ticks: {stroke: "#3670D2"},
            tickLabels: {fontSize: 15, fill:"#3670D2", fontFamily: "Roboto", fontWeight: "400"},
            axisLabel: {fontSize: 15, fill:"#3670D2", fontFamily: "Roboto", fontWeight: "400"}

          }}
          tickCount={0}
           standalone={false}/>
          <V.VictoryAxis dependentAxis
          label="HUMIDITY (%)"
          style={{
            axis: {stroke: "#3670D2", strokeWidth: 3},
            grid: {strokeWidth: 2},
            ticks: {stroke: "#3670D2"},
            tickLabels: {fontSize: 15, fill:"#3670D2", fontFamily: "Roboto", fontWeight: "400"},
            axisLabel: {fontSize: 15, fill:"#3670D2", fontFamily: "Roboto", fontWeight: "400"}
          }}
          // tickCount={4}
          // domain={[0,100]}
          standalone={false}/>

          <V.VictoryBar 
          style={{
            data: {
              // stroke: "#3670D2",
              // strokeWidth: 5,
              fill: "#3670D2"
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
