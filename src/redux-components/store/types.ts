import { ILanguage, IPage, ISubject } from "../actions";

export interface IStateType {
    value: number;
    isLogged: boolean;
    language: ILanguage;
    page: IPage;
    subjects: ISubject[];
};