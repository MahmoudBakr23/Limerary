const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const changeFilter = (books) => ({
  type: CHANGE_FILTER,
  payload: books,
});

export {
  addBook, removeBook, ADD_BOOK, REMOVE_BOOK, changeFilter,
};
