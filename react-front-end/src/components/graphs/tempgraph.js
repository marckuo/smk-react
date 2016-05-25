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

    console.log(this.props.data);

    if (this.props.data !== null) {
      return (
        <div id='graph'>               
        <V.VictoryChart>
          
          <V.VictoryAxis
          label= {time}
          style={{
            axis: {stroke: "white"},
            grid: {strokeWidth: 2},
            ticks: {stroke: "white"},
            tickLabels: {fontSize: 15, fill:"white"},
            axisLabel: {fill:"white"}

          }}
           standalone={false}/>
          <V.VictoryAxis dependentAxis
          label="Temperature"
          style={{
            axis: {stroke: "white"},
            grid: {strokeWidth: 2},
            ticks: {stroke: "white"},
            tickLabels: {fontSize: 15, fill:"white"},
            axisLabel: {fill:"white"}
          }}
           domain={[0,40]} standalone={false}/>

          <V.VictoryLine 
          style={{
            data: {
              stroke: "white",
              strokeWidth: 2,
              fill: "#2761CE"
            }
          }}
           data={this.props.data}

           animate={{
            onEnter: {
              duration: 500,
              before: () => ({
                y: 0,
                fill: "white"
              })
            }
          }}
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
