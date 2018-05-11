import React, { Component } from 'react';
import Sticky from 'react-stickynode';
import '../styling/Nav.css';
import $ from 'jquery';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount = () => {
    $(".form-fill").click(function() {
      window.TweenMax.to(".nav-background", 1, {
        width: "100%",
        zIndex: 3
      })
    })
    $(".form-fill").click(function() {
      window.TweenMax.to(".grid", 1, {
        width: "100%",
        zIndex: -1,
        delay: -.5
      })
    })
    $(".form-fill").click(function() {
      window.TweenMax.fromTo(".menu", 1, {
      }, {
        marginLeft: 0,
        width: "30%",
        delay: 1.25,
      })
    })
    $(".form-fill").click(function() {
      window.TweenMax.fromTo(".icon", 1, {
        margin: 0,
      }, {
        margin: 0,
        width: "30%",
        delay: 1.25
      })
    })
  $(".form-fill").click(function() {
     window.TweenMax.to(".form", 1, {
       width: "50%",
       display: "inline",
       autoAlpha: 1,
       delay: 1.5,
       zIndex: 3
     })
  })
  $("#cancel, #submit").click(function() {
    window.TweenMax.to(".nav-background", 1, {
      width: "30%",
      zIndex: -1
    })
  })
  $("#cancel, #submit").click(function() {
    window.TweenMax.to(".grid", 1, {
      display: "inline-block",
      margin: "2.5% auto",
      position: "relative",
      overflow: "hidden",
      delay: 1.75,
      zIndex: 1
    })
  })
  $(".nav-item").mouseover(function() {
    window.TweenMax.to($(this), .35, {
      marginLeft: "5%"
    })
  })
  $(".nav-item").mouseout(function() {
    window.TweenMax.to($(this), .35, {
      marginLeft: "0%"
    })
  })
}

  render() {
    return(
      <Sticky enabled={this.props.enabled} top={this.props.top}>
        <div className="nav-background">
        <div>
          <div className="icon">
            <p>Book Club 2018</p>
          </div>
          <div>&nbsp;</div>
          <div className="menu">
            <ul>
              <li className="nav-item">Home</li>
              <li className="form-fill nav-item">Add a Listing</li>
              <li className="nav-item">Search By Category</li>
              <li className="nav-item">Search By User</li>
            </ul>
          </div>
          <div>
            {this.props.form}
          </div>
        </div>
      </div>
    </Sticky>
  )}
}
