const initialState = {
    state:[],
    roles: {}

}

const reducer =(state=initialState,action) =>{
    switch(action.type){
        case "ROLES": 
        return{
            ...state,
            roles:action.payload
        }
        default: return state
    }
}

export default reducer