import React, { Component } from 'react';
import '../styling/Genre.css';
import $ from 'jquery';


export default class Genre extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount = () => {
        window.TweenMax.set(['.grid-align'], {backfaceVisibility: 'hidden', perspective: 400})
        window.TweenMax.set('.grid-align', {transformStyle: 'preserve-3d'})
    $(".grid-item").hover(
      function() {
        window.TweenMax.to($(this), .5, {rotationY: -180, delay: .15})
        window.TweenMax.to($(this).find('.genre-front'), .15, {autoAlpha: 0, delay: .15})
        window.TweenMax.to($(this).find('.genre-back'), .25, {
          delay: 0.25,
          autoAlpha: 1
        })
      },
      function() {
        window.TweenMax.to($(this), .25, {rotationY: 0})
        window.TweenMax.to($(this).find('.genre-front'), .25, {autoAlpha: 1})
        window.TweenMax.to($(this).find('.genre-back'), .25, {
          delay: 0,
          autoAlpha: 0
        })
      }
    )}


  render() {
    const genres = this.props.data.genres.map((genre, i) => {
      return(
      <div  key={i} className="grid-align">
        <div className="grid-item">
          <img src={require('../assets/genres/' + genre.image + ".jpg" )} alt="genre" className="grid-item genre-front"/>
          <p className="genre-back genre-text">{genre.image}</p>
        </div>
      </div>
      )
    })
    return(
      <div className="col-xs-offset-4 col-sm-offset-4 col-md-offset-4 col-lg-offset-4">
        <div className="grid" data-masonry-options = '{"itemSelector": ".grid-item", "columnWidth": ".grid-sizer"}'>
        {genres}
      </div>
      </div>
    )
  }
}
