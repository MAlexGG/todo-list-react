import styled from "styled-components";

export const CtTask = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: auto;
    border-bottom: 1px solid var(--main-color);
`;

export const TxtTask = styled.p `
    color: var(--main-color);
    margin: 0px;
    text-align: start;
    width: 80vw;
    font-size: 15px;
    @media (max-width: 546px) {
        font-size: 18px;
        width: 65vw;
    };
`;

export const BtTask = styled.button `
    width: 25px;
    height: 25px;
    background-color: var(--secondary-color);
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2px 0px 2px 2px;;
    cursor: pointer;
    padding: 0px;
    @media (max-width: 546px) {
        width: 44px;
        height: 44px;
        margin: 5px 0px 5px 5px;
    };
`;

export const ImgTask = styled.img `
    height: 60%;
    filter: invert(19%) sepia(100%) saturate(1279%) hue-rotate(186deg) brightness(93%) contrast(95%);
    @media (max-width: 546px) {
        height: 50%;
    };
`;