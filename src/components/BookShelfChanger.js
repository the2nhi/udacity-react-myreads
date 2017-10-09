import React, { Component } from 'react'

class BookShelfChanger extends Component {
    constructor(props) {
        super(props);
        this.handleShelfSelect = this.handleShelfSelect.bind(this);
    }

    handleShelfSelect({ target: { value }}){
        console.log('%coption selected from move to...', 'color:blue', value); 
        this.props.handleChangeShelf(this.props.book, value);
    }

    render() {
        const {book} = this.props;
        console.log("%cthis.props of BookshelfChanger-", 'color:blue', this.props);
        if(!this.props.showChangeShelf) {
            return null;
        }
        return(
        <select onChange={this.handleShelfSelect} value={book.shelf}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
        )
    }
}

export default BookShelfChanger;