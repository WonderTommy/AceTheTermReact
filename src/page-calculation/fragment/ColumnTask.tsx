import { FunctionComponent } from "react";
import { ItemTask } from "../component";
import { useSubjectSelector } from "../../redux-components";
import { useTranslator } from "../../constants";

export interface IColumnTask {
    subjectIndex: number;
}

export const ColumnTask: FunctionComponent<IColumnTask> = ({ subjectIndex }) => {
    const itemTasksData = useSubjectSelector(subjectIndex);
    const translator = useTranslator();

    const itemTasks = itemTasksData ? itemTasksData.items.map((value, index) => <ItemTask index={index} { ...value }/>) : [];

    const columnContent = (
        <div style={{ display: "flex", flexDirection: "column", paddingTop: 4, paddingLeft: 12, paddingRight: 12 }}>
            <div style={{ display: "flex", flexDirection: "row", paddingBottom: 8 }}>
                <div style={{ fontSize: 24, fontWeight: "bold" }}>
                    {itemTasksData ? itemTasksData.title : ""}
                </div>
            </div>
            {itemTasks.length > 0 ? itemTasks : (
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", fontSize: 20, fontWeight: "bold", color: "gray" }}>
                    {translator.MESSAGE_NO_TASK_TO_SHOW}
                </div>
            )}
        </div>
    );
    const emptyPage = (
        <div>
            nothing
        </div>
    );

    return (
        <div style={{ width: 400 }}>
            {itemTasksData ? columnContent : emptyPage}
        </div>
    );
};