import styled from "styled-components";

export const CtSpiral = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
`;

export const ImgSpiral = styled.div `
    background: url(${(props)=>props.imageUrl});
    background-size: contain;
    width: 25px;
    height: 100%;
    background-repeat: repeat-y;
    filter: var(--filter-main);
`;