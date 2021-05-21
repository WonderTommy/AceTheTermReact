import { FunctionComponent } from "react";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

export interface IListHeader {
    title?: string;
    setEditMode?: (target: boolean) => void;
    editMode?: boolean;
    onAddItem?: () => void;
    onDeleteItem?: () => void;
}

export const ListHeader: FunctionComponent<IListHeader> = ({ title, setEditMode, editMode, onAddItem, onDeleteItem }) => {
    const AddButton = onAddItem ? (
        <IconButton onClick={onAddItem} style={{ width: 48 }}>
          <AddIcon/>
        </IconButton>
    ) : null;

    const DeleteButton = onDeleteItem && (editMode === true) ? (
        <IconButton onClick={onDeleteItem} style={{ width: 48 }}>
          <DeleteIcon/>
        </IconButton>
    ) : null;

    const onEditButtonClick = setEditMode && (editMode !== undefined) ? () => {
        setEditMode(!editMode);
    } : null;

    const EditButton = onEditButtonClick ? (
        <IconButton onClick={onEditButtonClick} style={{ width: 48 }}>
          <EditIcon/>
        </IconButton>
    ) : null;

    const Buttons = title ? (
        <div>
            {AddButton}
            {EditButton}
            {DeleteButton}
        </div>
    ) : (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div>
                {AddButton}
                {EditButton}
            </div>
            {DeleteButton}
        </div>
    );
    return (
        title ? (
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ fontSize: 24, fontWeight: "bold", marginTop: 12 }}>{title}</div>
                {Buttons}
            </div>
        ) : Buttons
    );
}