const initialState = {
  counter: 0,
  recipes: [],
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'SET_CATEGORIES':
      newState.categories = { ...state, ok: "good" };
      break;

    case 'DECREASE':
      newState.counter -= 1;
      break;
    case 'SET_MEAL':

      break;
    default:
      return newState;
  }
  return newState;
};

export default reducer;
