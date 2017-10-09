import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI';
import ListBooks from './components/ListBooks';
import './App.css';

class BooksApp extends Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  getInitialState() {

  }

  // componentWillMount() {
  //   console.log("%cApp.js - componentWillMount ", 'color:hotpink', this.state);
  //   BooksAPI.getAll().then((books) => {
  //     this.setState({ books });
  //   })  
  // }

  componentWillMount() {
    console.log("%cApp.js - componentWillMount ", 'color:hotpink', this.state);
    BooksAPI.getAll().then((books) => {
      //console.log("%cApp.js - componentWillMount - books ", 'color:hotpink', books);
      this.setState({ books });
    })  
  }

  handleChangeShelf(book, shelf) {
    console.log("%cbook of handleShelfChange- ", 'color:hotpink', book);
    console.log("%cshelf of handleShelfChange- ", 'color:hotpink', shelf);
    BooksAPI.update(book, shelf).then((err, resp) => {
      const modifiedBook = book;
      modifiedBook.shelf = shelf;
      let newBooks = [...this.state.books];
      //console.log('%cnewBooks - ', 'color:hotpink', newBooks);
      let idx = newBooks.findIndex(newBook => newBook.id === modifiedBook.id);
      if( idx !== undefined ){
          newBooks[idx] = modifiedBook;
      }
      this.setState({books: newBooks});
      })
  }

  render() {
    console.log("%cApp.js - this.state- ", 'color:hotpink', this.state);
    return (
      <div className="app">
          <ListBooks
            books={this.state.books}
            handleChangeShelf={this.handleChangeShelf.bind(this)}
        />
      </div>   
    )
  }
}

  export default BooksApp;
  