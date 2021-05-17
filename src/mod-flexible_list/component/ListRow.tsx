import { FunctionComponent, useState, useEffect } from "react";
// import { ListCheckbox } from "./ListCheckbox";
import { Checkbox } from "@material-ui/core";

interface IListRow {
    rowContent: JSX.Element;
    editMode: boolean;
    changeColorOnMouseHover: boolean;
    width: number;
    onSelect: () => void;
    onToggleChecked: (target: boolean) => void;
}

export const ListRow: FunctionComponent<IListRow> = ({ rowContent, editMode, changeColorOnMouseHover, width, onSelect, onToggleChecked }) => {
    const [checked, setChecked] = useState<boolean>(false);
    const [color, setColor] = useState<string>("white");

    useEffect(() => {
        setChecked(false);
    }, [editMode]);

    const onSelectEditModeWrapper = () => {
        onSelect();
        onToggleChecked(!checked);
        setChecked(!checked);
    }

    const mouseEnterAction = () => {
        setColor("#D3D3D3");
    };

    const mouseLeaveAction = () => {
        setColor("white");
    };

    return (
        <div onClick={editMode ? onSelectEditModeWrapper : onSelect} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div style={{ display: editMode ? "flex" : "none", flexDirection: "column", justifyContent: "center" }}>
                <Checkbox color={"primary"} checked={checked}/>
            </div>
            <div style={{ background: changeColorOnMouseHover ? color : "white", width: width }} onMouseEnter={mouseEnterAction} onMouseLeave={mouseLeaveAction}>
                {rowContent}
            </div>
        </div>
    );
};