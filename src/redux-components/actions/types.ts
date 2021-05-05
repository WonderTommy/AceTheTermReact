export type IActionType = IChangeValue | ILogged;

export interface IChangeValue {
    type: ChangeValueTypes,
    value: number;
};

export enum ChangeValueTypes {
    Increment = "INCREMENT",
    Decrement = "DECREMENT",
};

export interface ILogged {
    type: LoggedTypes
}

export enum LoggedTypes {
    SIGN_IN = "SIGN_IN",
    SIGN_OUT = "SIGN_OUT",
}

