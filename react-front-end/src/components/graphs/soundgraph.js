import React, { Component } from 'react';
import * as V from 'victory';

export default class SoundGraph extends Component {



  render() {

    var spectrumMap = this.props.data.map(function(num, index){
       return {'x': index + 1, 'y': num};
      });

    return(
      <div>
        <V.VictoryBar
        style={{
            data: {
              fill: "#FBD046"
            }
          }}
          data={spectrumMap}
         />

      </div>
    )
  }
}