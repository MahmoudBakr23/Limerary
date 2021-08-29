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
    <table>
      <Filter handleFilter={handleFilter} />
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Remove book</th>
        </tr>
      </thead>
      <tbody>
        {booksDisplay().map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            category={book.category}
            handleRemove={handleRemove}
          />
        ))}
      </tbody>
    </table>
  );
};

export default BooksList;
