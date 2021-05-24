import { FunctionComponent, useState, useEffect } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import { useTranslator } from "../../constants";
import { dispatch, SubjectActionTypes, useSubjectTitleSelector } from "../../redux-components";

interface IDialogNewSubject {
    openDialog: boolean;
    closeDialog: () => void;

    subjectIndex?: number;
}

export const DialogNewSubject: FunctionComponent<IDialogNewSubject> = ({ openDialog, closeDialog, subjectIndex }) => {
    const curTitle = useSubjectTitleSelector(subjectIndex ?? -1) ?? "";
    const [dialogInputNewSubject, setDialogInputNewSubject] = useState<string>(curTitle);

    useEffect(() => {
        if (openDialog) {
            setDialogInputNewSubject(curTitle);
        }
    }, [openDialog, curTitle]);

    const { langT } = useTranslator();

    const onDialogNewSubjectChange = (event: any) => {
        setDialogInputNewSubject(event.target.value ?? "");
    };

    const handleClose = () => {
        closeDialog();
        setDialogInputNewSubject("");
    };

    const handleSave = () => {
        if (subjectIndex !== undefined) {
            dispatch(
                {
                    type: SubjectActionTypes.MODIFY_SUBJECT,
                    value: { subjectIndex, newTitle: dialogInputNewSubject === "" ? langT.DIALOG.TEXT_FIELD_DEFAULT_SUBJECT : dialogInputNewSubject, }
                }
            );
        } else {
            dispatch(
                {
                    type: SubjectActionTypes.ADD_SUBJECT,
                    value: { title: dialogInputNewSubject === "" ? langT.DIALOG.TEXT_FIELD_DEFAULT_SUBJECT : dialogInputNewSubject, items: [] },
                }
            );
        }
        closeDialog();
        setDialogInputNewSubject("");
    };

    return (
        <Dialog open={openDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
            {subjectIndex !== undefined ? null : <DialogTitle id="form-dialog-title">{langT.DIALOG.TITLE_ADD_SUBJECT}</DialogTitle>}
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
                    value={dialogInputNewSubject}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary"> {langT.DIALOG.BUTTON_CANCEL} </Button>
                <Button onClick={handleSave} color="primary"> {langT.DIALOG.BUTTON_SAVE} </Button>
            </DialogActions>
        </Dialog>
    );
};