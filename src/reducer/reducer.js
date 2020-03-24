const initialState = {
  counter: 0,
  recipes: []
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'INCREASE':
      newState.counter += 1;
      break;

    case 'DECREASE':
      newState.counter -= 1;
      break;
    default:
      return newState;
  }
  return newState;
}

export default reducer;