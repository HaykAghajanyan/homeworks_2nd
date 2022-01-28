import {createStore} from "redux";
import {rootReducer} from "./Ducks";


export const Store = createStore(rootReducer)
