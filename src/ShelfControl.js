import React from 'react';

const ShelfControl = ({ onUpdate, shelf }) => {
  return (
    <div className="book-shelf-changer">
      <select onChange={onUpdate} value={shelf ? shelf : 'none'}>
        <option disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
};

export default ShelfControl;
