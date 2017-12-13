import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';

class ListBooks extends React.Component {
  state = {
    books: []
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }
  render() {
    console.log('books', this.state.books)
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              label="Currently Reading"
              books={this.state.books.filter((book) => book.shelf === 'currentlyReading')}
            />
            <BookShelf
              label="Want to Read"
              books={this.state.books.filter((book) => book.shelf === 'wantToRead')}
            />
            <BookShelf
              label="Read"
              books={this.state.books.filter((book) => book.shelf === 'read')}
            />
          </div>
        </div>
        <div className="open-search">
          <Link
            // onClick={() => this.setState({ showSearchPage: true })}
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
