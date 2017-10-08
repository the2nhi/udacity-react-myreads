import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: undefined,
            books: [],
        }
       // this.handleShelfChange = this.handleShelfChange.bind(this);
    }

    // componentWillReceiveProps(nextProps ) {
    //     console.log("%cBookShelf - componentwillreceiveprops- nexProps-", 'color:purple', nextProps);
    //     this.setState({title: nextProps.title}, {books: nextProps.books});
    // }

    // shouldComponentUpdate() {
    //     if(!this.state.books){
    //         return false;
    //     }
    //     console.log("%cBookShelf - shouldComponentUpdate- true-this.state.books- ", 'color:purple', this.state.books);
    //     return true;
    // }

    render() {
        let books = this.props.books;
        console.log("%cBooks in bookshelf- ", 'color:purple', books);
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book, i) => (
                        <Book
                            key={`book-${i}`}
                            book={book}
                        />
                    ))}
                </ol>
            </div>
            </div>
        )
    }
}

export default BookShelf;