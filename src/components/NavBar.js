import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { CategoryFilter } from './FilterCategory';

const NavBar = ({ categories }) => (
  <div id="navbar-container" className="d-flex">
    <div id="title-container">MEALS RECIPES</div>
    <CategoryFilter categories={categories} />
    <Link id="home-link" to="/home">Home</Link>
    <Link id="random-link" to="/random">Random Meals</Link>
    <Link id="categories-link" to="/categories">Categories</Link>
  </div>
);

NavBar.propTypes = {
  categories: propTypes.instanceOf(Array).isRequired,
};

export default NavBar;
