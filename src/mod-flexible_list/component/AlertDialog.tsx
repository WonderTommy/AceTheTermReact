import { FunctionComponent } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from "@material-ui/core";

interface IAlertDialog {
    message: string;
    okButtonLabel: string;
    cancelButtonLabel?: string;
    open: boolean;
    closeDialog: () => void;
    onSave: () => void;
}
export const AlertDialog: FunctionComponent<IAlertDialog> = ({ message, okButtonLabel, cancelButtonLabel, open, closeDialog, onSave }) => {
    const onSaveWrapper = () => {
        onSave();
        closeDialog();
    };
    return (
        <Dialog open={open} onClose={closeDialog} aria-labelledby="form-dialog-title">
            <DialogContent>
                <DialogContentText id="alert-dialog-description">{message}</DialogContentText>
            </DialogContent>
            <DialogActions>
                {cancelButtonLabel ? <Button onClick={closeDialog} color="primary"> {cancelButtonLabel} </Button> : null}
                <Button onClick={onSaveWrapper} color="primary"> {okButtonLabel} </Button>
            </DialogActions>
        </Dialog>
    );
}