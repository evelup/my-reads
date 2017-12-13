import React from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class SearchBook extends React.Component {
  state = {
    books: [],
    query: '',
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to="/"
            // onClick={() => this.setState({ showSearchPage: false })}
          >
            Close
          </Link>
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
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(e) => {
                this.setState({ query: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.filter(
              book => (!this.state.query || book.title === this.state.query) ? true : false
            ).map(book => {
              return (
                <li key={book.title}>
                  <Book
                    book={book}
                  />
                </li>
              )
            })}
            {/*{this.state.books.map(book => {*/}
              {/*return (*/}
                {/*<li key={book.title}>*/}
                  {/*<Book*/}
                    {/*book={book}*/}
                  {/*/>*/}
                {/*</li>*/}
              {/*)*/}
            {/*})}*/}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBook;
