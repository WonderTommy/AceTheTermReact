import React, { useState } from 'react';
import { FunctionComponent } from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { dispatch, ILanguage, SetLanguageTypes } from "../redux-components";
import { useTranslator } from "../constants";

interface ILanguageMenu {
    text?: string;
}
export const LanguageMenu: FunctionComponent<ILanguageMenu> = ({ text }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const { langT } = useTranslator();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const setLanguage = (lang: ILanguage) => () => {
        dispatch(
            {
                type: SetLanguageTypes.SET_LANGUAGE,
                value: lang,
            }
        );
        setAnchorEl(null);
    };

    const menuItems = Object.values(ILanguage).map((value, index) => <MenuItem key={index} onClick={setLanguage(value)}>{langT.LANGUAGE_LIST_LABELS[value]}</MenuItem>)
    
    return (
        <div style={{ display: "flex" }}>
            <Button variant="outlined" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                {`${langT.BUTTON.LANGUAGE}: ${langT.LANGUAGE_LABEL}`}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                {menuItems}
            </Menu>
        </div>
    );
};