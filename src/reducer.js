const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true };
  }
  // case "SET_PHOTO":
  //   return {...state}
};

export default reducer;
