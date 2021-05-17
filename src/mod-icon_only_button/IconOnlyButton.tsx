import { FunctionComponent } from "react";
import { IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

interface IIconOnlyButton {
    icon: JSX.Element;
    onClick: () => void
}

export const IconOnlyButton: FunctionComponent<IIconOnlyButton> = ({ icon, onClick }) => {
    return (
        <IconButton onClick={onClick} style={{ width: 48 }}>
          {icon}
        </IconButton>
    );
};