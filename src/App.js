import React, { Component } from 'react';
import { HashRouter, Router, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI';
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';
import './App.css';

class BooksApp extends Component {
  state = {
    books: [],
    filterBooks: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true
  }

  componentWillMount() {
    console.log("%cApp.js - componentWillMount ", 'color:hotpink', this.state);
    BooksAPI.getAll().then((books) => {
      //console.log("%cApp.js - componentWillMount - books ", 'color:hotpink', books);
      this.setState({ books });
    })  
  }

  filterBooks() {

  }

  handleCancelSearch() {
    console.log("%cApp.js handleCancelSearch", 'color:hotpink');
    this.setState({showSearchPage: false});
  }

  handleChangeShelf(book, shelf) {
    console.log("%cbook of handleShelfChange- ", 'color:hotpink', book);
    console.log("%cshelf of handleShelfChange- ", 'color:hotpink', shelf);
    BooksAPI.update(book, shelf).then(() => {
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
      <HashRouter> 
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            handleChangeShelf={this.handleChangeShelf.bind(this)}
          />
        )}
        />
      </HashRouter>
      </div>   
    )
  }
}

  export default BooksApp;



  