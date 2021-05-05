import { CONST_TEXT } from "./const-text";
import { useLanguageSelector } from "../redux-components";

export const useTranslator = () => {
    return CONST_TEXT[useLanguageSelector()]
}