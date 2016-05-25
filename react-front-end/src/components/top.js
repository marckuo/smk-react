import React, { Component } from 'react';
import style from '../stylesheets/style.css';
import Grid from 'react-bootstrap/lib/Grid';
import Header from './top/header';
import Sound from './top/sound';
import Profile from './top/profile';

export default class Top extends Component {

  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-6 logodiv bluebg">
          <Header />
        </div>
        <div className="col-xs-12 col-sm-3 bluebg-darker white-txt">
            <Profile />
        </div>
        <div className="col-xs-12 col-sm-3 bluebg-lighter white-txt">
            <Sound />
        </div>    
      </div>
    )
  }
}