import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';

class Book extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            showChangeShelf: false,
            changeOption: null,
        }
        this.handleBookSelect = this.handleBookSelect.bind(this);
    }

    handleBookSelect(book) {
        console.log("%cBookselected..", 'color:green', book );
        this.setState({showChangeShelf: true});
    }
    
    render(){   
        const {book, handleChangeShelf} = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ 
                        width: 128, height: 188, 
                        backgroundImage:`url(${book.imageLinks.smallThumbnail})`,
                        }}
                        onClick={ () => this.handleBookSelect(book) } >
                        </div>
                <BookShelfChanger
                        showChangeShelf={this.state.showChangeShelf}
                        handleChangeShelf={this.props.handleChangeShelf}
                        book={book}
                />
                </div>
                <div className="book-title">
                {book.title}
                </div>
                <div className="book-authors">
                {book.authors}
                </div>
            </div>
            )
        }
}


export default Book;