import styled from "styled-components";

export const CtTask = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 25px;
    border-bottom: 1px solid var(--main-color);
    @media (max-width: 546px) {
        height: 55px;
    };
`; 

export const TxtTask = styled.p`
    color: var(--main-color);
    margin: 0px;
    margin: 7px auto 7px 0px;
    text-align: start;
    width: 65vw;
    font-size: 12px;
    @media (max-width: 546px) {
        font-size: 18px;
    };
`;

export const BtTask = styled.button`
    width: 25px;
    height: 25px;
    background-color: var(--secondary-color);
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2px;
    cursor: pointer;
    padding: 0px;
    @media (max-width: 546px) {
        width: 44px;
        height: 44px;
        margin-left: 5px;
    };
`;

export const ImgTask = styled.img`
    height: 60%;
    filter: invert(19%) sepia(100%) saturate(1279%) hue-rotate(186deg) brightness(93%) contrast(95%);
    @media (max-width: 546px) {
        height: 50%;
    };
`;