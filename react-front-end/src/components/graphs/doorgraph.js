import React, { Component } from 'react';
import { render } from 'react-dom';
import Grid from 'react-bootstrap/lib/Grid';
import * as V from 'victory';

export default class DoorGraph extends Component {

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
      <div>
        <V.VictoryChart>
          
          <V.VictoryAxis
          label={time}
          style={{
            axis: {stroke: "#0BAC45"},
            grid: {strokeWidth: 2},
            ticks: {stroke: "#0BAC45"},
            tickLabels: {fontSize: 15, fill:"#0BAC45"},
            axisLabel: {fill:"#0BAC45"}
          }}
          tickCount={0}
           standalone={false}/>
          <V.VictoryAxis dependentAxis
          label="Door (# of times opened)"
          style={{
            axis: {stroke: "#0BAC45"},
            grid: {strokeWidth: 2},
            ticks: {stroke: "#0BAC45"},
            tickLabels: {fontSize: 15, fill:"#0BAC45"},
            axisLabel: {fontSize: 15, fill:"#0BAC45"}
          }}
          tickCount={0}
           domain={[0,40]} standalone={false}/>

          <V.VictoryBar
          style={{
            data: {
              fill: "#0BAC45"
            }
          }}
           data={this.props.data}

           animate={{
            onEnter: {
              duration: 100,
              before: () => ({
                y: 0,
                fill: "#0BAC45"
              })
            }
          }}
          />

        </V.VictoryChart>
      </div>
    );
  }
}
