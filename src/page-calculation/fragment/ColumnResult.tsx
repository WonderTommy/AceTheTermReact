import { FunctionComponent } from "react";
import { useSubjectSelector, ISubjectItem } from "../../redux-components";
import { useTranslator } from "../../constants";
import * as styled from "./styles";

export interface IColumnResult {
    subjectIndex: number
}

export const ColumnResult: FunctionComponent<IColumnResult> = ({ subjectIndex }) => {
    const subject = useSubjectSelector(subjectIndex);
    const { langT, colorT } = useTranslator();

    const adjustLength = (data: number): string => {
        const result = data === 0 ? "0" : String(data).length > 5 ? String(data).substring(0, 6) : String(data);
        return result;
    };

    const rawSubjectResult = subject?.items.reduce((acc: { totalWeight: number, weightAchieved: number}, item: ISubjectItem) => {
        const { totalWeight, weightAchieved } = acc;
        const { points, fullPoints, weight } = item;
        // console.log(acc);
        // console.log(item);
        return { totalWeight: totalWeight + weight, weightAchieved: weightAchieved + (fullPoints > 0 ? points/fullPoints*weight : 0)};
    }, { totalWeight: 0, weightAchieved: 0});

    const { weightAchieved, totalWeight, highestPossible, percentageLost }: { weightAchieved: string, totalWeight: string, highestPossible: string, percentageLost: string } = 
        { 
            weightAchieved: rawSubjectResult ? adjustLength(rawSubjectResult.weightAchieved): "0",
            totalWeight: rawSubjectResult ? adjustLength(rawSubjectResult.totalWeight) : "0",
            highestPossible: rawSubjectResult ? adjustLength(100-(rawSubjectResult.totalWeight-rawSubjectResult.weightAchieved)) : "0",
            percentageLost: rawSubjectResult ? adjustLength(rawSubjectResult.totalWeight-rawSubjectResult.weightAchieved) : "0",
        };

    const emptyPage = (
        <div style={{ fontSize: 24, fontWeight: "bold", color: "gray", textAlign: "center" }}>
            {langT.MESSAGE_NO_RESULT_TO_SHOW}
        </div>
    );    

    const resultPage = (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>{`${langT.TEXT_RESULT}: ${subject?.title}`}</div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: 560 }}>
                <styled.ResultItemBlock>
                    <styled.ResultItemTitle>
                        {langT.TEXT_TOTAL}
                    </styled.ResultItemTitle>
                    <styled.ResultItemData>
                        {`${weightAchieved}/${totalWeight}(%)`}
                    </styled.ResultItemData>
                </styled.ResultItemBlock>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                    <styled.ResultItemBlock>
                        <styled.ResultItemTitle>
                            {langT.TEXT_HIGHEST_POSSIBLE}
                        </styled.ResultItemTitle>
                        <styled.ResultItemData>
                            {`${highestPossible}%`}
                        </styled.ResultItemData>
                    </styled.ResultItemBlock>
                    <styled.ResultItemBlock>
                        <styled.ResultItemTitle>
                            {langT.TEXT_POINTS_LOSG}
                        </styled.ResultItemTitle>
                        <styled.ResultItemData>
                            {`${percentageLost}%`}
                        </styled.ResultItemData>
                    </styled.ResultItemBlock>
                </div>
                <styled.ResultWeight color={rawSubjectResult?.totalWeight > 100 ? colorT.RED : rawSubjectResult?.totalWeight < 100 ? colorT.YELLOW : colorT.GREEN}>
                    {`${rawSubjectResult?.totalWeight > 100 ? langT.TEXT_RESULT_OVER : rawSubjectResult?.totalWeight < 100 ? langT.TEXT_RESULT_UNDER : langT.TEXT_RESULT_OK}(${totalWeight}%)`}
                </styled.ResultWeight>
            </div>
        </div>
    );

    return (
        <div style={{ paddingTop: 12, paddingLeft: 12, paddingRight: 12, width: "40vw" }}>
            {subject ? resultPage : emptyPage}
        </div>
    );
};
