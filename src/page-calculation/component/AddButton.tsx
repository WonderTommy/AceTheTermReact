import { FunctionComponent } from "react";
import { IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

interface IAddButton {
    onClick: () => void
}

export const AddButton: FunctionComponent<IAddButton> = ({ onClick }) => {
    return (
        <IconButton onClick={onClick} style={{ width: 48 }}>
          <AddIcon />
        </IconButton>
    );
};