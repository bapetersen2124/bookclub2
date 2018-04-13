import React, { Component } from 'react';
import '../styling/Items.css';
import '../App.js';

export default class Items extends Component {
  render(){
    return(
      <div className="row">
        <div className="col-xs-offset-4 col-sm-offset-4 col-md-offset-4 col-lg-offset-4">
          <span className="book-list">
            {this.props.genre}
            <div className="item-listing">{this.props.book.title}</div>
            <div className="item-listing">{this.props.book.author}</div>
          </span>
        </div>
      </div>
    )
  }
}
