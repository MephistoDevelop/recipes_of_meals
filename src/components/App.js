import React, { useState } from 'react';
import { useEffect } from 'react';
import { NavBar } from './NavBar';
import { RandomList } from './RandomList';
import { RecipeList } from './RecipeList';
import axios from 'axios';
import { increaseCounter, decreaseCounter } from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {

  const [categories, setCategories] = useState(0);
  const [randomMeal, setRandomMeal] = useState({});
  const categoriesArr = [];
  const randomMeals = []
  const dispatch = useDispatch();

  useEffect(() => {

    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(Response => {
        const objArr = Response.data.categories;
        objArr.forEach((category) => {
          categoriesArr.push(category);
        })
        setCategories(categoriesArr);
      })
    async function fetch() {
      for (let i = 0; i < 8; i += 1) {
        const result = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
          .then(Response => {
            const obj = Response.data.meals[0];
            randomMeals.push(obj);
          })

        if (i === 7) setRandomMeal(randomMeals)
      }
    }
    fetch();

  }, []);


  return (
    <div id="main-container">
      <NavBar categories={categories} />
      <RandomList randomMeals={randomMeal} />
      <RecipeList categories={categories} />
    </div>
  );
};
