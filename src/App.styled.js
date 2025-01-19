import styled from 'styled-components';

export const AppWrapper = styled.div`
    text-align: center;
    font-family: 'Press Start 2P', cursive;
`

export const HeaderWrapper = styled.div`
    background-color: "#5D04D9";
    width: "100%";
    height: "100px";
`

export const BodyWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`

export const ProductSideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 65%;
    height: 100vh;

    @media (max-width: 768px) {
        width: 100%;
        height: 50%;
    }
`

export const ProductSideStore = styled.div`
    column-gap: 16px;
    overflow: scroll;
    flex-wrap: wrap;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const ProductFormSideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 35%;
    height: 100vh;

    @media (max-width: 768px) {
        width: 100%;
        height: 50%;
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
`

export const FooterWrapper = styled.div`
    background-color: "#5D04D9";
    width: "100%";
    height: "100px";
`