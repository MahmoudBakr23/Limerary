import { CHANGE_FILTER } from '../actions';

const initialCategory = {
  category: 'ALL',
};

const filterReducer = (state = initialCategory, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return { ...state, category: action.category };
    default:
      return state;
  }
};

export default filterReducer;
