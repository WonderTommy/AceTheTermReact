import { FunctionComponent, useState, useEffect } from "react";
import { ItemSubject } from "../component";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import { useTranslator } from "../../constants";
import { dispatch, SubjectActionTypes, useSubjectTitlesSelector } from "../../redux-components";
import { FlexibleList } from "../../mod-flexible_list";
import { IconOnlyButton } from "../../mod-icon_only_button";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

export interface IColumnSubject {
    setSelectedIndex: (index: number) => () => void;
}

export const ColumnSubject: FunctionComponent<IColumnSubject> = ({ setSelectedIndex }) => {
    const [checkedIndex, setCheckedIndex] = useState<number[]>([]);

    const [editMode, setEditMode] = useState<boolean>(false);
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const [dialogInputNewSubject, setDialogInputNewSubject] = useState<string>("");
    const { langT } = useTranslator();
    const subjectTitles = useSubjectTitlesSelector();

    useEffect(() => {
        if (!editMode) {
            setCheckedIndex([]);
        }
    }, [editMode]);

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const handleDelete = () => {
        console.log(checkedIndex);
        dispatch({
            type: SubjectActionTypes.REMOVE_SUBJECT,
            value: checkedIndex,
        });
        setEditMode(false);
    }

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
        setDialogInputNewSubject("");
    };

    const handleSave = () => {
        setOpenDialog(false);
        dispatch(
            {
                type: SubjectActionTypes.ADD_SUBJECT,
                value: { title: dialogInputNewSubject === "" ? langT.DIALOG.TEXT_FIELD_DEFAULT_SUBJECT : dialogInputNewSubject, items: [] },
            }
        );
        setDialogInputNewSubject("");
    };

    const onDialogNewSubjectChange = (event: any) => {
        setDialogInputNewSubject(event.target.value ?? "");
    };

    const onToggleChecked = (index: number) => (target: boolean) => {
        var newState = [...checkedIndex];
        if (target) {
            newState.push(index);
        } else {
            newState = checkedIndex.filter(element => element !== index);
        }
        setCheckedIndex(newState);
        // console.log(newState);
    };

    const AddButton = (
        <IconOnlyButton icon={<AddIcon/>} onClick={handleClickOpen}/>
    );

    const EditButton = (
        <IconOnlyButton icon={<EditIcon/>} onClick={toggleEditMode}/>
    );

    const DeleteButton = (
        <IconOnlyButton icon={<DeleteIcon/>} onClick={handleDelete}/>
    );


    const itemSubjects = subjectTitles.map(({ title, index }) => <ItemSubject title={title} key={index}/>);
    return (
        <div style={{ display: "flex", flexDirection: "column", paddingRight: 12 }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div>
                    {AddButton}
                    {EditButton}
                </div>
                <div>
                    <div style={{ display: editMode ? "flex" : "none" }}>
                        {DeleteButton}
                    </div>
                </div>
            </div>
            {/* {itemSubjects} */}

            <FlexibleList editMode={editMode} elements={itemSubjects} onSelect={setSelectedIndex} onToggleChecked={onToggleChecked}/>
            <Dialog open={openDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{langT.DIALOG.TITLE_ADD_SUBJECT}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="standard-required"
                        label={langT.DIALOG.TEXT_FIELD_LABEL_SUBJECT}
                        type="email"
                        fullWidth
                        onChange={onDialogNewSubjectChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary"> {langT.DIALOG.BUTTON_CANCEL} </Button>
                    <Button onClick={handleSave} color="primary"> {langT.DIALOG.BUTTON_SAVE} </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};