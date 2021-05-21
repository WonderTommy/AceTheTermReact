import { FunctionComponent, useState, useEffect } from "react";
import { ListHeader, IListHeader, ListRow, IListRow } from "./component";

interface IFlexibleList {
    hasEditMode?: boolean;
    changeColorOnHover?: boolean;
    elements: JSX.Element[];
    width: number;
    doSelectOnEditMode?: boolean;
    onSelect?: (index: number) => () => void;

    title?: string;
    onAddItem?: () => void;
    onDeleteItem?: (selectedIndex: number[]) => void;
};

export const FlexibleList: FunctionComponent<IFlexibleList> = (props) => {
    const { 
        hasEditMode,
        changeColorOnHover,
        elements,
        width,
        doSelectOnEditMode,
        onSelect,
        title,
        onAddItem,
        onDeleteItem,
    } = props;
    const [editMode, setEditMode] = useState<boolean>(false);
    const [checkedIndex, setCheckedIndex] = useState<number[]>([]);

    useEffect(() => {
        setCheckedIndex([]);
    }, [editMode]);

    const onToggleChecked = (index: number) => (target: boolean) => {
        var newState = [...checkedIndex];
        if (target) {
            newState.push(index);
        } else {
            newState = checkedIndex.filter(element => element !== index);
        }
        setCheckedIndex(newState);
        // console.log(newState);
    };

    const headerData: IListHeader = {
        title,
        setEditMode: hasEditMode ? setEditMode : undefined,
        editMode: hasEditMode ? editMode : undefined,
        onAddItem,
        onDeleteItem: onDeleteItem ? () => { 
            onDeleteItem(checkedIndex);
            if (checkedIndex.length > 0) {
                setEditMode(false);
            }
        } : undefined,
    };

    const rowData: IListRow[] = elements.map((value, index) => {
        return {
            rowContent: value,
            editMode: hasEditMode ? editMode : false,
            changeColorOnMouseHover: changeColorOnHover ?? true,
            width,
            doSelectOnEditMode: doSelectOnEditMode ?? true,
            onSelect: onSelect ? onSelect(index) : (() => {}),
            onToggleChecked: onToggleChecked(index),
        };
    });
    const header = <ListHeader { ...headerData }/>
    const rows = rowData.map((value, index) => <ListRow key={index} { ...value }/>);
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {header}
            {rows}
        </div>
    );
};