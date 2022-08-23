import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { pokesReducer } from "./pokes/reducer";
import { typesReducer } from "./types/reducer";


const rootReducer = combineReducers({
    pokes: pokesReducer,
    types: typesReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));