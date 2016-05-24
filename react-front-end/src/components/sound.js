import React, { Component } from 'react';
import style from '../stylesheets/style.css';
import Grid from 'react-bootstrap/lib/Grid';
import { VictoryBar } from "victory";

export default class Sound extends Component {

  render() {
    return (
      <div className="left sound-graph">
      	<VictoryBar
          data={ this.props.value }
         />
      </div>
    )
  }
}
