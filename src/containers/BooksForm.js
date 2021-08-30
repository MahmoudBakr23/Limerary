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
    <div className="form-container">
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={onSubmit}>
        <input name="title" type="text" value={title} placeholder="Book title" onChange={(e) => setTitle(e.target.value)} required />
        <select onChange={(e) => setCategory(e.target.value)} required>
          <option value="ALL">ALL</option>
          <option value="Action">Action</option>
          <option value="Biography">Biography</option>
          <option value="History">History</option>
          <option value="Kids">Kids</option>
          <option value="Learning">Learning</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BooksForm;
