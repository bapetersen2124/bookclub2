import React, { Component } from 'react';
import '../styling/Genre.css';
import $ from 'jquery';
import TimelineLite from 'gsap/TimelineLite';
import TweenMax from 'gsap';


export default class Genre extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const genres = this.props.data.genres.map((genre, i) => {
      return(
      <div  key={i} className="grid-align">
        <div className="grid-item">
          <img src={require('../assets/genres/' + genre.image + ".jpg" )} alt="genre" className="grid-item genre-front"/>
            <div className="genre-back">
              <p className="genre-text">{genre.image}</p>
            </div>
        </div>
      </div>
      )
    })
    return(
      <div className="col-xs-offset-4 col-sm-offset-4 col-md-offset-4 col-lg-offset-4">
        {genres}
      </div>
    )
  }
}
