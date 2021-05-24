import { FunctionComponent, useState, useEffect } from "react";
// import { ListCheckbox } from "./ListCheckbox";
import { Checkbox } from "@material-ui/core";

export interface IListRow {
    rowContent: JSX.Element;
    editMode: boolean;
    changeColorOnMouseHover: boolean;
    width: number;
    doSelectOnEditMode: boolean;
    onSelect: () => void;
    onLongClick: () => void;
    onToggleChecked: (target: boolean) => void;
}

export const ListRow: FunctionComponent<IListRow> = ({ rowContent, editMode, changeColorOnMouseHover, width, doSelectOnEditMode, onSelect, onLongClick, onToggleChecked }) => {
    const [checked, setChecked] = useState<boolean>(false);
    const [color, setColor] = useState<string>("white");

    useEffect(() => {
        setCheckedWrapper(false);
    }, [editMode]);

    const onSelectEditModeWrapper = () => {
        if (doSelectOnEditMode) {
            onSelect();
        }
        setCheckedWrapper(!checked);
    }

    const setCheckedWrapper = (target: boolean) => {
        onToggleChecked(target);
        setChecked(target);
    };

    const onLongClickWrapper = () => {
        if (!editMode) {
            onLongClick();
        }
    }

    const mouseEnterAction = () => {
        setColor("#D3D3D3");
    };

    const mouseLeaveAction = () => {
        setColor("white");
    };

    return (
        <div onClick={editMode ? onSelectEditModeWrapper : onSelect} onDoubleClick={onLongClickWrapper} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div style={{ display: editMode ? "flex" : "none", flexDirection: "column", justifyContent: "center" }}>
                <Checkbox color={"primary"} checked={checked}/>
            </div>
            <div style={{ background: changeColorOnMouseHover ? color : "white", width: width }} onMouseEnter={mouseEnterAction} onMouseLeave={mouseLeaveAction}>
                {rowContent}
            </div>
        </div>
    );
};