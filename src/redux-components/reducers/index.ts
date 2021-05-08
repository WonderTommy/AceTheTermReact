import { counterReducer } from "./counterReducer";
import { isLoggedReducer } from "./isLoggedReducer";
import { setLanguageReducer } from "./setLanguageReducer";
import { setPageReducer } from "./setPageReducer";
import { modifySubjectsReducer } from "./modifySubjectsReducer";
import { combineReducers } from "redux";
import { IStateType } from "../store";

export const combinedReducers = combineReducers<IStateType>({
    value: counterReducer,
    isLogged: isLoggedReducer,
    language: setLanguageReducer,
    page: setPageReducer,
    subjects: modifySubjectsReducer,
});

export * from "./counterReducer";
export * from "./isLoggedReducer";
