// Estilos visuais

import styled  from 'styled-components';

export const Container = styled.div`
   
    width: 100%;
    max-width: 80%;
    height: 47px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;

    
  .home-link {
    margin-right: 10px; // Ajuste o valor conforme necessário
    color: #1fc26c;
    text-decoration: none;
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
  }

  .logo-link {
    // Adicione estilos conforme necessário
    
  }

  .user-link {
    // Adicione estilos conforme necessário
  }

`;

export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    height: 47px;
    display:flex
    justify-content: center;
    align-items: center
`

export const BuscarInputContainer = styled.div`
    width: 275px;
    height: 30px;
    background: #2D2D37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;

    display:flex;
`

export const Menu = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
`

export const MenuRight = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;

    
`


export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid #1fc26c;
`

export const Input = styled.input`
    background: transparent;
    flex: 1;
    border: 0;
    color: #FFFFFF;
`