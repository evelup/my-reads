import React from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class SearchBook extends React.Component {
  state = {
    books: [],
    query: '',
    myBooks: [],
  };
  // componentDidMount() {
  //   BooksAPI.getAll().then(myBooks => {
  //     this.setState({ myBooks });
  //   })
  //   // BooksAPI.search(this.props.query, 20).then(books => {
  //   //   this.setState({ books })
  //   // })
  // }

  // filterBooks = book => {
  //   let q = this.state.query.toLowerCase();
  //   console.log('book', book.authors)
  //   console.log('book', book.title.indexOf('React'));
  //   if (!q) {
  //     return true
  //   }
  //   else {
  //     for (let i = 0; i < book.authors.length; i++) {
  //       if (book.authors[i].toLowerCase().indexOf(q) >= 0) {
  //         return true
  //       }
  //     }
  //     for (let i = 0; i < book.title.length; i++) {
  //       if (book.title.toLowerCase().indexOf(q) >= 0) {
  //         return true
  //       }
  //     }
  //     return false;
  //   }
  // };

  handleSearch = e => {
    // console.log('input', e.target.value, ",", this.state.query)
    this.setState({ query: e.target.value })
    if (e.target.value.trim()) {
      BooksAPI.search(e.target.value, 20).then(books => {
        // console.log('res', books)
        if (!('error' in books)) {
          this.setState({ books })
        }
      })
    }
  };

  renderBooks = () => {
    // console.log('BOOKS', this.state.books, this.state.query);
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
    // console.log('query', this.state.query);

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
              onChange={this.handleSearch}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.query && this.renderBooks()}
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
