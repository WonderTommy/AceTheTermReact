import { Reducer } from "redux";
import { ISetLanguage, SetLanguageTypes } from "../actions";
import { ILanguage } from "../actions";

const initialState: ILanguage = ILanguage.EN;

export const setLanguageReducer: Reducer<ILanguage, ISetLanguage> = (oldState = initialState, action) => {
    let { value, type } = action;
    switch (type) {
        case SetLanguageTypes.SET_LANGUAGE:
            return value;
        default:
            return oldState;
  }
};