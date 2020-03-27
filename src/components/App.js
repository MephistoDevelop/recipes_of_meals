import React, { useState, useEffect } from 'react';
import { NavBar } from './NavBar';
import { RandomList } from './RandomList';
import { RecipeCategories } from './RecipeCategories';
import { RecipeDetails } from './RecipeDetails'
import { RecipesList } from './RecipesList';
import { Home } from './Home';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

export const App = () => {

  const [categories, setCategories] = useState(0);
  const [randomMeal, setRandomMeal] = useState({});
  const categoriesArr = [];
  const randomMeals = []
  // const dispatch = useDispatch();

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
    const divsArr = document.getElementsByClassName('random-item-container');
    for (let i = 0; i < divsArr.length; i += 1) {
      console.log(`Divs Arr: ${divsArr}`);
    };
  }, []);


  return (
    <div id="main-container">
      <Router>
        <NavBar categories={categories} />
        <Route path="/home" component={() => <Home />} />
        <Route path="/random" component={() => <RandomList randomMeals={randomMeal} />} />
        <Route path="/details" component={() => <RecipeDetails />} />
        <Route path="/categories" component={() => <RecipeCategories categories={categories} />} />
        <Route path='/meals' component={() => <RecipesList />} />
        {/* <RecipeCategories categories={categories} /> */}
      </Router>

    </div>
  );
};