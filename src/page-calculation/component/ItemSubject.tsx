import { FunctionComponent } from "react";
import { Divider } from "../../mod-divider";
import { useState } from "react";

export interface IItemSubject {
    title: string;
}

export const ItemSubject: FunctionComponent<IItemSubject> = ({ title }) => {
    const [color, setColor] = useState<string>("white");

    const mouseEnterAction = () => {
        setColor("#D3D3D3");
    };

    const mouseLeaveAction = () => {
        setColor("white");
    };
    return (
        <div 
            style={{ background: color, display: "flex", flexDirection: "column", padding: 0, paddingLeft: 12, width: 240 }}>
            <div 
                onMouseEnter={mouseEnterAction}
                onMouseLeave={mouseLeaveAction}
                style={{ display: "flex", paddingTop: 12, paddingBottom: 12 }}>{title}</div>
            <Divider/>
        </div>
    );
};