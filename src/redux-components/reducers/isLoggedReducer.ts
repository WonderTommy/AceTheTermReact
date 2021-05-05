import { Reducer } from "redux";
import { ILogged, LoggedTypes } from "../actions";

const initialState: boolean = false;

export const isLoggedReducer: Reducer<boolean, ILogged> = (oldState = initialState, action) => {
  switch (action.type) {
    case LoggedTypes.SIGN_IN:
      return true;
    case LoggedTypes.SIGN_OUT:
      return false;
    default:
      return oldState;
  }
};