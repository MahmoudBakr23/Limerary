import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    id, title, category, handleRemove,
  } = props;

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <button type="button" onClick={() => handleRemove(id)}>Remove</button>
    </tr>
  );
};

Book.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
  handleRemove: PropTypes.func,
};

Book.defaultProps = {
  id: null,
  title: null,
  category: null,
  handleRemove: null,
};

export default Book;
