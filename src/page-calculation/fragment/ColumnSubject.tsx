import { FunctionComponent, useState, useEffect } from "react";
import { DialogNewSubject, ItemSubject } from "../component";
import { dispatch, SubjectActionTypes, useSubjectTitlesSelector } from "../../redux-components";
import { FlexibleList } from "../../mod-flexible_list";
import { IconOnlyButton } from "../../mod-icon_only_button";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

export interface IColumnSubject {
    setSelectedIndex: (index: number) => () => void;
}

export const ColumnSubject: FunctionComponent<IColumnSubject> = ({ setSelectedIndex }) => {
    const [checkedIndex, setCheckedIndex] = useState<number[]>([]);

    const [editMode, setEditMode] = useState<boolean>(false);
    const [openNewSubjectDialog, setOpenNewSubjectDialog] = useState<boolean>(false);
    const subjectTitles = useSubjectTitlesSelector();

    useEffect(() => {
        if (!editMode) {
            setCheckedIndex([]);
        }
    }, [editMode]);

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const handleDelete = () => {
        console.log(checkedIndex);
        dispatch({
            type: SubjectActionTypes.REMOVE_SUBJECT,
            value: checkedIndex,
        });
        setEditMode(false);
    }

    const handleClickOpen = () => {
        setOpenNewSubjectDialog(true);
    };

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

    const AddButton = (
        <IconOnlyButton icon={<AddIcon/>} onClick={handleClickOpen}/>
    );

    const EditButton = (
        <IconOnlyButton icon={<EditIcon/>} onClick={toggleEditMode}/>
    );

    const DeleteButton = (
        <IconOnlyButton icon={<DeleteIcon/>} onClick={handleDelete}/>
    );


    const itemSubjects = subjectTitles.map(({ title, index }) => <ItemSubject title={title} key={index}/>);
    return (
        <div style={{ display: "flex", flexDirection: "column", paddingRight: 12 }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div>
                    {AddButton}
                    {EditButton}
                </div>
                <div>
                    <div style={{ display: editMode ? "flex" : "none" }}>
                        {DeleteButton}
                    </div>
                </div>
            </div>
            {/* {itemSubjects} */}

            <FlexibleList editMode={editMode} width={240} elements={itemSubjects} onSelect={setSelectedIndex} onToggleChecked={onToggleChecked}/>
            <DialogNewSubject openDialog={openNewSubjectDialog} closeDialog={() => { setOpenNewSubjectDialog(false) }}/>
        </div>
    );
};