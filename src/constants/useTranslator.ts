import { CONST_TEXT } from "./const-text";
import { CONST_COLOR } from "./const-color";
import { useLanguageSelector } from "../redux-components";

export const useTranslator = () => {
    return { langT: CONST_TEXT[useLanguageSelector()], colorT: CONST_COLOR }
}