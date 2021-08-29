import React from 'react';

const Filter = ({ handleFilter }) => (
  <div>
    <select onChange={(e) => handleFilter(e)}>
      <option value="Select a category" disabled>Select a category</option>
      <option value="ALL">ALL</option>
      <option value="Action">Action</option>
      <option value="Biography">Biography</option>
      <option value="History">History</option>
      <option value="Kids">Kids</option>
      <option value="Learning">Learning</option>
      <option value="Sci-Fi">Sci-Fi</option>
    </select>
  </div>
);

export default Filter;
