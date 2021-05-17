import { FunctionComponent } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from "@material-ui/core";

interface IAlertDialog {
    message: string;
    buttonLabel: string;
    open: boolean;
    closeDialog: () => void;
}
export const AlertDialog: FunctionComponent<IAlertDialog> = ({ message, buttonLabel, open, closeDialog }) => {
    return (
        <Dialog open={open} onClose={closeDialog} aria-labelledby="form-dialog-title">
            <DialogContent>
                <DialogContentText id="alert-dialog-description">{message}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeDialog} color="primary"> {buttonLabel} </Button>
            </DialogActions>
        </Dialog>
    );
}