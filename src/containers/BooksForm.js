import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../actions';

const BooksForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const bookData = {
      id: Math.random(),
      title,
      category,
    };

    dispatch(addBook(bookData));
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input name="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <select onChange={(e) => setCategory(e.target.value)}>
          <option selected value="Select a category" disabled>Select a category</option>
          <option value="Action">Action</option>
          <option value="Biography">Biography</option>
          <option value="History">History</option>
          <option value="Kids">Kids</option>
          <option value="Learning">Learning</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BooksForm;
