import { counterReducer } from "./counterReducer";
import { isLoggedReducer } from "./isLoggedReducer";
import { combineReducers } from "redux";
import { IStateType } from "../store";

export const combinedReducers = combineReducers<IStateType>({
    value: counterReducer,
    isLogged: isLoggedReducer,
});

export * from "./counterReducer";
export * from "./isLoggedReducer";
