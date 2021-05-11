import { FunctionComponent, useState } from "react";
import { useSubjectsSelector } from "../redux-components";
import { ColumnSubject, ColumnTask } from "./fragment";


// interface IPageCalculation {
    
// }

export const PageCalculation: FunctionComponent = () => {
    const [selectedIndex, setSelectedIndex] = useState<number>(-1);
    const subjects = useSubjectsSelector();

    // const itemSubjects = subjects.map((value, index) => <ItemSubject { ...value } index={index} key={index}/>);
    // const subjectData = subjects.map((value, index) => ({ title: value.title, index: index }));
    return(
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <ColumnSubject setSelectedIndex={setSelectedIndex} />
                <div style={{ background: "gray", height: "100%", width: 1 }}/>
                <ColumnTask {...{ subjectIndex: selectedIndex }}/>
                <div style={{ background: "gray", height: "100%", width: 1 }}/>
            </div>
            {/* <ColumnSubject /> */}
        </div>
    );
};