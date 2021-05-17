import { FunctionComponent, useState, useEffect } from "react";
// import { ListCheckbox } from "./ListCheckbox";
import { Checkbox } from "@material-ui/core";

interface IListRow {
    rowContent: JSX.Element;
    editMode: boolean;
    onSelect: () => void;
    onToggleChecked: (target: boolean) => void;
}

export const ListRow: FunctionComponent<IListRow> = ({ rowContent, editMode, onSelect, onToggleChecked }) => {
    const [checked, setChecked] = useState<boolean>(false);

    useEffect(() => {
        setChecked(false);
    }, [editMode]);

    const onSelectEditModeWrapper = () => {
        onSelect();
        onToggleChecked(!checked);
        setChecked(!checked);
    }

    return (
        <div onClick={editMode ? onSelectEditModeWrapper : onSelect} style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ display: editMode ? "flex" : "none", flexDirection: "column", justifyContent: "center" }}>
                <Checkbox color={"primary"} checked={checked}/>
            </div>
            {rowContent}
        </div>
    );
};