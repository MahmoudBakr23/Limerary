import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { id, title, category } = props;

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

Book.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
};

Book.defaultProps = {
  id: null,
  title: null,
  category: null,
};

export default Book;
