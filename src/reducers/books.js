import { ADD_BOOK, REMOVE_BOOK } from '../actions';

const initialState = [
  {
    id: Math.random().toPrecision(),
    title: 'Our World',
    category: 'Action',
  },
  {
    id: Math.random(),
    title: 'My World',
    category: 'Sci-Fi',
  },
  {
    id: Math.random(),
    title: 'Your World',
    category: 'Drama',
  },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state;
    default:
      return state;
  }
};

export default bookReducer;
