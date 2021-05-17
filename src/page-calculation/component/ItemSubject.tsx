import { FunctionComponent } from "react";
import { Divider } from "../../mod-divider";

export interface IItemSubject {
    title: string;
}

export const ItemSubject: FunctionComponent<IItemSubject> = ({ title }) => {
    return (
        <div 
            style={{ display: "flex", flexDirection: "column", padding: 0, paddingLeft: 12 }}>
            <div style={{ display: "flex", paddingTop: 12, paddingBottom: 12 }}>{title}</div>
            <Divider/>
        </div>
    );
};