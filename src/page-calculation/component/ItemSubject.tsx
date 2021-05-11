import { FunctionComponent } from "react";
import { Divider } from "../../mod-divider";
import { useState } from "react";

export interface IItemSubject {
    index: number;
    title: string;
    setSelectedIndex: (index: number) => void;
}

export const ItemSubject: FunctionComponent<IItemSubject> = ({ title, index, setSelectedIndex }) => {
    const [color, setColor] = useState<string>("white");

    const mouseEnterAction = () => {
        setColor("#D3D3D3");
    };

    const mouseLeaveAction = () => {
        setColor("white");
    };
    return (
        <div 
            style={{ background: color, display: "flex", flexDirection: "column", padding: 0, paddingLeft: 12, width: 240 }}
            onClick={() => { setSelectedIndex(index) }} >
            <div 
                onMouseEnter={mouseEnterAction}
                onMouseLeave={mouseLeaveAction}
                style={{ display: "flex", paddingTop: 12, paddingBottom: 12 }}>{title}</div>
            <Divider/>
        </div>
    );
};