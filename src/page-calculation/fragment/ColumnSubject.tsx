import { FunctionComponent, useState } from "react";
import { AddButton, ItemSubject } from "../component";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import { useTranslator } from "../../constants";
import { dispatch, ModifySubjectsTypes, useSubjectTitlesSelector } from "../../redux-components";

export interface IColumnSubject {
    setSelectedIndex: (index: number) => void;
}

export const ColumnSubject: FunctionComponent<IColumnSubject> = ({ setSelectedIndex }) => {
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const [dialogInputNewSubject, setDialogInputNewSubject] = useState<string>("");
    const translator = useTranslator();
    const subjectTitles = useSubjectTitlesSelector();

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
                type: ModifySubjectsTypes.ADD_SUBJECT,
                value: { title: dialogInputNewSubject === "" ? translator.DIALOG.TEXT_FIELD_DEFAULT_SUBJECT : dialogInputNewSubject, items: [] },
            }
        );
        setDialogInputNewSubject("");
    };

    const onDialogNewSubjectChange = (event: any) => {
        setDialogInputNewSubject(event.target.value ?? "");
    };

    const itemSubjects = subjectTitles.map((value) => <ItemSubject { ...value } key={value.index} setSelectedIndex={setSelectedIndex}/>);
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <AddButton onClick={handleClickOpen}/>
            {itemSubjects}
            <Dialog open={openDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{translator.DIALOG.TITLE_ADD_SUBJECT}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="standard-required"
                        label={translator.DIALOG.TEXT_FIELD_LABEL_SUBJECT}
                        type="email"
                        fullWidth
                        onChange={onDialogNewSubjectChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary"> {translator.DIALOG.BUTTON_CANCEL} </Button>
                    <Button onClick={handleSave} color="primary"> {translator.DIALOG.BUTTON_SAVE} </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};