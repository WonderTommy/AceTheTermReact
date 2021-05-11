import { FunctionComponent, useState } from "react";
import { Divider } from "../../mod-divider";
import { useTranslator } from "../../constants";
import * as styled from "./styles";

export interface IItemTask {
    index: number;
    title: string;
    points: number;
    fullPoints: number;
    weight: number;
}

export const ItemTask: FunctionComponent<IItemTask> = ({ index, title, points, fullPoints, weight }) => {
    const translator = useTranslator();
    const [color, setColor] = useState<string>("white");

    const mouseEnterAction = () => {
        setColor("#D3D3D3");
    };

    const mouseLeaveAction = () => {
        setColor("white");
    };
    return (
        <div style={{ background: color, display: "flex", flexDirection: "column", paddingTop: 4 }}
            onMouseEnter={mouseEnterAction}
            onMouseLeave={mouseLeaveAction}>
            <styled.RowItemTask>
                <styled.RowItemTitle>
                    {title}
                </styled.RowItemTitle>
                <styled.RowItemTitle>
                    {`${points/fullPoints*100}%`}
                </styled.RowItemTitle>
            </styled.RowItemTask>
            <styled.RowItemTask>
                <div>
                    {`${translator.CALCULATION_ITEM_LABEL_POINTS}${points}`}
                </div>
                <div>
                    {points/fullPoints*weight}
                </div>
            </styled.RowItemTask>
            <styled.RowItemTask>
                <div>
                    {`${translator.CALCULATION_ITEM_LABEL_FULL_POINTS}${fullPoints}`}
                </div>
            </styled.RowItemTask>
            <styled.RowItemTask>
                <div>
                    {`${translator.CALCULATION_ITEM_LABEL_WEIGHT}${weight}%`}
                </div>
            </styled.RowItemTask>
            <Divider/>
        </div>
    );
};