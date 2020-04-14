import React from 'react';
import { useLocation } from 'react-router-dom';

const RecipeDetails = () => {
  const location = useLocation();
  const { meal } = location.state || { meal: [] };

  const getIngredients = meal => {
    const objArr = [];
    for (let i = 1; i < 19; i += 1) {
      if (meal[`strIngredient${i}`] !== '') {
        objArr.push(
          <tr key={i}>
            <td>{meal[`strIngredient${i}`]}</td>
            <td>{meal[`strMeasure${i}`]}</td>
          </tr>,
        );
      }
    }
    return objArr;
  };

  return (
    <div>
      <div id="header-container" className="d-flex justify-content-center mt-5">
        <div id="image-details-container" className="mr-5">
          <img alt="delicious meal" id="img-details" src={meal.strMealThumb} />
          <div id="meal-name">
            {meal.strMeal}
          </div>
          <div id="meal-category">
            Category:
            {meal.strCategory}
          </div>
        </div>
        <div id="ingredients-container">
          <div className="d-flex col">
            <table>
              <tbody>
                <tr>
                  <th>Ingredient</th>
                  <th>Measure</th>
                </tr>
                {getIngredients(meal)}
              </tbody>
            </table>
          </div>
          <div />
        </div>
      </div>
      <div id="instructions-container">
        <p>Instrucions:</p>
        {' '}
        {meal.strInstructions}
      </div>
      <div id="video-container" className="mt-5">
        <iframe title="video-meal" id="player" type="text/html" width="640" height="390"
          src={meal.strYoutube.replace("watch?v=", "embed/") + '?enablejsapi=1&origin=http://example.com'}
          frameBorder="0"></iframe>
      </div>
    </div >
  );
};

export default RecipeDetails;
