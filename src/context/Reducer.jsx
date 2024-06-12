const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_COMPONENT":
      return { ...state, toggleComponent: true }
    case "HIDE_COMPONENT":
      return { ...state, toggleComponent: false }
  }
};

export default reducer;
