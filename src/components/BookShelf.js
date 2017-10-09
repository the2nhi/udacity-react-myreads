import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
    render() {
        let books = this.props.books;
        console.log("%cBooks in bookshelf- ", 'color:purple', books);
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book, i) => (
                        <li key={`book-${i}`}>
                        <Book
                            book={book}
                            handleChangeShelf={this.props.handleChangeShelf}
                        />
                        </li>
                    ))}
                </ol>
            </div>
            </div>
        )
    }
}

export default BookShelf;