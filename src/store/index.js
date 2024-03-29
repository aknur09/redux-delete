import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";
import coffeeReducer from "./reducers/asyncActions/coffeeReducer";

const root= combineReducers({
    counterStore : counterReducer, 
    todos : todoReducer,
    coffee : coffeeReducer
})
const store=createStore(root)

export default store;