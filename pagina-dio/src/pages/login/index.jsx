// import vai linkar login
// Estruturando a home
// foi adicionado o componente GlobalStyle logo após a importação dos estilos. Isso garantirá que o estilo global seja aplicado em toda a aplicação, incluindo o componente Login.
//import{MdEmail, MdLock} from 'react-icons/md' importa icones do material tive que instalar o pacote yarn add react-icons

import React from 'react';
/* import { Link } from 'react-router-dom'; */
import { useNavigate } from 'react-router-dom'; 
import{MdEmail, MdLock} from 'react-icons/md'
import { useForm } from 'react-hook-form';
import { Button } from '../../components/button';
import { Header } from '../../components/header';
import { Input } from '../../components/Input';
import { Column, Container,CriarText,EsqueciText,Row,SubTitleLogin,Title,TitleLogin,Wrapper, GlobalStyle } from './styles';

const Login = () => {
   const navigate = useNavigate(); 
   const { handleSubmit, control } = useForm();
  // informa o caminho da próxima página
   const handleClickSignIn = () => {
    navigate('/cadastro');
   }; 

  const onSubmit = (data) => {
    // Lógica para lidar com os dados do formulário submetido
    console.log(data);
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Column>
          <Title>
           A plataforma para você aproveitar com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas
          </Title>
        </Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input placeholder="email" name="email" leftIcon={<MdEmail></MdEmail>} control={control} />
              <Input placeholder="senha" name="senha" type="passaport" leftIcon={<MdLock></MdLock>} control={control} />
              <Button title="Entrar" variant = "secondary" onClick={handleClickSignIn} type ="submit" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta</CriarText>
              {/* <Link to="/cadastro">Criar conta</Link> */}
            </Row>

          </Wrapper>
      </Container>
    </>
  );
};

export { Login };
