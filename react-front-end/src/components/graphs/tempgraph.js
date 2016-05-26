import React, { Component } from 'react';
import { render } from 'react-dom';
import Grid from 'react-bootstrap/lib/Grid';
import * as V from 'victory';

export default class TempGraph extends Component {



  render() {
    var time = ""
    switch (this.props.time) {
      case "day":
        time = "HOURS"
        break;
      case "week":
        time = "DAYS"
        break;
      case "month":
        time = "DAYS"
        break;
    }
     
      return (
        <div id='graph'>               
          <V.VictoryChart>
          
          <V.VictoryAxis
          label= {time}
          style={{
            axis: {stroke: "#EC334D"},
            grid: {strokeWidth: 2},
            ticks: {stroke: "#EC334D"},
            tickLabels: {fontSize: 15, fill:"#EC334D"},
            axisLabel: {fill:"#EC334D"}

          }}
          tickCount={0}
           standalone={false}/>
          <V.VictoryAxis dependentAxis
          label="Temperature (°C)"
          style={{
            axis: {stroke: "#EC334D"},
            grid: {strokeWidth: 2},
            ticks: {stroke: "#EC334D"},
            tickLabels: {fontSize: 15, fill:"#EC334D"},
            axisLabel: {fontSize:15, fill:"#EC334D"}
          }}
            tickCount={5}
           domain={[0,40]} standalone={false}/>

          <V.VictoryBar
          
          style={{
            data: {
              // stroke: "#EC334D",
              // strokeWidth: 5,
              fill: "#EC334D",
              label: {size: 20},
              symbol: {size:20}

            }

          }}
          data={this.props.data}
          // labels={this.props.data.y}
          // symbol={"circle"}
          // size={8}
           // symbol={"Square"}
           animate={{duration:1500}}
            
          
          />
        </V.VictoryChart>
        </div>
      );
    
  }
}

        