import React from 'react';
import { CategoryFilter } from './FilterCategory'
export const NavBar = () => {
  return (
    <div id="navbar-container" className="d-flex">
      <div id="title-container">MEALS RECIPES</div>
      <CategoryFilter />
    </div>
  );
};