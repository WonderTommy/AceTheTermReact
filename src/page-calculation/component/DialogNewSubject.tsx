import { FunctionComponent, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import { useTranslator } from "../../constants";
import { dispatch, SubjectActionTypes } from "../../redux-components";

interface IDialogNewSubject {
    openDialog: boolean;
    closeDialog: () => void;
}

export const DialogNewSubject: FunctionComponent<IDialogNewSubject> = ({ openDialog, closeDialog }) => {
    const [dialogInputNewSubject, setDialogInputNewSubject] = useState<string>("");

    const { langT } = useTranslator();

    const onDialogNewSubjectChange = (event: any) => {
        setDialogInputNewSubject(event.target.value ?? "");
    };

    const handleClose = () => {
        closeDialog();
        setDialogInputNewSubject("");
    };

    const handleSave = () => {
        dispatch(
            {
                type: SubjectActionTypes.ADD_SUBJECT,
                value: { title: dialogInputNewSubject === "" ? langT.DIALOG.TEXT_FIELD_DEFAULT_SUBJECT : dialogInputNewSubject, items: [] },
            }
        );
        closeDialog();
        setDialogInputNewSubject("");
    };

    return (
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
    );
};