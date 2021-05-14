import styled from "styled-components";

export const ResultItemBlock = styled.div`
    display: flex;
    flex-direction: column;
`

export const ResultItemTitle = styled.div`
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 4px;
`
export const ResultItemData = styled.div`
    font-size: 24px;
    text-align: center;
`
interface IResultWeight {
    color: string;
}
export const ResultWeight = styled.div`
    text-align: center;
    font-weight: bold;
    color: ${({ color }: IResultWeight) => (color)};
`
