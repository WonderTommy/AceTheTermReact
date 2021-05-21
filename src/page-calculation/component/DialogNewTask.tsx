import { FunctionComponent, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import { useTranslator } from "../../constants";
import { dispatch, SubjectActionTypes } from "../../redux-components";

interface IDialogNewTask {
    openDialog: boolean;
    closeDialog: () => void;
    subjectIndex: number;
}

export const DialogNewTask: FunctionComponent<IDialogNewTask> = ({ openDialog, closeDialog, subjectIndex }) => {
    const [newItemName, setNewItemName] = useState<string>("");
    const [newItemPoints, setNewItemPoints] = useState<string>("");
    const [newItemFullPoints, setNewItemFullPoints] = useState<string>("");
    const [newItemWeight, setNewItemWeight] = useState<string>("");

    const { langT } = useTranslator();

    const onNewItemNameChange = (event: any) => {
        setNewItemName(event.target.value ?? "");
    };
    const onNewItemPointsChange = (event: any) => {
        setNewItemPoints(event.target.value ?? "");
    };
    const onNewItemFullPointsChange = (event: any) => {
        setNewItemFullPoints(event.target.value ?? "");
    };
    const onNewItemWeightChange = (event: any) => {
        setNewItemWeight(event.target.value ?? "");
    };

    const handleClose = () => {
        closeDialog();
        setNewItemName("");
        setNewItemPoints("");
        setNewItemFullPoints("");
        setNewItemWeight("");
    };

    const handleSave = () => {
        closeDialog();
        dispatch(
            {
                type: SubjectActionTypes.ADD_ITEM,
                value: {
                    index: subjectIndex,
                    item: {
                        title: newItemName === "" ? langT.DIALOG.TEXT_FIELD_DEFAULT_SUBJECT : newItemName,
                        points: newItemPoints === "" ? 0 : parseFloat(newItemPoints),
                        fullPoints: newItemFullPoints === "" ? 0 : parseFloat(newItemFullPoints),
                        weight: newItemWeight === "" ? 0 : parseFloat(newItemWeight),
                    },
                },
            }
        );
        setNewItemName("");
        setNewItemPoints("");
        setNewItemFullPoints("");
        setNewItemWeight("");
    };

    return (
        <Dialog open={openDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{langT.DIALOG.TITLE_ADD_ITEM}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="standard-required"
                    label={langT.DIALOG.TEXT_FIELD_LABEL_ITEM_NAME}
                    type="email"
                    fullWidth
                    onChange={onNewItemNameChange}
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="standard-required"
                    label={langT.DIALOG.TEXT_FIELD_LABEL_POINTS}
                    type="email"
                    fullWidth
                    onChange={onNewItemPointsChange}
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="standard-required"
                    label={langT.DIALOG.TEXT_FIELD_LABEL_FULL_POINTS}
                    type="email"
                    fullWidth
                    onChange={onNewItemFullPointsChange}
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="standard-required"
                    label={langT.DIALOG.TEXT_FIELD_LABEL_WEIGHT}
                    type="email"
                    fullWidth
                    onChange={onNewItemWeightChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary"> {langT.DIALOG.BUTTON_CANCEL} </Button>
                <Button onClick={handleSave} color="primary"> {langT.DIALOG.BUTTON_SAVE} </Button>
            </DialogActions>
        </Dialog>
    );
};