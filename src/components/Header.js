import React, { Component } from 'react';
import background from '../assets/pexels.jpg';
import '../styling/Header.css';
import '../styling/Nav.css';

export default class Header extends Component {
  render(
    imageStyle = {
      padding: 0,
      margin: 0,
    }
  ){
    return(
      <div>
        <div className="background-container">
          <img src={background} className="col-xs-12 background-image" style={imageStyle} alt="bookshelf"/>
        </div>
    </div>
    )
  }
}
