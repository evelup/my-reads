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
    BooksAPI.update(this.props.book, e.target.value).then(()=> {
      if (this.props.onChange) {
        this.props.onChange();
      }
    });
    this.setState({ shelf: e.target.value});
  };

  render () {
    const { book } = this.props;
    let backgroundImage;
    if (book.imageLinks) {
      backgroundImage = `url(${book.imageLinks.thumbnail})`
    }
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ width: 128, height: 193, backgroundImage }}>

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
