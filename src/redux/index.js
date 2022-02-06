import { combineReducers } from "redux";
import ConfigDuck from './ducks/configsDuck'
import AppDuck from './ducks/appDuck'

const rootReducer = combineReducers({
    AppDuck,
    ConfigDuck

}) 
export default rootReducer