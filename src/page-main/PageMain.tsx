import { FunctionComponent } from "react";
import { LanguageMenu } from "../mod-language_menu";
import { Divider } from "../mod-divider";
import { Button } from "@material-ui/core";
import { useTranslator } from "../constants";
import { dispatch, IPage, SetPageTypes } from "../redux-components";
import { PageCalculation } from "../page-calculation";

export const PageMain: FunctionComponent = () => {
    const { langT } = useTranslator();

    const setPage = (page: IPage) => () => dispatch(
        {
            type: SetPageTypes.SET_PAGE,
            value: page,
        }
    );

    return (
        <div style={{ margin: 20, marginTop: 10,  display: "flex", flexDirection: "column" }}>
            <div style={{ marginBottom: 4, display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                    <Button variant="outlined" onClick={setPage(IPage.CALCULATION)} children={langT.BUTTON.CALCULATION} color={"default"} style={{margin: 10, background: "#774ABC", color: "#FFFFFF"}}/>
                    <Button onClick={setPage(IPage.TERM)} children={langT.BUTTON.TERM} color={"default"} style={{margin: 10, background: "#774ABC", color: "#FFFFFF"}}/>
                    <Button onClick={setPage(IPage.HISTORY)} children={langT.BUTTON.HISTORY} color={"default"} style={{margin: 10, background: "#774ABC", color: "#FFFFFF"}}/>
                </div>
                <LanguageMenu/>
            </div>
            <div style={{ marginBottom: 4 }}>
                <Divider/>
            </div>
            <PageCalculation/>
        </div>
        
    );
};