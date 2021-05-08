import { FunctionComponent } from "react";
import { Divider } from "../../mod-divider";

export interface IItemSubject {
    index: number;
    title: string;
    items: {
        title: string;
        point: number;
        fullPoint: number;
        weight: number;
    }[];
}

export const ItemSubject: FunctionComponent<IItemSubject> = ({ title, index }) => {
    return (
        <div onClick={() => { console.log(index) }} style={{ display: "flex", flexDirection: "column", padding: 0, paddingLeft: 12, width: 240 }}>
            <div style={{ display: "flex", paddingTop: 12, paddingBottom: 12 }}>{title}</div>
            <Divider/>
        </div>
    );
};