import { FunctionComponent } from "react";

interface IRoundButton {
    text: string;
    onPress: () => void;
}

export const RoundButton: FunctionComponent<IRoundButton> = ({ text, onPress }) => {
    return (
        <button onClick={onPress}>{`${text}`}</button>
    );
};