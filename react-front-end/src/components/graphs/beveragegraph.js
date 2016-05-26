import React, { Component } from 'react';
import { render } from 'react-dom';
import Grid from 'react-bootstrap/lib/Grid';
import * as V from 'victory';

export default class BeverageGraph extends Component {

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
            axis: {stroke: "#E96294"},
            grid: {strokeWidth: 2},
            ticks: {stroke: "#E96294"},
            tickLabels: {fontSize: 15, fill:"#E96294"},
            axisLabel: {fill:"#E96294"}
          }}
          tickCount={0}
           standalone={false}/>
          <V.VictoryAxis dependentAxis
          label="Beverages (# of cups)"
          style={{
            axis: {stroke: "#E96294"},
            grid: {strokeWidth: 2},
            ticks: {stroke: "#E96294"},
            tickLabels: {fontSize: 15, fill:"#E96294"},
            axisLabel: {fontSize: 15, fill:"#E96294"}
          }}
          tickCount={0}
           domain={[0,40]} standalone={false}/>

          <V.VictoryBar
          style={{
            data: {
              fill: "#E96294"
            }
          }}
           data={this.props.data}

           animate={{
            onEnter: {
              duration: 500,
              before: () => ({
                y: 0,
                fill: "#E96294"
              })
            }
          }}
          />

        </V.VictoryChart>
      </div>
    );
  }
}
