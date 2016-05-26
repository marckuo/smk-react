import React, { Component } from 'react';
import style from './../../stylesheets/style.css';
import Icon from './sensor/icon';
import Value from './sensor/value';
import Buttons from './sensor/buttons';
import Grid from 'react-bootstrap/lib/Grid';
import TempGraph from './../graphs/tempgraph';
import HumidGraph from './../graphs/humidgraph';
import BeverageGraph from './../graphs/beveragegraph';
import DoorGraph from './../graphs/doorgraph';
import SoundGraph from './../graphs/soundgraph';
import MemberGraph from './../graphs/membergraph';

export default class Sensor extends Component {

  render() {
    return (
      <div className="react-sensor-div">
        <div className="row h-center v-center">
          <Icon img = {this.props.img} />
          {
            (this.props.name && this.props.name !== "member")
          ? <Value val = {this.props.val} name = {this.props.name}/>
          : null
          }
          {
            (this.props.name && this.props.name !== "sound" && this.props.name !== "member")
          ? <Buttons _setApiTime = {this.props._setApiTime} name = {this.props.name}/>
          : null
          }
        </div>
          {
            (this.props.name && this.props.name === "member")
          ? <div id="member"className="row member-value"><Value val = {this.props.val} name = {this.props.name}/></div>
          : null
          }
          {
            (this.props.name && this.props.name === "temp")
            ? <TempGraph time={this.props.time} data={this.props.data}/>
            : null
          }
          {
            (this.props.name && this.props.name === "humid")
            ? <HumidGraph time={this.props.time} data={this.props.data}/>
            : null
          }
          {
            (this.props.name && this.props.name === "beverage")
            ? <BeverageGraph time={this.props.time} data={this.props.data}/>
            : null
          }
          {
            (this.props.name && this.props.name === "door")
            ? <DoorGraph time={this.props.time} data={this.props.data}/>
            : null
          }
          {
            (this.props.name && this.props.name === "sound")
            ? <SoundGraph data={this.props.data} />
            : null
          }
      </div>
    )
  }
}