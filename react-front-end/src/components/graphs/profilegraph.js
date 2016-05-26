import React, { Component } from 'react';
import style from '../../stylesheets/style.css';
import Grid from 'react-bootstrap/lib/Grid';
import * as V from 'victory';

export default class ProfileGraph extends Component {
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
            axis: {stroke: "#8B4CDB"},
            grid: {strokeWidth: 2},
            ticks: {stroke: "#8B4CDB"},
            tickLabels: {fontSize: 15, fill:"#8B4CDB"},
            axisLabel: {fill:"#8B4CDB"}
          }}
          tickCount={0}
           standalone={false}/>
          <V.VictoryAxis dependentAxis
          label="Users Signed On"
          style={{
            axis: {stroke: "#8B4CDB"},
            grid: {strokeWidth: 2},
            ticks: {stroke: "#8B4CDB"},
            tickLabels: {fontSize: 15, fill:"#8B4CDB"},
            axisLabel: {fontSize: 15, fill:"#8B4CDB"}
          }}
          tickCount={0}
           domain={[0,40]} standalone={false}/>

          <V.VictoryBar
          style={{
            data: {
              fill: "#8B4CDB"
            }
          }}
           data={this.props.data}

           animate={{
            onEnter: {
              duration: 500,
              before: () => ({
                y: 0,
                fill: "#8B4CDB"
              })
            }
          }}
          />

        </V.VictoryChart>
      </div>
    );
  }
}