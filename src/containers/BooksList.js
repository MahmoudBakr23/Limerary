import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';

const BooksList = () => {
  const books = useSelector((state) => state);
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.bookReducer.map((book) => (
          <Book key={book.id} id={book.id} title={book.title} category={book.category} />
        ))}
        ;
      </tbody>
    </table>
  );
};

export default BooksList;
