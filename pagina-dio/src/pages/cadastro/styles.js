// Estilizando pagina cadastro
// Tive que criar um estilo global para mudar a cor de fundo da página
// foi adicionado o estilo global (GlobalStyle) utilizando createGlobalStyle. O estilo global define a cor de fundo do <body>

import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`

export const Wrapper = styled.div`
    max-width: 300px;
 
    top: 153px
    left: 748px


`
export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    margin-top: 20px;

`

export const Column = styled.div`
    flex:1;
`

export const Title = styled.h2`
    width: 388px;
    height: 308px;
    top: 141px;
    left: 65px;

    font-family: Open Sans;
    font-size: 32px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: left;



    color: #FFFFFF;
`
export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;

    
`
export const SubTitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;

    color: #FFFFFF;

    
`
export const EsqueciText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #FFFFFF;
    
`

export const CriarText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #1fc26c;
    
    
`
export const SubTitle = styled.p`
    width: 372px
    height: 75px
    top: 498px
    left: 750px


    color: #FFFFFF;

`

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1e192c; /* Altere a cor aqui */
  }
`;



