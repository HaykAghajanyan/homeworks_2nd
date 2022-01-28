import {combineReducers} from "redux";
import AppDuck from "./appDuck/appDuck";
import UserDuck from "./userDuck";

export const rootReducer = combineReducers({
    AppDuck, UserDuck
});