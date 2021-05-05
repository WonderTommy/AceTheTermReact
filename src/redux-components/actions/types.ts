export type IActionType = IChangeValue | ILogged | ISetLanguage;

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

