// import vai linkar login
// Estruturando a home
// foi adicionado o componente GlobalStyle logo após a importação dos estilos. Isso garantirá que o estilo global seja aplicado em toda a aplicação, incluindo o componente Home.

import { useNavigate  } from "react-router-dom";
import bannerImage from '../../assets/banner.png'

import { Button } from '../../components/button';

import { Header } from '../../components/header';


import { Container, Title, TitleHighlight, TextContent, GlobalStyle } from './styles';

const Home = () => {

    const navigate = useNavigate();
// informa o caminho da próxima página
    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (<>
        <GlobalStyle />
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                        Implemente <br />
                    </TitleHighlight>
                o seu futuro global agora!</Title>
                <TextContent>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                     desafio profissional, evoluindo em comunidade com os melhores experts.</TextContent>
                <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn}/>
            </div>
            <div>
                <img src={bannerImage} alt="Imagem principal do site." />
            </div>
        </Container>
    </>)
}

export { Home }