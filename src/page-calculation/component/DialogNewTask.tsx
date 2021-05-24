import { FunctionComponent, useState, useEffect } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import { useTranslator } from "../../constants";
import { dispatch, SubjectActionTypes, useTaskSelector } from "../../redux-components";

interface IDialogNewTask {
    openDialog: boolean;
    closeDialog: () => void;
    subjectIndex: number;

    taskIndex?: number;
    itemName?: string;
    itemPoints?: string;
    itemFullPoints?: string;
    itemWeight?: string;
}

export const DialogNewTask: FunctionComponent<IDialogNewTask> = ({ openDialog, closeDialog, subjectIndex, taskIndex, itemName, itemPoints, itemFullPoints, itemWeight }) => {
    const curTask = useTaskSelector(subjectIndex, taskIndex ?? -1);
    const [newItemName, setNewItemName] = useState<string>(curTask ? curTask.title : "123");
    const [newItemPoints, setNewItemPoints] = useState<string>(curTask ? curTask.points.toString() : "");
    const [newItemFullPoints, setNewItemFullPoints] = useState<string>(curTask ? curTask.fullPoints.toString() : "");
    const [newItemWeight, setNewItemWeight] = useState<string>(curTask ? curTask.weight.toString() : "");

    useEffect(() => {
        if (openDialog) {
            setNewItemName(curTask ? curTask.title : "");
            setNewItemPoints(curTask ? curTask.points.toString() : "");
            setNewItemFullPoints(curTask ? curTask.fullPoints.toString() : "");
            setNewItemWeight(curTask ? curTask.weight.toString() : "");
        }
    }, [curTask, openDialog]);

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
        console.log("handleSave");
        closeDialog();
        if (taskIndex !== undefined) {
            dispatch({
                type: SubjectActionTypes.MODIFY_ITEM,
                value: {
                    index: subjectIndex,
                    itemIndex: taskIndex,
                    newItem: {
                        title: newItemName === "" ? langT.DIALOG.TEXT_FIELD_DEFAULT_SUBJECT : newItemName,
                        points: newItemPoints === "" ? 0 : parseFloat(newItemPoints),
                        fullPoints: newItemFullPoints === "" ? 0 : parseFloat(newItemFullPoints),
                        weight: newItemWeight === "" ? 0 : parseFloat(newItemWeight),
                    },
                }
            });
            console.log(taskIndex);
            console.log(newItemName);
            console.log(newItemPoints);
            console.log(newItemFullPoints);
            console.log(newItemWeight);
        } else {
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
        }
        setNewItemName("");
        setNewItemPoints("");
        setNewItemFullPoints("");
        setNewItemWeight("");
    };

    return (
        <Dialog open={openDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
            {taskIndex !== undefined ? null : <DialogTitle id="form-dialog-title">{langT.DIALOG.TITLE_ADD_ITEM}</DialogTitle>}
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
                    value={newItemName}
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
                    value={newItemPoints}
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
                    value={newItemFullPoints}
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
                    value={newItemWeight}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary"> {langT.DIALOG.BUTTON_CANCEL} </Button>
                <Button onClick={handleSave} color="primary"> {langT.DIALOG.BUTTON_SAVE} </Button>
            </DialogActions>
        </Dialog>
    );
};