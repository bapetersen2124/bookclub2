import React, { Component } from 'react';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Form from './components/Form.js';
import Sort from './components/Sort.js';
import Genre from './components/Genre';

var data = require('./content.json');

export default class App extends Component {
  _api = null;

  data = data[0]
  
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
    this._api = props.api;
  }

  componentDidMount = () => {
    const books = this._api.getBooks();
    this.setState({books: books});
  }

  handleCreateBook = (book) => {
    const books = this._api.addBook(book);
    this.setState({books: books});
  }
  render() {

    return (
      <div>
        <Header
        />

        <Nav
          enabled = {true}
          top = {0}
          form = {
            <Form
              handleCreateBook = {this.handleCreateBook}
            />
          }
        />

      <Sort />

      <Genre
        data = {data}
        />


      </div>
    );
  }
}
