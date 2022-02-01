import {createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReduce from ".";

export const store = createStore(rootReduce,composeWithDevTools())