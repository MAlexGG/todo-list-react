import styled from "styled-components";

export const CtTask = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    border-bottom: 1px solid var(--main-color);
`; 

export const TxtTask = styled.p`
    color: var(--main-color);
    margin: 0px;
    margin: 7px auto 7px 0px;
    text-align: start;
    width: 65vw;
`;

export const BtTask = styled.button`
    width: 20px;
    height: 20px;
    background-color: var(--secondary-color);
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2px;
`;

export const ImgTask = styled.img`
    width: 80%;
    height: 80%;
    filter: invert(19%) sepia(100%) saturate(1279%) hue-rotate(186deg) brightness(93%) contrast(95%);
`;