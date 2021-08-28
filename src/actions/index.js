const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

const removeBook = (book) => ({
  type: REMOVE_BOOK,
  id: book.id,
});

export {
  addBook, removeBook, ADD_BOOK, REMOVE_BOOK,
};
