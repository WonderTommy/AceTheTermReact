import { Reducer } from "redux";
import { IPage, ISetPage, SetPageTypes } from "../actions";

const initialState: IPage = IPage.CALCULATION;

export const setPageReducer: Reducer<IPage, ISetPage> = (oldState = initialState, action) => {
    let { value, type } = action;
    switch (type) {
        case SetPageTypes.SET_PAGE:
            return value;
        default:
            return oldState;
  }
};