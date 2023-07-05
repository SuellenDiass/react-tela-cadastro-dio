// import vai linkar login
// Estruturando a home
// foi adicionado o componente GlobalStyle logo após a importação dos estilos. Isso garantirá que o estilo global seja aplicado em toda a aplicação, incluindo o componente Login.
//import{MdEmail, MdLock} from 'react-icons/md' importa icones do material tive que instalar o pacote yarn add react-icons

import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import{MdEmail, MdLock, MdPerson} from 'react-icons/md'
import { useForm } from 'react-hook-form';
import { Button } from '../../components/button';
import { Header } from '../../components/header';
import { Input } from '../../components/Input';
import { Column, Container,CriarText,EsqueciText,Row,SubTitleLogin,Title,TitleLogin,Wrapper, SubTitle,GlobalStyle } from './styles';

const Cadastro = () => {
   const navigate = useNavigate(); 
   const { handleSubmit, control } = useForm();
// informa o caminho da próxima página
   const handleClickSignIn = () => {
    navigate('/feed');
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
          A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubTitleLogin>Crie sua conta e make the change</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input placeholder="Nome completo" name="usuario" leftIcon={<MdPerson></MdPerson>} control={control} />
              <Input placeholder="E-mail" name="email" leftIcon={<MdEmail></MdEmail>} control={control} />
              <Input placeholder="Password" name="senha" type="passaport" leftIcon={<MdLock></MdLock>} control={control} />
              <Button title="Criar minha conta" variant = "tertiary" onClick={handleClickSignIn} type ="submit" />
            </form>
            <SubTitle>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubTitle>
            <Row>
              <EsqueciText>Já tenho conta</EsqueciText>
              <CriarText>Fazer login</CriarText>
            </Row>

          </Wrapper>
      </Container>
    </>
  );
};

export {Cadastro };
