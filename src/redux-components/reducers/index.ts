import { counterReducer } from "./counterReducer";
import { isLoggedReducer } from "./isLoggedReducer";
import { setLanguageReducer } from "./setLanguageReducer";
import { combineReducers } from "redux";
import { IStateType } from "../store";

export const combinedReducers = combineReducers<IStateType>({
    value: counterReducer,
    isLogged: isLoggedReducer,
    language: setLanguageReducer,
});

export * from "./counterReducer";
export * from "./isLoggedReducer";
