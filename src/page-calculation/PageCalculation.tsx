import { FunctionComponent } from "react";
import { AddButton, ItemSubject } from "./component";
import { useSubjectsSelector } from "../redux-components";

// interface IPageCalculation {
    
// }

export const PageCalculation: FunctionComponent = () => {
    const subjects = useSubjectsSelector();

    const itemSubjects = subjects.map((value, index) => <ItemSubject { ...value } index={index} key={index}/>);
    return(
        <div style={{ display: "flex", flexDirection: "column" }}>
            <AddButton/>
            {itemSubjects}
        </div>
    );
};