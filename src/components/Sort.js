import React, { Component } from 'react';
import '../styling/Sort.css';
import host from '../assets/icons/host.png';
import library from '../assets/icons/library.png';
import rating from '../assets/icons/rating.png';
import recent from '../assets/icons/recent.png';
import ScrollMagic from 'scrollmagic';
import 'animation.gsap';
import 'debug.addIndicators';


export default class Sort extends Component {

  render() {
    const controller = new ScrollMagic.Controller();
const tween = window.TweenMax.staggerFrom(".image-icon", 1, {bottom: -100, autoAlpha: 0}, 0.25);

const scene = new ScrollMagic.Scene({triggerHook: .8, duration: 0, reverse: true})
      scene.triggerElement(document.getElementById("trigger1"))
      scene.setTween(tween)
      scene.addTo(controller);

    return(
      <div className="row">
        <div className="col-xs-offset-4 col-sm-offset-4 col-md-offset-4 col-lg-offset-4">
          <div id="trigger1" className="listing">
            <div className="sort-list span-background">
              <div >
                <span>
                  <img src={recent} alt="host" className="image-icon" />
                </span>
                <span>
                  <img src={library} alt="library" className="image-icon" />
                </span>
                <span>
                  <img src={rating} alt="rating" className="image-icon" />
                </span>
                <span>
                  <img src={host} alt="host" className="image-icon" />
                </span>
              </div>
          </div>
        </div>
        </div>
      </div>
      )
    }
  }
