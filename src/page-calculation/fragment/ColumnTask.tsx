import { FunctionComponent, useState } from "react";
import { ItemTask } from "../component";
import { dispatch, SubjectActionTypes, useSubjectSelector } from "../../redux-components";
import { useTranslator } from "../../constants";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { FlexibleList } from "../../mod-flexible_list";
import { IconOnlyButton } from "../../mod-icon_only_button";

export interface IColumnTask {
    subjectIndex: number;
}

export const ColumnTask: FunctionComponent<IColumnTask> = ({ subjectIndex }) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    const [newItemName, setNewItemName] = useState<string>("");
    const [newItemPoints, setNewItemPoints] = useState<string>("");
    const [newItemFullPoints, setNewItemFullPoints] = useState<string>("");
    const [newItemWeight, setNewItemWeight] = useState<string>("");

    const itemTasksData = useSubjectSelector(subjectIndex);
    const { langT } = useTranslator();

    const itemTasks = itemTasksData ? itemTasksData.items.map((value, index) => <ItemTask key={index} index={index} { ...value }/>) : [];

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

    const handleToggleEditMode = () => {
        setEditMode(!editMode);
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

    const AddButton = (
        <IconOnlyButton icon={<AddIcon/>} onClick={handleClickOpen}/>
    );

    const EditButton = (
        <IconOnlyButton icon={<EditIcon/>} onClick={handleToggleEditMode}/>
    );

    const DeleteButton = (
        <IconOnlyButton icon={<DeleteIcon/>} onClick={() => {}}/>
    );

    const columnContent = (
        <div style={{ display: "flex", flexDirection: "column", paddingTop: 4, paddingLeft: 12, paddingRight: 12 }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingBottom: 8 }}>
                <div style={{ fontSize: 24, fontWeight: "bold", marginTop: 12 }}>
                    {itemTasksData ? itemTasksData.title : ""}
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    {AddButton}
                    {EditButton}
                    {editMode ? DeleteButton : null}
                </div>
            </div>
            {itemTasks.length > 0 ? 
                <FlexibleList editMode={editMode} width={360} elements={itemTasks}/> : (
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