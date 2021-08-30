import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    id, title, category, handleRemove,
  } = props;

  return (
    <div className="book-container">
      <div className="book-data">
        <h4>{category}</h4>
        <h2>{title}</h2>
        <h5>Mahmoud Bakr</h5>
        <ul className="links">
          <li className="no-padding">Comments</li>
          <li><button type="button" onClick={() => handleRemove(id)}>Remove</button></li>
          <li className="no-border">Edit</li>
        </ul>
      </div>
      <div className="book-details">
        <div className="track">
          <h3>64%</h3>
          <h6>Completed</h6>
        </div>
        <div className="names">
          <h4 className="cc">CURRENT CHAPTER</h4>
          <h5 className="chapter">Chapter 17</h5>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
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
