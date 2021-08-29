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

const changeFilter = (category) => ({
  type: CHANGE_FILTER,
  category,
});

export {
  addBook, removeBook, changeFilter, ADD_BOOK, REMOVE_BOOK, CHANGE_FILTER,
};
