import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import messageReducer from "./messageReducer";
import authReducer from "./authReducer";

const persistConfig = {
	key: 'root',
	storage,
}
const rootReducer = combineReducers({
	message: messageReducer,
	auth: authReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))

export const persistor = persistStore(store)

export default store