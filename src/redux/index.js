import {combineReducers} from "redux";
import AppDuck from "./ducks/appDuck";
import ConfigsDuck from "./ducks/configsDuck";
import messageDuck from "./ducks/messageDuck";
import usersDuck from "./ducks/usersDuck";


const rootReducer = combineReducers({
    AppDuck,
    ConfigsDuck,
    messageDuck,
    usersDuck
})

export default rootReducer
