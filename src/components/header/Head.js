import styled from "styled-components";
import { Button } from "../theme/Button";
import { Title } from "../theme/Title";
import { Container } from "../theme/Container";
import bgPhoto from "../../resources/img/main_bg2.jpg"
import { TitleAverage } from "../theme/Title";


const TitleBig = styled(Title)`
        font-size: 48px;
        width: 700px;
        padding-top: 10px;
`

const LightButton = styled(Button)`
  background: rgba(255, 255, 255, 0);
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
`

const HeadWrapp = styled.section`
    min-height: 100vh;
    position: relative;
    background: url(${bgPhoto}) no-repeat 50%/cover;
    padding-top: 205px;

`

const BtnWrapp = styled.div`
        margin-top: 25px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 250px;
`

function Head() {
  return (
    <HeadWrapp>
      <Container>
        <TitleAverage>Меня зовут Александр Дудник</TitleAverage>
        <TitleBig as="h1">Я frontend разработчик из города Санкт-Петербург</TitleBig>
        <BtnWrapp>
          <Button href="#">Портфолио</Button>
          <LightButton href="#">Про меня</LightButton>
        </BtnWrapp>
      </Container>
    </HeadWrapp>
  );
}

export default Head;


// className="title title_fz16 head__circle"