import { ILanguage } from "../redux-components";

interface ITranslation {
    BUTTON : {
        CALCULATION: string,
        TERM: string,
        HISTORY: string,
        LANGUAGE: string,
    },
    LANGUAGE_LABEL: string,
    LANGUAGE_LIST_LABELS: { [key in ILanguage]: string },
};

export const CONST_TEXT: { [key in ILanguage]: ITranslation } = {
    [ILanguage.EN]: {
        BUTTON: {
            CALCULATION: "Calculation",
            TERM: "Term",
            HISTORY: "History",
            LANGUAGE: "Language",
        },
        LANGUAGE_LABEL: "English",
        LANGUAGE_LIST_LABELS: {
            [ILanguage.EN]: "English",
            [ILanguage.CN_SI]: "Chinese (Simplified)",
            [ILanguage.CN_TR]: "Chinese (Traditional)",
            [ILanguage.JP]: "Japanese",
        },
    },
    [ILanguage.CN_SI]: {
        BUTTON: {
            CALCULATION: "计算",
            TERM: "学期",
            HISTORY: "历史",
            LANGUAGE: "语言",
        },
        LANGUAGE_LABEL: "简体中文",
        LANGUAGE_LIST_LABELS: {
            [ILanguage.EN]: "英语",
            [ILanguage.CN_SI]: "简体中文",
            [ILanguage.CN_TR]: "繁体中文",
            [ILanguage.JP]: "日语",
        },
    },
    [ILanguage.CN_TR]: {
        BUTTON: {
            CALCULATION: "計算",
            TERM: "學期",
            HISTORY: "歷史",
            LANGUAGE: "語言",
        },
        LANGUAGE_LABEL: "繁體中文",
        LANGUAGE_LIST_LABELS: {
            [ILanguage.EN]: "英語",
            [ILanguage.CN_SI]: "簡體中文",
            [ILanguage.CN_TR]: "繁體中文",
            [ILanguage.JP]: "日語",
        },
    },
    [ILanguage.JP]: {
        BUTTON: {
            CALCULATION: "計算",
            TERM: "学期",
            HISTORY: "歴史",
            LANGUAGE: "言語",
        },
        LANGUAGE_LABEL: "日本語",
        LANGUAGE_LIST_LABELS: {
            [ILanguage.EN]: "英語",
            [ILanguage.CN_SI]: "中国語（簡体字）",
            [ILanguage.CN_TR]: "中国語（繁体字）",
            [ILanguage.JP]: "日本語",
        },
    },
}
