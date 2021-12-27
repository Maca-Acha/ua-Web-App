const initialState = {
  state: [],
  usuario: {},
  roles: {},
};

const reducer = (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case "USUARIO":
      return {
        ...state,
        usuario: action.payload,
      };
    case "ROLES":
      return {
        ...state,
        roles: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
