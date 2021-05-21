import { FunctionComponent, useState, useEffect } from "react";
import { DialogNewSubject, ItemSubject } from "../component";
import { dispatch, SubjectActionTypes, useSubjectTitlesSelector } from "../../redux-components";
import { FlexibleList } from "../../mod-flexible_list";
import { AlertDialog } from "../../mod-alert_dialog";
import { useTranslator } from "../../constants";

export interface IColumnSubject {
    setSelectedIndex: (index: number) => () => void;
}

export const ColumnSubject: FunctionComponent<IColumnSubject> = ({ setSelectedIndex }) => {
    const [checkedIndex, setCheckedIndex] = useState<number[]>([]);

    // const [editMode, setEditMode] = useState<boolean>(false);
    const [openNewSubjectDialog, setOpenNewSubjectDialog] = useState<boolean>(false);
    const [openSubjectAlertDialog, setOpenSubjectAlertDialog] = useState<boolean>(false);
    const [openConfirmDeleteDialog, setOpenConfirmDeleteDialog] = useState<boolean>(false);
    const subjectTitles = useSubjectTitlesSelector();

    const { langT } = useTranslator();

    const handleDelete = (selectedIndex: number[]) => {
        // console.log(checkedIndex);
        setCheckedIndex(selectedIndex);
        if (selectedIndex.length > 0) {
            setOpenConfirmDeleteDialog(true);
        } else {
            setOpenSubjectAlertDialog(true);
        }
    }

    const dispatchDelete = () => {
        dispatch({
            type: SubjectActionTypes.REMOVE_SUBJECT,
            value: checkedIndex,
        });
    };

    const handleClickOpen = () => {
        setOpenNewSubjectDialog(true);
    };

    const itemSubjects = subjectTitles.map(({ title, index }) => <ItemSubject title={title} key={index}/>);
    return (
        <div style={{ display: "flex", flexDirection: "column", paddingRight: 12 }}>
            {/* <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div>
                    {AddButton}
                    {EditButton}
                </div>
                <div>
                    <div style={{ display: editMode ? "flex" : "none" }}>
                        {DeleteButton}
                    </div>
                </div>
            </div> */}
            {/* {itemSubjects} */}

            <FlexibleList hasEditMode={true} width={240} elements={itemSubjects} onSelect={setSelectedIndex} onAddItem={handleClickOpen} onDeleteItem={handleDelete}/>
            <DialogNewSubject openDialog={openNewSubjectDialog} closeDialog={() => { setOpenNewSubjectDialog(false) }}/>
            <AlertDialog message={langT.ALERT_MESSAGE_SELECT_AT_LEAST_ONE_ITEM_TO_DELETE} okButtonLabel={langT.ALERT_BUTTON_OK} open={openSubjectAlertDialog} closeDialog={ () => { setOpenSubjectAlertDialog(false) } } onSave={() => { setOpenSubjectAlertDialog(false) }}/>
            <AlertDialog message={langT.ALERT_MESSAGE_CONFIRM_DELETE} okButtonLabel={langT.ALERT_BUTTON_OK} cancelButtonLabel={langT.DIALOG.BUTTON_CANCEL} open={openConfirmDeleteDialog} closeDialog={ () => { setOpenConfirmDeleteDialog(false) }} onSave={dispatchDelete}/>
        </div>
    );
};