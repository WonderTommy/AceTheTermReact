import { ILanguage } from "../redux-components";

interface ITranslation {
    BUTTON: {
        CALCULATION: string,
        TERM: string,
        HISTORY: string,
        LANGUAGE: string,
    },
    DIALOG: {
        TITLE_ADD_SUBJECT: string,
        TEXT_FIELD_LABEL_SUBJECT: string,
        TEXT_FIELD_DEFAULT_SUBJECT: string,
        TITLE_ADD_ITEM: string,
        TEXT_FIELD_LABEL_ITEM_NAME: string,
        TEXT_FIELD_LABEL_POINTS: string,
        TEXT_FIELD_LABEL_FULL_POINTS: string,
        TEXT_FIELD_LABEL_WEIGHT: string,
        BUTTON_SAVE: string,
        BUTTON_CANCEL: string,
    },
    LANGUAGE_LABEL: string,
    LANGUAGE_LIST_LABELS: { [key in ILanguage]: string },
    ALERT_BUTTON_OK: string,
    ALERT_MESSAGE_CONFIRM_DELETE: string,
    ALERT_MESSAGE_SAVE_RESULT_TO_HISTORY: string,
    ALERT_MESSAGE_SELECT_AT_LEAST_ONE_FOLDER: string,
    ALERT_MESSAGE_SELECT_AT_LEAST_ONE_ITEM_TO_DELETE: string,
    ALERT_MESSAGE_SELECT_AT_LEAST_ONE_SUBJECT: string,
    CALCULATION_ITEM_LABEL_FULL_POINTS: string,
    CALCULATION_ITEM_LABEL_POINTS: string,
    CALCULATION_ITEM_LABEL_WEIGHT: string,
    MESSAGE_NO_TASK_TO_SHOW: string,
    MESSAGE_NO_SUBJECT_SELECTED: string,
    MESSAGE_NO_RESULT_TO_SHOW: string,
    TEXT_TOTAL: string,
    TEXT_HIGHEST_POSSIBLE: string,
    TEXT_POINTS_LOSG: string,
    TEXT_RESULT_UNDER: string,
    TEXT_RESULT_OVER: string,
    TEXT_RESULT_OK: string,
    TEXT_RESULT: string,
};

