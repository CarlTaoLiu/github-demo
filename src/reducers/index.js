import { combineReducers } from "redux";
import repos from "./repos";
import login from "./login"
export default combineReducers({
    repos,
    login
})