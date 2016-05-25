import React, { Component } from 'react';
import { VictoryBar } from "victory";

export default class Sound extends Component {

  render() {
    return (
      <div className="sound-graph">
      	<VictoryBar
          data={ this.props.value }
         />
      </div>
    )
  }
}
