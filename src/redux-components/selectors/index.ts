import { useSelector } from "react-redux";
import { IStateType } from "../store";

export const useValueSelector = () => useSelector((state: IStateType) => state.value);

export const useIsLoggedSelector = () => useSelector((state: IStateType) => state.isLogged);

export const useLanguageSelector = () => useSelector((state: IStateType) => state.language);

export const usePageSelector = () => useSelector((state: IStateType) => state.page);

export const useSubjectsSelector = () => useSelector((state: IStateType) => state.subjects);