import React, { Component } from 'react'
import '../App.css';
import Bookshelf from './BookShelf';

class ListBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            current_shelf: [],
            want_shelf: [],
            read_shelf: [],
        }
    }

    componentWillReceiveProps(nextProps ){
        console.log("%cListBooks- componentwillreceiveprops- nexProps-", 'color:orange', nextProps);
        // set state for shelves
        let tempBookList = nextProps.books;
        let current_list = tempBookList.filter((b) => b.shelf == "currentlyReading");
        let want_list = tempBookList.filter((b) => b.shelf == "wantToRead");
        let read_list = tempBookList.filter((b) => b.shelf == "read");


        /*
         if (this.props.userFilter) {
      showingPosts = showingPosts.filter((p) => +p.userId === +this.props.userFilter);
    }
        */

        this.setState({books: nextProps.books, current_shelf: current_list, want_shelf: want_list, read_shelf: read_list});
    }

    render() {
        const currentlyReading = "Currently Reading";
        const wantToRead = "Want to Read";
        const read = "Read";
        
        return(
          <div className="list-books">
            <div className="list-books-title">
                <h1>My Reads</h1>
            </div>
                <div className="list-books-content">
                    <Bookshelf
                        title={currentlyReading}
                        books={this.state.current_shelf}
                    />
                    <Bookshelf
                        title={wantToRead}
                        books={this.state.want_shelf}
                    />
                    <Bookshelf
                        title={read}
                        books={this.state.read_shelf}
                    />
                </div>
          </div>
        )
    }
}

export default ListBooks;