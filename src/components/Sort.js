import React, { Component } from 'react';
import '../styling/Sort.css';
import host from '../assets/icons/host.png';
import library from '../assets/icons/library.png';
import rating from '../assets/icons/rating.png';
import recent from '../assets/icons/recent.png';
import { TweenMax }from 'gsap';

export default class Sort extends Component {

  iconChange = () => {
    window.TweenMax.staggerFromTo('.image-icon', 1, {
      opacity: 0,
      y: 150
    }, {
      opacity: 1,
      y: 0
    }, .25)
  }

  render() {

    const VisibilitySensor = require('react-visibility-sensor');

    return(
      <div className="row">
        <div className="col-xs-offset-4 col-sm-offset-4 col-md-offset-4 col-lg-offset-4">
          <div id="trigger1" >
            <div className="sort-list span-background">
              <div >
                  <VisibilitySensor onChange={this.iconChange}
                                    intervalDelay={1500}
                                    >
                    {({isVisible}) =>
                      <div className="listing"> {isVisible ?
                          <div>
                            <span>
                              <img src={host} className="image-icon" />
                            </span>
                            <span>
                              <img src={library} className="image-icon" />
                            </span>
                            <span>
                              <img src={rating} className="image-icon" />
                            </span>
                            <span>
                              <img src={recent} className="image-icon" />
                            </span>
                          </div>
                     : <div>
                       <span>
                         <img src={host} className="image-icon image-icon-invisible" />
                       </span>
                       <span>
                         <img src={library} className="image-icon image-icon-invisible" />
                       </span>
                       <span>
                         <img src={rating} className="image-icon image-icon-invisible" />
                       </span>
                       <span>
                         <img src={recent} className="image-icon image-icon-invisible" />
                       </span>
                     </div> }
                    </div>
                  }
                  </VisibilitySensor>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
  }
