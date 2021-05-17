import { FunctionComponent, useState } from "react";
import { ListRow } from "./component";

interface IFlexibleList {
    editMode?: boolean;
    elements: JSX.Element[];
    onSelect?: (index: number) => () => void;
    onToggleChecked?: (index: number) => (target: boolean) => void;
};

export const FlexibleList: FunctionComponent<IFlexibleList> = ({ editMode, elements, onSelect, onToggleChecked }) => {
    // const [checked, setChecked] = useState<Array<boolean>>(new Array(elements.length).fill(false));
    // const [editMode, setEditMode] = useState<boolean>(true);

    // const onItemSelected = (index: number) => () => {
    //     if (editMode) {
    //         const newState = [...checked];
    //         newState[index] = !newState[index];
    //         setChecked(newState);
    //     }
    // };

    // console.log(checked);
    // const rows = elements.map((value, index) => {
    //     return (
    //         <div key={index} onClick={onItemSelected(index)} style={{ display: "flex", flexDirection: "row"}}>
    //             <ListCheckbox visible={editMode} checked={checked[index]}/>
    //             {value}
    //         </div>
    //     );
    // });
    const rows = elements.map((value, index) => <ListRow key={index} rowContent={value} editMode={editMode ?? false} onSelect={onSelect ? onSelect(index) : (() => {})} onToggleChecked={onToggleChecked ? onToggleChecked(index) : ((target: boolean) => {})}/>);
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {rows}
        </div>
    );
};