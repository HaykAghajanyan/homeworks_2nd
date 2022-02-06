import {combineReducers} from "redux";
import AppDuck from "./ducks/appDuck";
import ConfigsDuck from "./ducks/configsDuck";
import MessageDuck from "./ducks/messageDuck";
import UserDuck from "./ducks/userDuck";


const rootReducer = combineReducers({
    AppDuck,
    ConfigsDuck,
    MessageDuck,
    UserDuck
})

export default rootReducer
