import React, { useState } from 'react';
import { useEffect } from 'react';
import { NavBar } from './NavBar';
import { RandomList } from './RandomList';
import { RecipeList } from './RecipeList';
import axios from 'axios';
import { increaseCounter, decreaseCounter } from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {

  const [categories, setCategories] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const categoriesArr = [];
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(Response => {
        const objArr = Response.data.categories;
        objArr.forEach((category) => {
          categoriesArr.push(category);
        })
        setCategories(categoriesArr);
      })
  }, []);

  return (
    <div id="main-container">
      <NavBar categories={categories} />
      <RandomList />
      <RecipeList categories={categories} />
    </div>
  );
};
