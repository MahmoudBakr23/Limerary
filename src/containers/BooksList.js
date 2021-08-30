import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import Filter from '../components/Filter';

const BooksList = () => {
  const books = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  const handleFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  const booksDisplay = () => {
    if (books.filterReducer.category === 'ALL') {
      return books.bookReducer;
    }
    return books.bookReducer.filter((book) => book.category === books.filterReducer.category);
  };

  return (
    <div className="container">
      <div className="filter-container">
        <Filter handleFilter={handleFilter} />
      </div>
      <div className="books-container">
        {booksDisplay().map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            category={book.category}
            handleRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default BooksList;
