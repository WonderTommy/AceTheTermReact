import { FunctionComponent } from "react";
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
    const { langT } = useTranslator();

    return (
        <div style={{ display: "flex", flexDirection: "column", paddingTop: 4 }}>
            <styled.RowItemTask>
                <styled.RowItemTitle>
                    {title}
                </styled.RowItemTitle>
                <styled.RowItemTitle>
                    {`${fullPoints === 0 ? 0 : String(points/fullPoints*100).length > 5 ? String(points/fullPoints*100).substring(0, 6) : String(points/fullPoints*100) }%`}
                </styled.RowItemTitle>
            </styled.RowItemTask>
            <styled.RowItemTask>
                <div>
                    {`${langT.CALCULATION_ITEM_LABEL_POINTS}${points}`}
                </div>
                <div>
                    {fullPoints === 0 ? 0 : String(points/fullPoints*weight).length > 5 ? String(points/fullPoints*weight).substring(0, 6) : String(points/fullPoints*weight)}
                </div>
            </styled.RowItemTask>
            <styled.RowItemTask>
                <div>
                    {`${langT.CALCULATION_ITEM_LABEL_FULL_POINTS}${fullPoints}`}
                </div>
            </styled.RowItemTask>
            <styled.RowItemTask>
                <div>
                    {`${langT.CALCULATION_ITEM_LABEL_WEIGHT}${weight}%`}
                </div>
            </styled.RowItemTask>
            <Divider/>
        </div>
    );
};