import React from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends React.Component {
  state = {
    books: [],
    query: '',
    myBooks: [],
  };

  handleSearch = e => {
    this.setState({ query: e.target.value })
    if (e.target.value.trim()) {
      BooksAPI.search(e.target.value, 20).then(books => {
        if (!('error' in books)) {
          this.setState({ books })
        }
      })
    }
  };

  renderBooks = () => {
    return (
      this.state.books.map(book => {
        return (
          <li key={book.id}>
            <Book
              book={book}
            />
          </li>
        )
      })
    )
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to="/"
          >
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.handleSearch}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.query && this.renderBooks()}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks;
