import { Reducer } from "redux";
import { SubjectActionTypes, ISubjectActions, ISubjectItem, ISubject } from "../actions";

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
                points: 17.222222,
                fullPoints: 25.0,
                weight: 10.0,
            },
            {
                title: "Assignment 3",
                points: 23,
                fullPoints: 25.0,
                weight: 10.0,
            },
            {
                title: "Midterm",
                points: 36,
                fullPoints: 40,
                weight: 30
            },
            {
                title: "Final",
                points: 79,
                fullPoints: 100,
                weight: 40,
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
            {
                title: "Assignment 2",
                points: 17.222222,
                fullPoints: 25.0,
                weight: 10.0,
            },
            {
                title: "Assignment 3",
                points: 23,
                fullPoints: 25.0,
                weight: 10.0,
            },
            {
                title: "Midterm",
                points: 36,
                fullPoints: 40,
                weight: 30
            },
        ],
    },
    {
        title: "CS 240",
        items: [],
    }
];

export const modifySubjectsReducer: Reducer<ISubject[], ISubjectActions> = (oldState = initialState, action) => {
    let { value, type } = action;
    var actionValue = value;
    var newState = [ ...oldState ];
    switch (type) {
      case SubjectActionTypes.ADD_SUBJECT:
        newState.push(value as ISubject);
        return newState;
      case SubjectActionTypes.REMOVE_SUBJECT:
        actionValue = (value as number[]).sort((a, b) => {
            if (a < b) {
                return 1;
            } else if (a > b) {
                return -1;
            } else {
                return 0;
            }
        });
        // newState = oldState.filter(subject => subject.title !== value.subject!.title);
        actionValue.forEach((value) => {
            oldState.splice(value, 1);
        });
        newState = [...oldState];
        return newState;
      case SubjectActionTypes.ADD_ITEM:
        const { index, item } = value as { index: number, item: ISubjectItem };
        newState[index].items.push(item);
        return newState;
      case SubjectActionTypes.REMOVE_ITEM:
        const { index: subjectIndex, itemIndex } = value as { index: number, itemIndex: number[] };
        const selectedIndex = itemIndex.sort((a, b) => {
            if (a < b) {
                return 1;
            } else if (a > b) {
                return -1;
            } else {
                return 0;
            }
        });
        newState = [...oldState]
        selectedIndex.forEach((value) => {
            newState[subjectIndex].items.splice(value, 1);
        });
        return newState;
      case SubjectActionTypes.MODIFY_ITEM:
        actionValue = value as { index: number, itemIndex: number, newItem: ISubjectItem };
        newState[actionValue.index].items[actionValue.itemIndex] = actionValue.newItem;
        return newState;
      default:
        return oldState;
    }
  };