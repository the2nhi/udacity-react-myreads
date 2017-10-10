import React, { Component } from 'react'

class SearchBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: undefined,
            author: undefined,
            searchInput: undefined,
        }
        this.handleCancelSearch = this.handleCancelSearch.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleCancelSearch() {
        console.log("%cSearchbooks cancel clicked..", 'color:red');
        this.props.handleCancelSearch();
    }

    handleInputChange(e) {
        console.log("%chandleBodyChange..... ", 'color:purple', e.target.value);
        this.setState({searchInput: e.target.value});
    }

    render() {
        console.log("%cSearchBooks props- ", 'color:magenta', this.props);
        if(!this.props.showSearchPage) {
            return null;
        }
    return(
        <div className="search-books">
        <div className="search-books-bar">
            <a className="close-search" onClick={() => this.handleCancelSearch()}>Close</a>
            <div className="search-books-input-wrapper">
            {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input 
                type="text" 
                onChange={this.handleInputChange}    
                placeholder="Search by title or author"
            />

            </div>
        </div>
        <div className="search-books-results">
            <ol className="books-grid"></ol>
        </div>
        </div>
        )
    }
}

export default SearchBooks;