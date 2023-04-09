import styled from "styled-components";

export const CtSearch = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const SearchLable = styled.label`
    color: var(--main-color);
    font-size: 15px;
    @media (max-width: 546px) {
        font-size: 18px;
    };
`;

export const SearchInput = styled.input`
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