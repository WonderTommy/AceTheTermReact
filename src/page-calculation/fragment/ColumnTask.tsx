import { FunctionComponent, useState } from "react";
import { AddButton, ItemTask } from "../component";
import { dispatch, ModifySubjectsTypes, useSubjectSelector } from "../../redux-components";
import { useTranslator } from "../../constants";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";

export interface IColumnTask {
    subjectIndex: number;
}

export const ColumnTask: FunctionComponent<IColumnTask> = ({ subjectIndex }) => {
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    const [newItemName, setNewItemName] = useState<string>("");
    const [newItemPoints, setNewItemPoints] = useState<string>("");
    const [newItemFullPoints, setNewItemFullPoints] = useState<string>("");
    const [newItemWeight, setNewItemWeight] = useState<string>("");


    const itemTasksData = useSubjectSelector(subjectIndex);
    const { langT } = useTranslator();

    const itemTasks = itemTasksData ? itemTasksData.items.map((value, index) => <ItemTask index={index} { ...value }/>) : [];

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
        setNewItemName("");
        setNewItemPoints("");
        setNewItemFullPoints("");
        setNewItemWeight("");
    };

    const handleSave = () => {
        setOpenDialog(false);
        dispatch(
            {
                type: ModifySubjectsTypes.ADD_ITEM,
                value: {
                    item: {
                        index: subjectIndex,
                        item: {
                            title: newItemName === "" ? langT.DIALOG.TEXT_FIELD_DEFAULT_SUBJECT : newItemName,
                            points: newItemPoints === "" ? 0 : parseFloat(newItemPoints),
                            fullPoints: newItemFullPoints === "" ? 0 : parseFloat(newItemFullPoints),
                            weight: newItemWeight === "" ? 0 : parseFloat(newItemWeight),
                        },
                    },
                },
            }
        );
        setNewItemName("");
        setNewItemPoints("");
        setNewItemFullPoints("");
        setNewItemWeight("");
    };

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

    const columnContent = (
        <div style={{ display: "flex", flexDirection: "column", paddingTop: 4, paddingLeft: 12, paddingRight: 12 }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingBottom: 8 }}>
                <div style={{ fontSize: 24, fontWeight: "bold", marginTop: 12 }}>
                    {itemTasksData ? itemTasksData.title : ""}
                </div>
                <AddButton onClick={handleClickOpen}/>
            </div>
            {itemTasks.length > 0 ? itemTasks : (
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", fontSize: 20, fontWeight: "bold", color: "gray" }}>
                    {langT.MESSAGE_NO_TASK_TO_SHOW}
                </div>
            )}
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