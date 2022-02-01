import { combineReducers } from "redux";
import AppDuck from "./ducks/appDuck";
import MessagesDuck from "./ducks/messagesDuck";
import AuthDuck from "./ducks/authDuck";


const rootReduce = combineReducers({
    AppDuck,
    MessagesDuck,
    AuthDuck
})

export default rootReduce