/* eslint-disable arrow-parens */
const SetCategories = () => ({
  type: 'SET_CATEGORIES',
});

const SetRandom = () => ({
  type: 'SET_RANDOM',
});

const FindMeal = (name) => ({
  type: 'FIND_MEAL',
  name,
});
export { SetCategories, SetRandom, FindMeal };
