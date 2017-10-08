import React, { Component } from 'react'

class Book extends Component {
    render(){   
        const book = this.props.book;
        console.log("%cbook.previewLink-", 'color:green', book.imageLinks.smallThumbnail);
      
        return (
            <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ 
                    width: 128, height: 188, 
                    backgroundImage:`url(${book.imageLinks.smallThumbnail})`
                    }}
                ></div>
            </div>
            </div>
            )
        }
}


export default Book;