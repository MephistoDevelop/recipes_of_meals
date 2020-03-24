import React from 'react';

const fillRandom = () => {
  const obj = []
  for (let i = 0; i < 8; i += 1) {
    obj.push((
      <div className="random-item-container">
        <div className="img-random-container hover01">
          <figure>
            <img className="img-thumbnail random-img" src="https://www.themealdb.com/images/category/beef.png" />
          </figure>
        </div>
        <div className="title-random-container">Title {i}</div>
      </div>
    ))
  }
  return obj;
};
export const RandomList = () => {
  return (
    <div id="random-list-container" className="justify-content-center col">
      <div id="random-header">Random Recipes</div>
      <div className="d-flex">{fillRandom()}</div>

    </div>
  );
};