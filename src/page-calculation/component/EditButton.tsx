import { FunctionComponent } from "react";
// import { IconButton } from "@material-ui/core";
import { IconOnlyButton } from "../../mod-icon_only_button";
import EditIcon from '@material-ui/icons/Edit';

interface IEditButton {
    onClick: () => void
}

export const EditButton: FunctionComponent<IEditButton> = ({ onClick }) => {
    return (
        <IconOnlyButton icon={<EditIcon/>} onClick={onClick}/>
    );
};