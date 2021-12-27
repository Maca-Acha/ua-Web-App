const initialState = {
  state: [],
  usuario: {},
  roles: {},
  token: ""
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
        roles: action.payload.rol,
        token: action.payload.token,
        usuario: action.payload.usuario
      };

    default:
      return state;
  }
};

export default reducer;
