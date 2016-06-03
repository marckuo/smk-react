import React, { Component } from 'react';
import { render } from 'react-dom';
import Grid from 'react-bootstrap/lib/Grid';
import * as V from 'victory';

export default class BeverageGraph extends Component {

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
      <div>
        <V.VictoryChart>
          
          <V.VictoryAxis
          label={time}
          style={{
            axis: {stroke: "#E96294", strokeWidth: 3},
            grid: {strokeWidth: 3},
            ticks: {stroke: "#E96294"},
            tickLabels: {fontSize: 15, fill:"#E96294", fontFamily: "Roboto", fontWeight: "400"},
            axisLabel: {fontSize: 15, fill:"#E96294", fontFamily: "Roboto", fontWeight: "400"}
          }}
          tickCount={0}
           standalone={false}/>
          <V.VictoryAxis dependentAxis
          label="BEVERAGES (# of cups)"
          style={{
            axis: {stroke: "#E96294", strokeWidth: 3},
            grid: {strokeWidth: 3},
            ticks: {stroke: "#E96294"},
            tickLabels: {fontSize: 15, fill:"#E96294", fontFamily: "Roboto", fontWeight: "400"},
            axisLabel: {fontSize: 15, fill:"#E96294", fontFamily: "Roboto", fontWeight: "400"}
          }}
          tickCount={5}
          standalone={false}/>

          <V.VictoryBar
          style={{
            data: {
              fill: "#E96294"
            }
          }}
           data={this.props.data}

          //  animate={{
          //   onEnter: {
          //     duration: 500,
          //     before: () => ({
          //       y: 0,
          //       fill: "#E96294"
          //     })
          //   }
          // }}
          />

        </V.VictoryChart>
      </div>
    );
  }
}
