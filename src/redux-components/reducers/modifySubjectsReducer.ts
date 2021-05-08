import { Reducer } from "redux";
import { ModifySubjectsTypes, IModifySubjects, ISubject } from "../actions";

const initialState: ISubject[] = [
    {
        title: "CS 135",
        items: [
            {
                title: "Assignment 1",
                point: 20.0,
                fullPoint: 25.0,
                weight: 10.0,
            },
        ],
    },
    {
        title: "CS 135",
        items: [
            {
                title: "Assignment 1",
                point: 20.0,
                fullPoint: 25.0,
                weight: 10.0,
            },
        ],
    },
];

export const modifySubjectsReducer: Reducer<ISubject[], IModifySubjects> = (oldState = initialState, action) => {
    let { value, type } = action;
    switch (type) {
      case ModifySubjectsTypes.ADD_SUBJECT:
        return { ...oldState, value };
      case ModifySubjectsTypes.REMOVE_SUBJECT:
        const newState = oldState.filter(subject => subject.title !== value.title);
        return newState;
      default:
        return oldState;
    }
  };