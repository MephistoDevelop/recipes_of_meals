import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { CategoryFilter } from './FilterCategory'
export const NavBar = ({ categories }) => {
  return (
    <div id="navbar-container" className="d-flex">
      <div id="title-container">MEALS RECIPES</div>
      <CategoryFilter categories={categories} />
      <Link id="home-link" to="/home">Home</Link>
      <Link id="random-link" to="/random">Random Meals</Link>
      <Link id="categories-link" to="/categories">Categories</Link>
    </div>
  );
};