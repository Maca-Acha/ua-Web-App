import {combineReducers} from "redux";
import reducer from "./reducer";
import cursosReducer from "./cursosReducer"

const mainReducer = combineReducers({
    reducer,
    cursosReducer
})

export default mainReducer