import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

let mealsArr = [];

export const RecipesList = (props) => {
  const [rendered, setRendered] = useState(false);
  const location = useLocation();
  const categoryObj = location.state.category;

  const fetch = async (category) => await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`).then((result) => {
    //  alert(JSON.stringify(result.data.meals)+'\n Category: '+category);
    mealsArr = [];
    for (let i = 0; i < result.data.meals.length; i += 1) {
      mealsArr.push(result.data.meals[i]);
    }
    setRendered(true);
  });

  const setMeals = (meals) => {
    const divsArr = [];
    if (rendered) {
      for (let i = 0; i < meals.length; i += 1) {
        divsArr.push(<div name={meals[i].idMeal}>
          <div>
            {' '}
            <img className="img-thumbnail random-img" src={meals[i].strMealThumb} />
          </div>
          <div>
            "Name "{meals[i].strMeal}</div>
        </div>);
      }
      return (divsArr);
    }

  };

  useEffect(() => {
    const result = fetch(categoryObj.strCategory);
    console.log(`IM result from Fetch:: ${JSON.stringify(mealsArr)}`);
  }, []);

  return (
    <div>
      {setMeals(mealsArr)}
    </div>
  );
};
