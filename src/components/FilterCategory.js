import React from 'react';

export const CategoryFilter = ({ categories }) => {

  const fillSelect = () => {
    console.log(`Soy fillSelect : ${categories}`);
  }
  return (
    <div id="filter-container">
      <select>
        <option>Categories</option>
        {fillSelect()}
      </select>
      <input type="text" placeholder="Find Recipe" />
    </div>
  );
};