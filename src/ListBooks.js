import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Shelf from './Shelf';

class ListBooks extends React.Component {
  state = {
    books: []
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }
  handleChange = e => {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  };

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              onChange={this.handleChange}
              label="Currently Reading"
              books={this.state.books.filter((book) => book.shelf === 'currentlyReading')}
            />
            <Shelf
              onChange={this.handleChange}
              label="Want to Read"
              books={this.state.books.filter((book) => book.shelf === 'wantToRead')}
            />
            <Shelf
              onChange={this.handleChange}
              label="Read"
              books={this.state.books.filter((book) => book.shelf === 'read')}
            />
          </div>
        </div>
        <div className="open-search">
          <Link
            to="/search"
          >
            Add a book
          </Link>
        </div>
      </div>
    )
  }
}

export default ListBooks;
