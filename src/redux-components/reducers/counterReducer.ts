import { Reducer } from "redux";
import { IChangeValue, ChangeValueTypes } from "../actions";

const initialState: number = -1

export const counterReducer: Reducer<number, IChangeValue> = (oldState = initialState, action) => {
    let { value, type } = action;
    switch (type) {
      case ChangeValueTypes.Increment:
        return oldState += value;
      case ChangeValueTypes.Decrement:
        return oldState -= value;
      default:
        return oldState;
    }
  };