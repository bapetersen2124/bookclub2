import React, { Component } from 'react';
import '../styling/Form.css';
import TimelineLite from 'gsap/TimelineLite';
import Nav from './Nav.js';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: ""
    }
  }

  toShrink = () => {
    const tl = new TimelineLite()

    tl.to(".form", 0, {
            width: "50%",
            display: "inline",
            autoAlpha: 0
        })
      .to(".menu, .icon", 0, {
        width: "100%",
        })
      .to(".nav-background", 1, {
        width: "30%",
        zIndex: -1
        })
      }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.currentTarget.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleCreateBook({title: this.state.title, author: this.state.author})
    this.setState({
      author: "",
      title: ""
    })
  }

  render() {
    return(
      <div className="form">
        <div>
            <table className="t-body">
              <tbody className="t-body">
                <tr className="tr-style">
                  <td className="td-style"><label htmlFor="title" className="label">Title</label></td>
                  <td className="td-full">
                    <input onChange={this.handleChange.bind(this)} type="text" id="title" className="field" />
                  </td>
                </tr>
                <tr className="tr-style">
                  <td className="td-style"></td>
                  <td className="td-full"></td>
                  <td className="td-style"></td>
                </tr>
                <tr className="tr-style">
                  <td className="td-style"><label htmlFor="author" className="label">Author</label></td>
                  <td className="td-full">
                    <input type="text" onChange={this.handleChange.bind(this)} id="author" className="field" />
                  </td>
                </tr>
                <tr className="tr-style">
                  <td className="td-style"></td>
                  <td></td>
                  <td className="td-style"></td>
                </tr>
                <tr className="tr-style">
                  <td className="td-style"></td>
                  <td className="center">
                    <button id="cancel" className="button-style" onClick={this.toShrink}>Cancel</button>
                    <button id="submit" className="button-style" type="submit" onClick={this.handleSubmit.bind(this)}>Submit</button>
                  </td>
                  <td className="td-style"></td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    )
  }
}
