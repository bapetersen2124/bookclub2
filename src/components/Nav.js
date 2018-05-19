import React, { Component } from 'react';
import Sticky from 'react-stickynode';
import '../styling/Nav.css';
import TimelineLite from 'gsap/TimelineLite';
import { TweenMax } from 'gsap';


export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  expandNav = () => {
    const tl = new TimelineLite()

    tl.to(".nav-background", 1, {width: "100%",})
      .to(".menu", .25, {delay: .05})
      .fromTo(".icon", 1, {margin: 0,}, {
        margin: 0,
        width: "30%",
      })
      .to(".form", 1, {
        width: "50%",
        display: "inline",
        autoAlpha: 1,
        delay: .05,
      })
      .fromTo(".icon", 1, {
        margin: 0,
      }, {
        margin: 0,
        width: "30%",
        delay: .15
      })
  }

  navIndent = (e) => {
    window.TweenMax.to(e.currentTarget, .5, {
      marginLeft: "10px"
    })
  }

  navRemoveIndent = (e) => {
    window.TweenMax.to(e.currentTarget, .5, {
        marginLeft: "0px"
      })
  }

  render() {

    const VisibilitySensor = require('react-visibility-sensor');

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
              <li className="nav-item" onMouseOver={this.navIndent} onMouseOut={this.navRemoveIndent}>Home</li>
              <li id="form-fill" className="nav-item" onClick={this.expandNav} onMouseOver={this.navIndent} onMouseOut={this.navRemoveIndent}>Add a Listing</li>
              <li className="nav-item" onMouseOver={this.navIndent} onMouseOut={this.navRemoveIndent}>Search By Category</li>
              <li className="nav-item" onMouseOver={this.navIndent} onMouseOut={this.navRemoveIndent}>Search By User</li>
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
