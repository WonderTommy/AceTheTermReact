import { ILanguage } from "../redux-components";

interface ITranslation {
    BUTTON : {
        CALCULATION: string
    }
};

export const CONST_TEXT: { [key in ILanguage]: ITranslation } = {
    [ILanguage.EN]: {
        BUTTON: {
            CALCULATION: "Calculation"
        }
    },
    [ILanguage.CN_SI]: {
        BUTTON: {
            CALCULATION: "计算"
        }
    },
    [ILanguage.CN_TR]: {
        BUTTON: {
            CALCULATION: "計算"
        }
    },
    [ILanguage.JP]: {
        BUTTON: {
            CALCULATION: "計算"
        }
    },
}
