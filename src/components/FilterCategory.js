import React from 'react';

export const CategoryFilter = () => {
  return (
    <div id="filter-container">
      <select>
        <option>Categories</option>
      </select>
      <input type="text" placeholder="Find Recipe" />
    </div>
  );
};