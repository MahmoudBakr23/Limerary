const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export {
  addBook, removeBook, ADD_BOOK, REMOVE_BOOK,
};
