const initialState = {
  state: [],
  usuario: {},
  roles: {},
  usuarios: {}
};

const reducer = (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case "USUARIO":
      return {
        ...state,
        usuario: action.payload,
      };
    case "USUARIOS":
      return {
        ...state,
        usuarios: action.payload,
      };
    case "ROLES":
      return {
        ...state,
        roles: action.payload.rol,
        usuario: action.payload.usuario
      };

    default:
      return state;
  }
};

export default reducer;
