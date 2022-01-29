import {combineReducers} from "redux";
import userDuck from "./ducks/userDuck";
import messageDuck from "./ducks/messageDuck";


const reducers = combineReducers({
    userDuck,
    messageDuck
})

export default reducers
