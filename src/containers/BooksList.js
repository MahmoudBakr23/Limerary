import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = () => {
  const books = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Remove book</th>
        </tr>
      </thead>
      <tbody>
        {books.bookReducer.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            category={book.category}
            handleRemove={handleRemove}
          />
        ))}
        ;
      </tbody>
    </table>
  );
};

export default BooksList;
