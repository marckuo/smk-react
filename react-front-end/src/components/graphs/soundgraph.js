import React, { Component } from 'react';
import * as V from 'victory';

export default class SoundGraph extends Component {

  render() {
    return(
      <div>
        <V.VictoryBar
        style={{
            data: {
              fill: "#FBD046"
            }
          }}
          data={this.props.data}
         />

      </div>
    )
  }
}