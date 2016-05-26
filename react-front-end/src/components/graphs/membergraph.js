import React, { Component } from 'react';
import style from '../../stylesheets/style.css';
import Grid from 'react-bootstrap/lib/Grid';
import * as V from 'victory';

export default class MemberGraph extends Component {
  render() {
    return (
      <div>
        <V.VictoryChart>
          <V.VictoryAxis
          label="TODAY"
          style={{
            axis: {stroke: "#8B4CDB", strokeWidth: 3},
            grid: {strokeWidth: 2},
            ticks: {stroke: "#8B4CDB"},
            tickLabels: {fontSize: 15, fill:"#8B4CDB", fontFamily: "Roboto", fontWeight: "400"},
            axisLabel: {fontSize:15, fill:"#8B4CDB", fontFamily: "Roboto", fontWeight: "400"}
          }}
          tickCount={0}
           standalone={false}/>
          <V.VictoryAxis dependentAxis
          label="USERS (Signed On)"
          style={{
            axis: {stroke: "#8B4CDB", strokeWidth: 3},
            grid: {strokeWidth: 2},
            ticks: {stroke: "#8B4CDB"},
            tickLabels: {fontSize: 15, fill:"#8B4CDB", fontFamily: "Roboto", fontWeight: "400"},
            axisLabel: {fontSize: 15, fill:"#8B4CDB", fontFamily: "Roboto", fontWeight: "400"}
          }}
          tickCount={4}
           domain={[0,10]}  standalone={false}/>

          <V.VictoryBar
          style={{
            data: {
              stroke: "#8B4CDB",
              strokeWidth: 5,
              fill: "#8B4CDB"
            }
          }}
            padding={{left: 50}}
           data={this.props.data}
          />

        </V.VictoryChart>
      </div>
    );
  }
}