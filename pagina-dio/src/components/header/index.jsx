// Estrutura do header
// importar o styles

import React from 'react'
import logo from '../../assets/logo-dio.png';
import { Link,useLocation } from 'react-router-dom';


import { Button } from '../button';

import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu,UserPicture} from './styles';

const Header = ({autenticado}) => {
  // ocultar o link home da página home.
  const location = useLocation();

  const hideHomeLink = location.pathname === '/';


  return (
    <Wrapper>
      <Container>
          <Row>
          <Link to="/" className="logo-link">
            <img src={logo} alt="Logo da dio" />
          </Link>
            {autenticado ? (
              <>
               <BuscarInputContainer>
                <Input placeholder='Buscar...'/>
               </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
          </Row>
          <Row>
          {autenticado ? (
            <Link to="/" className="user-link">
              <UserPicture src="https://github.com/SuellenDiass/SuellenDiass/assets/102911341/50de9418-1dd2-4a78-acc9-6d0c8573861a" />
            </Link>
          ) : (
            <>
              {!hideHomeLink && (
                <Link to="/" className="home-link">
                  Home
                </Link>
              )}
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }
