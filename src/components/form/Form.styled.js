import styled from "styled-components";

export const CtForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const FormLable = styled.label`
    color: var(--main-color);
`;

export const FormInput = styled.input`
    width: 50vw;
    height: 25px;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 5px;
    color: var(--main-color);
    font-family: var(--main-font);
    padding-left: 10px;
    @media (max-width: 546px) {
        height: 44px;
        width: 80vw;
    };
`;

export const FormSpan = styled.span`
    color: var(--warning-color);
`;

export const FormButton = styled.button`
    background-color: var(--secondary-color);
    color: var(--main-color);
    font-family: var(--main-font);
    width: 100px;
    height: 25px;
    border: none;
    border-radius: 5px;
    margin-top: 5px;
    align-self: flex-end;
    box-shadow: 2px 2px 6px #0000ff2b;
    cursor: pointer;
    font-size: 15px;
    @media (max-width: 546px) {
        width: 150px;
        height: 44px;
        font-size: 18px;
        margin-top: 10px;
    };
`;