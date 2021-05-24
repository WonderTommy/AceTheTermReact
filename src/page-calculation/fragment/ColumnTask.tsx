import { FunctionComponent, useState } from "react";
import { DialogNewTask, ItemTask } from "../component";
import { dispatch, SubjectActionTypes, useSubjectSelector } from "../../redux-components";
import { useTranslator } from "../../constants";
import { FlexibleList } from "../../mod-flexible_list";
import { AlertDialog } from "../../mod-alert_dialog";

export interface IColumnTask {
    subjectIndex: number;
}

export const ColumnTask: FunctionComponent<IColumnTask> = ({ subjectIndex }) => {
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const [openModifyDialog, setOpenModifyDialog] = useState<boolean>(false);
    const [openSelectedNothing, setOpenSelectedNothing] = useState<boolean>(false);
    const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState<boolean>(false);

    const [selectedIndex, setSelectedIndex] = useState<number[]>([]);
    const [modifyIndex, setModifyIndex] = useState<number>(-1);

    const itemTasksData = useSubjectSelector(subjectIndex);
    const { langT } = useTranslator();

    const itemTasks = itemTasksData ? itemTasksData.items.map((value, index) => <ItemTask key={index} index={index} { ...value }/>) : [];

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleOnDelete = (indexList: number[]) => {
        setSelectedIndex(indexList);
        if (indexList.length > 0) {
            setOpenDeleteConfirmation(true);
        } else {
            setOpenSelectedNothing(true);
        }
    };

    const dispatchDelete = () => {
        dispatch({
            type: SubjectActionTypes.REMOVE_ITEM,
            value: {
                index: subjectIndex,
                itemIndex: selectedIndex,
            }
        });
    }

    const onEditItemAtIndex = (index: number) => () => {
        setModifyIndex(index);
        setOpenModifyDialog(true);
    };

    const columnContent = (
        <div style={{ display: "flex", flexDirection: "column", paddingTop: 4, paddingLeft: 12, paddingRight: 12 }}>
            {itemTasks.length > 0 ? 
                <FlexibleList onSelect={onEditItemAtIndex} title={itemTasksData ? itemTasksData.title : ""} hasEditMode={true} doSelectOnEditMode={false} width={360} elements={itemTasks} onAddItem={handleClickOpen} onDeleteItem={handleOnDelete}/> : (
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", fontSize: 20, fontWeight: "bold", color: "gray" }}>
                    {langT.MESSAGE_NO_TASK_TO_SHOW}
                </div>
            )}
            <DialogNewTask openDialog={openDialog} closeDialog={() => { setOpenDialog(false) }} subjectIndex={subjectIndex}/>
            <DialogNewTask openDialog={openModifyDialog} closeDialog={() => { setOpenModifyDialog(false) }} subjectIndex={subjectIndex} taskIndex={modifyIndex}/>
            <AlertDialog message={langT.ALERT_MESSAGE_SELECT_AT_LEAST_ONE_ITEM_TO_DELETE} okButtonLabel={langT.ALERT_BUTTON_OK} open={openSelectedNothing} closeDialog={() => { setOpenSelectedNothing(false) }} onSave={() => { setOpenSelectedNothing(false) }}/>
            <AlertDialog message={langT.ALERT_MESSAGE_CONFIRM_DELETE} cancelButtonLabel={langT.DIALOG.BUTTON_CANCEL} okButtonLabel={langT.ALERT_BUTTON_OK} open={openDeleteConfirmation} closeDialog={() => { setOpenDeleteConfirmation(false) }} onSave={dispatchDelete}/>
        </div>
    );
    const emptyPage = (
        <div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: 24, fontSize: 20, fontWeight: "bold", color: "gray" }}>
                {langT.MESSAGE_NO_SUBJECT_SELECTED}
            </div>
        </div>
    );

    return (
        <div style={{ width: 360 }}>
            {itemTasksData ? columnContent : emptyPage}
        </div>
    );
};