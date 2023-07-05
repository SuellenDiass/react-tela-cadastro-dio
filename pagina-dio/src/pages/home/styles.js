// Estilizando pagina home
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


export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

export const TitleHighlight = styled.span`
    color: #E4105D;;
`

export const TextContent = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    width: 420px;

    margin-bottom: 20px;

    color: #FFFFFF;
`
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1e192c; /* Altere a cor aqui */
  }
`;
