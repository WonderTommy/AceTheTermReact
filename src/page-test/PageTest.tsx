import React from 'react';
import { FunctionComponent } from "react";
// import logo from './logo.svg';
// import './App.css';

import { Test } from "../mod-test"
import { RoundButton } from "../mod-round_button"
import { ILanguage, SetLanguageTypes, ChangeValueTypes, dispatch, useValueSelector } from "../redux-components";
import { useTranslator } from "../constants"
import { Button, Menu, MenuItem } from "@material-ui/core"
import { LanguageMenu } from "../mod-language_menu";
import { PageCalculation } from "../page-calculation";
import { FlexibleList } from "../mod-flexible_list";

export const PageTest: FunctionComponent = () => {
    // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };
    // const value = useValueSelector();
    // const { langT } = useTranslator();
    // const incrementValue = () => dispatch(
    //     {
    //     type: ChangeValueTypes.Increment,
    //     value: 1
    //     }
    // );

    // const decrementValue = () => dispatch(
    //     {
    //     type: ChangeValueTypes.Decrement,
    //     value: 1
    //     }
    // );

    // const setEN = () => dispatch(
    //     {
    //     type: SetLanguageTypes.SET_LANGUAGE,
    //     value: ILanguage.EN,
    //     }
    // );

    // const setCN = () => dispatch(
    //     {
    //     type: SetLanguageTypes.SET_LANGUAGE,
    //     value: ILanguage.CN_SI,
    //     }
    // );

    // const setJP = () => dispatch(
    //     {
    //     type: SetLanguageTypes.SET_LANGUAGE,
    //     value: ILanguage.JP,
    //     }
    // );

    // return (
    //     <div style={{ display: "flex" }}>
    //         <Test value={value} />
    //         <RoundButton text={"+"} onPress={incrementValue}/>
    //         <RoundButton text={"-"} onPress={decrementValue}/>
    //         <RoundButton text={langT.BUTTON.CALCULATION} onPress={decrementValue}/>
    //         <RoundButton text={"Set EN"} onPress={setEN}/>
    //         <RoundButton text={"Set CN_SI"} onPress={setCN}/>
    //         <RoundButton text={"Set JP"} onPress={setJP}/>
    //         <Button children={"Test Button"} color={"default"} style={{background: "#774ABC", color: "#FFFFFF"}}/>
    //         <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
    //             Open Menu
    //         </Button>
    //         <Menu
    //             id="simple-menu"
    //             anchorEl={anchorEl}
    //             keepMounted
    //             open={Boolean(anchorEl)}
    //             onClose={handleClose}
    //         >
    //             <MenuItem onClick={handleClose}>Profile</MenuItem>
    //             <MenuItem onClick={handleClose}>My account</MenuItem>
    //             <MenuItem onClick={handleClose}>Logout</MenuItem>
    //         </Menu>
    //         <LanguageMenu/>
    //         {/* <ItemSubject title={"CS 135"} /> */}
    //         <PageCalculation/>
    //     </div>
//   );
    // const element = (
    //     <div style={{ height: 40, width: 300, display: "flex", flexDirection: "column", justifyContent: "center" }}>
    //         {"item"}
    //     </div>
    // );

    // const elements = [element, element, element, element, element, element, element];
    // return (
    //     <FlexibleList elements={elements}/>
    // );
    return (
        <div>tesat</div>
    );
}
