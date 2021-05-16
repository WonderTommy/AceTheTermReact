import { FunctionComponent, useState } from "react";
import { Checkbox } from "@material-ui/core";

interface IListCheckbox {
    visible: boolean;
    checked: boolean;
};

export const ListCheckbox: FunctionComponent<IListCheckbox> = ({ visible, checked }) => {
    // const [checked, setChecked] = useState<boolean>(false);

    // const onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setChecked(event.target.checked);
    // };
    return (
        <div style={{ display: visible ? "flex" : "none", flexDirection: "column", justifyContent: "center" }}>
            <Checkbox color={"primary"} checked={checked}/>
        </div>
    );
};