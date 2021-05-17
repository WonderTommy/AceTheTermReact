import { FunctionComponent } from "react";
// import { IconButton } from "@material-ui/core";
import { IconOnlyButton } from "../../mod-icon_only_button";
import AddIcon from '@material-ui/icons/Add';

interface IAddButton {
    onClick: () => void
}

export const AddButton: FunctionComponent<IAddButton> = ({ onClick }) => {
    return (
        <IconOnlyButton icon={<AddIcon/>} onClick={onClick}/>
    );
};