export const CONST_TEXT: { [key in ILanguage]: ITranslation } = {
    [ILanguage.EN]: {
        BUTTON: {
            CALCULATION: "Calculation",
            TERM: "Term",
            HISTORY: "History",
            LANGUAGE: "Language",
        },
        DIALOG: {
            TITLE_ADD_SUBJECT: "New Subject",
            TEXT_FIELD_LABEL_SUBJECT: "Subject",
            TEXT_FIELD_DEFAULT_SUBJECT: "Not Named",
            TITLE_ADD_ITEM: "New Item",
            TEXT_FIELD_LABEL_ITEM_NAME: "Item Name",
            TEXT_FIELD_LABEL_POINTS: "Points",
            TEXT_FIELD_LABEL_FULL_POINTS: "Full Points",
            TEXT_FIELD_LABEL_WEIGHT: "Weight",
            BUTTON_SAVE: "Save",
            BUTTON_CANCEL: "Cancel",
        },
        LANGUAGE_LABEL: "English",
        LANGUAGE_LIST_LABELS: {
            [ILanguage.EN]: "English",
            [ILanguage.CN_SI]: "Chinese (Simplified)",
            [ILanguage.CN_TR]: "Chinese (Traditional)",
            [ILanguage.JP]: "Japanese",
        },
        ALERT_BUTTON_OK: "OK",
        ALERT_MESSAGE_CONFIRM_DELETE: "Are you sure to delete selected items?",
        ALERT_MESSAGE_SAVE_RESULT_TO_HISTORY: "Would you like to save the result to history page?",
        ALERT_MESSAGE_SELECT_AT_LEAST_ONE_FOLDER: "Please select at least one folder to save to",
        ALERT_MESSAGE_SELECT_AT_LEAST_ONE_ITEM_TO_DELETE: "Please select at least one item to delete",
        ALERT_MESSAGE_SELECT_AT_LEAST_ONE_SUBJECT: "Please select at least one subject to save",
        CALCULATION_ITEM_LABEL_FULL_POINTS: "Full Points: ",
        CALCULATION_ITEM_LABEL_POINTS: "Points: ",
        CALCULATION_ITEM_LABEL_WEIGHT: "Weight: ",
        MESSAGE_NO_TASK_TO_SHOW: "NO ITEM TO DISPLAY",
        MESSAGE_NO_SUBJECT_SELECTED: "NO SUBJECT SELECTED",
        MESSAGE_NO_RESULT_TO_SHOW: "NO RESULT TO SHOW",
        TEXT_TOTAL: "Total",
        TEXT_HIGHEST_POSSIBLE: "Highest Possible",
        TEXT_POINTS_LOSG: "Percentage Lost",
        TEXT_RESULT_UNDER: "The total percentage is under 100%",
        TEXT_RESULT_OVER: "The total percentage is over 100%",
        TEXT_RESULT_OK: "The total percentage is 100%",
        TEXT_RESULT: "Result",
    },
    [ILanguage.CN_SI]: {
        BUTTON: {
            CALCULATION: "计算",
            TERM: "学期",
            HISTORY: "历史",
            LANGUAGE: "语言",
        },
        DIALOG: {
            TITLE_ADD_SUBJECT: "添加科目",
            TEXT_FIELD_LABEL_SUBJECT: "科目",
            TEXT_FIELD_DEFAULT_SUBJECT: "未命名",
            TITLE_ADD_ITEM: "添加项目",
            TEXT_FIELD_LABEL_ITEM_NAME: "项目名称",
            TEXT_FIELD_LABEL_POINTS: "得分",
            TEXT_FIELD_LABEL_FULL_POINTS: "满分",
            TEXT_FIELD_LABEL_WEIGHT: "权重",
            BUTTON_SAVE: "保存",
            BUTTON_CANCEL: "取消",
        },
        LANGUAGE_LABEL: "简体中文",
        LANGUAGE_LIST_LABELS: {
            [ILanguage.EN]: "英语",
            [ILanguage.CN_SI]: "简体中文",
            [ILanguage.CN_TR]: "繁体中文",
            [ILanguage.JP]: "日语",
        },
        ALERT_BUTTON_OK: "知道了",
        ALERT_MESSAGE_CONFIRM_DELETE: "确定要删除选中的项目吗？",
        ALERT_MESSAGE_SAVE_RESULT_TO_HISTORY: "是否将此次计算结果保存至历史？",
        ALERT_MESSAGE_SELECT_AT_LEAST_ONE_FOLDER: "请选择至少一个文件夹",
        ALERT_MESSAGE_SELECT_AT_LEAST_ONE_ITEM_TO_DELETE: "请选择至少一个要删除的项目",
        ALERT_MESSAGE_SELECT_AT_LEAST_ONE_SUBJECT: "请选择至少一个要保存科目",
        CALCULATION_ITEM_LABEL_FULL_POINTS: "满分：",
        CALCULATION_ITEM_LABEL_POINTS: "得分：",
        CALCULATION_ITEM_LABEL_WEIGHT: "权重：",
        MESSAGE_NO_TASK_TO_SHOW: "没有可以展示的项目",
        MESSAGE_NO_SUBJECT_SELECTED: "没有选中的科目",
        MESSAGE_NO_RESULT_TO_SHOW: "没有刻意显示的结果",
        TEXT_TOTAL: "总分",
        TEXT_HIGHEST_POSSIBLE: "最高可能分",
        TEXT_POINTS_LOSG: "失分",
        TEXT_RESULT_UNDER: "权重总和低于100%",
        TEXT_RESULT_OVER: "权重总和高于100%",
        TEXT_RESULT_OK: "权重总和为100%",
        TEXT_RESULT: "结果",
    },
    [ILanguage.CN_TR]: {
        BUTTON: {
            CALCULATION: "計算",
            TERM: "學期",
            HISTORY: "歷史",
            LANGUAGE: "語言",
        },
        DIALOG: {
            TITLE_ADD_SUBJECT: "添加科目",
            TEXT_FIELD_LABEL_SUBJECT: "科目",
            TEXT_FIELD_DEFAULT_SUBJECT: "未命名",
            TITLE_ADD_ITEM: "添加項目",
            TEXT_FIELD_LABEL_ITEM_NAME: "項目名",
            TEXT_FIELD_LABEL_POINTS: "得分",
            TEXT_FIELD_LABEL_FULL_POINTS: "滿分",
            TEXT_FIELD_LABEL_WEIGHT: "權重",
            BUTTON_SAVE: "保存",
            BUTTON_CANCEL: "取消",
        },
        LANGUAGE_LABEL: "繁體中文",
        LANGUAGE_LIST_LABELS: {
            [ILanguage.EN]: "英語",
            [ILanguage.CN_SI]: "簡體中文",
            [ILanguage.CN_TR]: "繁體中文",
            [ILanguage.JP]: "日語",
        },
        ALERT_BUTTON_OK: "知道了",
        ALERT_MESSAGE_CONFIRM_DELETE: "確定要刪除選中的項目嗎？",
        ALERT_MESSAGE_SAVE_RESULT_TO_HISTORY: "是否將此次計算結果保存之歷史？",
        ALERT_MESSAGE_SELECT_AT_LEAST_ONE_FOLDER: "請選擇至少一個文件夾",
        ALERT_MESSAGE_SELECT_AT_LEAST_ONE_ITEM_TO_DELETE: "請選擇至少一個要刪除的項目",
        ALERT_MESSAGE_SELECT_AT_LEAST_ONE_SUBJECT: "請選擇至少一個要刪除的科目",
        CALCULATION_ITEM_LABEL_FULL_POINTS: "滿分：",
        CALCULATION_ITEM_LABEL_POINTS: "得分：",
        CALCULATION_ITEM_LABEL_WEIGHT: "權重：",
        MESSAGE_NO_TASK_TO_SHOW: "沒有可以展示的項目",
        MESSAGE_NO_SUBJECT_SELECTED: "沒有選中的科目",
        MESSAGE_NO_RESULT_TO_SHOW: "沒有可以展示的結果",
        TEXT_TOTAL: "總分",
        TEXT_HIGHEST_POSSIBLE: "最高可能分",
        TEXT_POINTS_LOSG: "失分",
        TEXT_RESULT_UNDER: "權重總和低於100%",
        TEXT_RESULT_OVER: "權重總和高於100%",
        TEXT_RESULT_OK: "權重總和為100%",
        TEXT_RESULT: "結果",
    },
    [ILanguage.JP]: {
        BUTTON: {
            CALCULATION: "計算",
            TERM: "学期",
            HISTORY: "歴史",
            LANGUAGE: "言語",
        },
        DIALOG: {
            TITLE_ADD_SUBJECT: "新規科目",
            TEXT_FIELD_LABEL_SUBJECT: "科目",
            TEXT_FIELD_DEFAULT_SUBJECT: "名前なし",
            TITLE_ADD_ITEM: "新規項目",
            TEXT_FIELD_LABEL_ITEM_NAME: "名前",
            TEXT_FIELD_LABEL_POINTS: "点数",
            TEXT_FIELD_LABEL_FULL_POINTS: "満点",
            TEXT_FIELD_LABEL_WEIGHT: "パーセンテージ",
            BUTTON_SAVE: "保存",
            BUTTON_CANCEL: "キャンセル",
        },
        LANGUAGE_LABEL: "日本語",
        LANGUAGE_LIST_LABELS: {
            [ILanguage.EN]: "英語",
            [ILanguage.CN_SI]: "中国語（簡体字）",
            [ILanguage.CN_TR]: "中国語（繁体字）",
            [ILanguage.JP]: "日本語",
        },
        ALERT_BUTTON_OK: "分かりました",
        ALERT_MESSAGE_CONFIRM_DELETE: "選んだアイテームを消しますか？",
        ALERT_MESSAGE_SAVE_RESULT_TO_HISTORY: "計算結果を履歴ページに保存しますか？",
        ALERT_MESSAGE_SELECT_AT_LEAST_ONE_FOLDER: "保存にしたいファイルを選んでください",
        ALERT_MESSAGE_SELECT_AT_LEAST_ONE_ITEM_TO_DELETE: "消したいアイテームを選んでください",
        ALERT_MESSAGE_SELECT_AT_LEAST_ONE_SUBJECT: "保存したい科目を選んでください",
        CALCULATION_ITEM_LABEL_FULL_POINTS: "満点：",
        CALCULATION_ITEM_LABEL_POINTS: "点数：",
        CALCULATION_ITEM_LABEL_WEIGHT: "パーセンテージ: ",
        MESSAGE_NO_TASK_TO_SHOW: "展示られる項目がありません",
        MESSAGE_NO_SUBJECT_SELECTED: "選んだ科目がありません",
        MESSAGE_NO_RESULT_TO_SHOW: "展示られる結果がありません",
        TEXT_TOTAL: "合計",
        TEXT_HIGHEST_POSSIBLE: "最高可能点数",
        TEXT_POINTS_LOSG: "失った点数",
        TEXT_RESULT_UNDER: "現在の合計パーセンテージは100%以下",
        TEXT_RESULT_OVER: "現在の合計パーセンテージは100%以上",
        TEXT_RESULT_OK: "現在の合計パーセンテージは 100%",
        TEXT_RESULT: "結果",
    },
}