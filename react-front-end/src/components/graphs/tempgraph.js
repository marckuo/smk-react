import React, { Component } from 'react';
import { render } from 'react-dom';
import Grid from 'react-bootstrap/lib/Grid';
import * as V from 'victory';

export default class TempGraph extends Component {

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
      <div className="graph">               
        <V.VictoryChart>
        
        <V.VictoryAxis
        label= {time}
        style={{
          axis: {stroke: "#EC334D",strokeWidth: 3},
          // grid: {stroke: "#EC334D", strokeWidth: 3},
          ticks: {stroke: "#EC334D"},
          tickLabels: {fontSize: 15, fill:"#EC334D", fontFamily: "Roboto", fontWeight: "400"},
          axisLabel: {fontSize: 15, fill:"#EC334D", fontFamily: "Roboto", fontWeight: "400"},


        }}
        tickCount={0}
         standalone={false}/>
        <V.VictoryAxis dependentAxis
        label="TEMPERATURE (°C)"
        style={{
          axis: {stroke: "#EC334D",strokeWidth: 3},
          // grid: {stroke: "#EC334D", strokeWidth: 3},
          ticks: {stroke: "#EC334D"},
          tickLabels: {fontSize: 15, fill:"#EC334D", fontFamily: "Roboto", fontWeight: "400"},
          axisLabel: {fontSize:15, fill:"#EC334D", fontFamily: "Roboto", fontWeight: "400"}
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
            symbol: {size:20},
          }

        }}
        data={this.props.data}
        // labels={this.props.data.y}
        // symbol={"circle"}
        // size={8}
         // symbol={"Square"}
         animate={{duration:500}}
          
        
        />
      </V.VictoryChart>
      </div>
    );
  }
}

        