import { Reducer } from "redux";
import { ModifySubjectsTypes, IModifySubjects, ISubject } from "../actions";

const initialState: ISubject[] = [
    {
        title: "CS 135",
        items: [
            {
                title: "Assignment 1",
                points: 20.0,
                fullPoints: 25.0,
                weight: 10.0,
            },
            {
                title: "Assignment 2",
                points: 18.0,
                fullPoints: 20.0,
                weight: 10.0,
            },
        ],
    },
    {
        title: "CS 136",
        items: [
            {
                title: "Assignment 1",
                points: 20.0,
                fullPoints: 25.0,
                weight: 10.0,
            },
        ],
    },
    {
        title: "CS 240",
        items: [],
    }
];

export const modifySubjectsReducer: Reducer<ISubject[], IModifySubjects> = (oldState = initialState, action) => {
    let { value, type } = action;
    var newState = [ ...oldState ];
    switch (type) {
      case ModifySubjectsTypes.ADD_SUBJECT:
        newState.push(value.subject!)
        return newState;
      case ModifySubjectsTypes.REMOVE_SUBJECT:
        newState = oldState.filter(subject => subject.title !== value.subject!.title);
        return newState;
      case ModifySubjectsTypes.ADD_ITEM:
        newState[value.item!.index].items.push(value.item!.item);
        return newState;
      default:
        return oldState;
    }
  };