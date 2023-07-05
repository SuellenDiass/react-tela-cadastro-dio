import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/header'; 
// caso dê conflito no import Header acima utiliza:import { Header } from '../../components/Header/index';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Suellen" image="https://github.com/SuellenDiass/SuellenDiass/assets/102911341/50de9418-1dd2-4a78-acc9-6d0c8573861a" percentual={25} /> 
                <UserInfo nome="Suellen" image="https://github.com/SuellenDiass/SuellenDiass/assets/102911341/50de9418-1dd2-4a78-acc9-6d0c8573861a" percentual={65}/>
                <UserInfo nome="Suellen" image="https://github.com/SuellenDiass/SuellenDiass/assets/102911341/50de9418-1dd2-4a78-acc9-6d0c8573861a" percentual={45}/>
                <UserInfo nome="Suellen" image="https://github.com/SuellenDiass/SuellenDiass/assets/102911341/50de9418-1dd2-4a78-acc9-6d0c8573861a" percentual={72}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 
