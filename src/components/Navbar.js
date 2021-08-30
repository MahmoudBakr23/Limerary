import React from 'react';

const Navbar = () => (
  <header>
    <nav>
      <div className="nav-items">
        <div>
          <h3 className="logo">Bookstore CMS</h3>
        </div>
        <ul className="nav-list">
          <li className="books">
            BOOKS
          </li>
          <li className="categories">
            CATEGORIES
          </li>
        </ul>
      </div>
      <i className="fas fa-user" />
    </nav>
  </header>
);

export default Navbar;
