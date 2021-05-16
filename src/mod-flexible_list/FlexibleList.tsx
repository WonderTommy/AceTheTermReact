import { FunctionComponent, useState } from "react";
import { ListCheckbox } from "./component";

interface IFlexibleList {
    elements: JSX.Element[];
};

export const FlexibleList: FunctionComponent<IFlexibleList> = ({ elements }) => {
    const [checked, setChecked] = useState<Array<boolean>>(new Array(elements.length).fill(false));
    const [editMode, setEditMode] = useState<boolean>(true);

    const onItemSelected = (index: number) => () => {
        if (editMode) {
            const newState = [...checked];
            newState[index] = !newState[index];
            setChecked(newState);
        }
    };

    console.log(checked);
    const rows = elements.map((value, index) => {
        return (
            <div key={index} onClick={onItemSelected(index)} style={{ display: "flex", flexDirection: "row"}}>
                <ListCheckbox visible={editMode} checked={checked[index]}/>
                {value}
            </div>
        );
    });
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {rows}
        </div>
    );
};