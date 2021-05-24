import { useSelector } from "react-redux";
import { IStateType } from "../store";

export const useValueSelector = () => useSelector((state: IStateType) => state.value);

export const useIsLoggedSelector = () => useSelector((state: IStateType) => state.isLogged);

export const useLanguageSelector = () => useSelector((state: IStateType) => state.language);

export const usePageSelector = () => useSelector((state: IStateType) => state.page);

export const useSubjectsSelector = () => useSelector((state: IStateType) => state.subjects);

export const useSubjectSelector = (index: number) => useSubjectsSelector()[index]; //useSelector((state: IStateType) => index < 0 ? null : state.subjects[index]);

export const useSubjectTitlesSelector = () => useSelector((state: IStateType) => state.subjects.map((value, index) => ({ title: value.title, index: index })));

export const useTaskSelector = (subjectIndex: number, taskIndex: number) => useSelector((state: IStateType) => taskIndex > -1 ? state.subjects[subjectIndex].items[taskIndex] : undefined);
