import React from 'react';
import ShelfControl from './ShelfControl';
import * as BooksAPI from './BooksAPI';

class Book extends React.Component {

  state = {
    shelf: this.props.book.shelf,
  };

  componentDidMount() {
    BooksAPI.get(this.props.book.id).then(book => {
      this.setState({ shelf: book.shelf })
    })
  }

  handleShelfUpdate = e => {
    BooksAPI.update(this.props.book, e.target.value)
    this.setState({ shelf: e.target.value});
    if (this.props.onChange) {
      this.props.onChange();
    }
  };

  render () {
    const { book } = this.props;

    // console.log('book/shelf', book.title, ',',  book.shelf);
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>

          </div>
          <ShelfControl
            onUpdate={this.handleShelfUpdate}
            shelf={this.state.shelf}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}

export default Book;
