export type IActionType = IChangeValue | ILogged | ISetLanguage | ISetPage | IModifySubjects | ISubjectActions;

export interface IChangeValue {
    type: ChangeValueTypes;
    value: number;
};

export enum ChangeValueTypes {
    Increment = "INCREMENT",
    Decrement = "DECREMENT",
};

export interface ILogged {
    type: LoggedTypes;
}

export enum LoggedTypes {
    SIGN_IN = "SIGN_IN",
    SIGN_OUT = "SIGN_OUT",
}

export interface ISetLanguage {
    type: SetLanguageTypes;
    value: ILanguage;
}

export enum SetLanguageTypes {
    SET_LANGUAGE = "SET_LANGUAGE",
}

export enum ILanguage {
    EN = "English",
    CN_SI = "Chinese_Simplified",
    CN_TR = "Chinese_Traditional",
    JP = "Japanese",
}

export interface ISetPage {
    type: SetPageTypes,
    value: IPage,
}

export enum SetPageTypes {
    SET_PAGE = "SET_PAGE",
}

export enum IPage {
    CALCULATION = "CALCULATION",
    TERM = "TERM",
    HISTORY = "HISTORY",
}

export interface IModifySubjects {
    type: ModifySubjectsTypes,
    value: {
        subject?: ISubject,
        item?: {
            index: number,
            item: ISubjectItem,
        },
    },
}

type ISubjectActions = IAddSubject | IRemoveSubject;

export interface IAddSubject {
    type: ModifySubjectsTypes;
    value: ISubject;
}

export interface IRemoveSubject {
    type: ModifySubjectsTypes;
    value: number[];
}

export interface IAddItem {
    type: ModifySubjectsTypes;
    value: {
        index: number,
        item: ISubjectItem,
    }
}

export enum ModifySubjectsTypes {
    ADD_SUBJECT = "ADD_SUBJECT",
    REMOVE_SUBJECT = "REMOVE_SUBJECT",
    ADD_ITEM = "ADD_ITEM",
}

export interface ISubject {
    title: string,
    items: ISubjectItem[],
}

export interface ISubjectItem {
    title: string,
    points: number,
    fullPoints: number,
    weight: number,
}

