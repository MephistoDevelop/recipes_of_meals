import React from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';;
export const RecipeDetails = () => {
  let location = useLocation();
  const meal = location.state.meal;
  console.log(`Imlocaion: ${JSON.stringify(location)}`);
  return (
    <div>
      <img className="img-thumbnail random-img" src={meal.strMealThumb} />
      <div>Meal : <br />{meal.strMeal}</div>
      <div>Category: <br />{meal.strCategory}</div><br />
      <div>Intrucions: <br /> {meal.strInstructions}</div>
      <div>Ingredients: </div>
      <div><ReactPlayer url={meal.strYoutube} /></div>
      <br /><br /><br />
      HelLo Datils {JSON.stringify(location.state.meal)}
    </div>
  );
}