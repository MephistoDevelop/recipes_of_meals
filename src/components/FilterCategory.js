import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export const CategoryFilter = ({ categories }) => {
  let objArr = [];
  const [render, setRender] = useState(false);
  const [meals, setMeals] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const request = async (name) => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
        objArr = [];
        objArr.push(response.data);
      };

      request(e.target.value);

      if (objArr[0] !== undefined) {
        // console.log('Soy Filter:' + objArr[0].meals);
        setMeals(objArr[0].meals);
        setRender(true);
      }
    }
  };

  const findMeal = (e) => {
    const request = async (name) => {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
      objArr = [];
      objArr.push(response.data);
    };

    request(e.target.value);

    if (objArr[0] !== undefined) {
      // console.log('Soy Filter:' + objArr[0].meals);
      setMeals(objArr[0].meals);
      setRender(true);
    }
  };

  return (
    <div id="filter-container">
      <input type="text" placeholder="Find Recipe" onChange={(e) => findMeal(e)} />
      {render === true ? (
        <Redirect
          from="*"
          to={{
            pathname: '/finded',
            state: { meals },
          }}
        />
      ) : null}
    </div>
  );
};
