import { ILanguage } from "../actions";

export interface IStateType {
    value: number;
    isLogged: boolean;
    language: ILanguage;
};