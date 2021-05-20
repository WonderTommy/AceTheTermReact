import { FastRewindTwoTone } from "@material-ui/icons";
import { FunctionComponent } from "react";
import { ListRow, IListRow } from "./component";

interface IFlexibleList {
    editMode?: boolean;
    changeColorOnHover?: boolean;
    elements: JSX.Element[];
    width: number;
    doSelectOnEditMode?: boolean;
    onSelect?: (index: number) => () => void;
    onToggleChecked?: (index: number) => (target: boolean) => void;
};

export const FlexibleList: FunctionComponent<IFlexibleList> = ({ editMode, changeColorOnHover, elements, width, doSelectOnEditMode, onSelect, onToggleChecked }) => {
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
    const rowData: IListRow[] = elements.map((value, index) => {
        return {
            rowContent: value,
            editMode: editMode ?? false,
            changeColorOnMouseHover: changeColorOnHover ?? true,
            width,
            doSelectOnEditMode: doSelectOnEditMode ?? true,
            onSelect: onSelect ? onSelect(index) : (() => {}),
            onToggleChecked: onToggleChecked ? onToggleChecked(index) : ((target: boolean) => {}),
        };
    });
    const rows = rowData.map((value, index) => <ListRow key={index} { ...value }/>);
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {rows}
        </div>
    );
};