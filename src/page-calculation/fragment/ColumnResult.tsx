import { FunctionComponent } from "react";
import { useSubjectSelector, ISubjectItem } from "../../redux-components";
import { useTranslator } from "../../constants";
import * as styled from "./styles";

export interface IColumnResult {
    subjectIndex: number
}

export const ColumnResult: FunctionComponent<IColumnResult> = ({ subjectIndex }) => {
    const subject = useSubjectSelector(subjectIndex);
    const translator = useTranslator();

    const subjectResult = subject?.items.reduce((acc: { totalWeight: number, weightAchieved: number}, item: ISubjectItem) => {
        const { totalWeight, weightAchieved } = acc;
        const { points, fullPoints, weight } = item;
        console.log(acc);
        console.log(item);
        return { totalWeight: totalWeight + weight, weightAchieved: weightAchieved + (fullPoints > 0 ? points/fullPoints*weight : 0)};
    }, { totalWeight: 0, weightAchieved: 0});

    console.log(subjectResult);

    const emptyPage = (
        <div style={{ fontSize: 24, fontWeight: "bold", color: "gray", textAlign: "center" }}>
            {translator.MESSAGE_NO_RESULT_TO_SHOW}
        </div>
    );    

    const resultPage = (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>{`${translator.TEXT_RESULT}: ${subject?.title}`}</div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: 560 }}>
                <styled.ResultItemBlock>
                    <styled.ResultItemTitle>
                        {translator.TEXT_TOTAL}
                    </styled.ResultItemTitle>
                    <styled.ResultItemData>
                        {`${subjectResult?.totalWeight}%`}
                    </styled.ResultItemData>
                </styled.ResultItemBlock>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                    <styled.ResultItemBlock>
                        <styled.ResultItemTitle>
                            {translator.TEXT_HIGHEST_POSSIBLE}
                        </styled.ResultItemTitle>
                        <styled.ResultItemData>
                            {`${subjectResult ? 100-(subjectResult.totalWeight-subjectResult.weightAchieved) : 0}%`}
                        </styled.ResultItemData>
                    </styled.ResultItemBlock>
                    <styled.ResultItemBlock>
                        <styled.ResultItemTitle>
                            {translator.TEXT_POINTS_LOSG}
                        </styled.ResultItemTitle>
                        <styled.ResultItemData>
                            {`${subjectResult ? subjectResult?.totalWeight-subjectResult?.weightAchieved : 0}%`}
                        </styled.ResultItemData>
                    </styled.ResultItemBlock>
                </div>
                <div>a</div>
            </div>
        </div>
    );

    return (
        <div style={{ paddingTop: 12, paddingLeft: 12, paddingRight: 12, width: "70vh" }}>
            {subject ? resultPage : emptyPage}
        </div>
    );
};
