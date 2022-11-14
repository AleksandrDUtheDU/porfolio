import styled from "styled-components";
import { Button } from "../theme/Button";
import { Title } from "../theme/Title";
import { Section } from "../theme/Container";
import bgPhoto from "../../resources/img/main_bg2.jpg"
import { TitleAverage } from "../theme/Title";

const HeadWrapp = styled.section`
  min-height: 100vh;
  position: relative;
  background: url(${bgPhoto}) no-repeat 50%/cover;
  padding-top: 205px;
  @media ${props => props.theme.media.notebook} {
    background: url(${bgPhoto}) no-repeat 58%/cover;
  }
  @media ${props => props.theme.media.bigTablet} {
    padding-right: 300px;
  }
  @media ${props => props.theme.media.phone} {
    padding-top: 40px;
    padding-right: 0;
    background: url(${bgPhoto}) no-repeat 70%/cover;
  }
`

const HeadSection = styled(Section)`
  text-align: left;
`

const TitleBig = styled(Title)`
  font-size: 48px;
  line-height: 60px;
  max-width: 700px;
  padding-top: 10px;
  @media ${props => props.theme.media.tablet} {
    font-size: 34px;
    line-height: 42px;
    max-width: 550px;
  }
  @media ${props => props.theme.media.phone} {
    margin-top: 560px;
    font-size: 26px;
    line-height: 39px;
  }
`

const BtnWrapp = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
`

const LightButton = styled(Button)`
  background: rgba(255, 255, 255, 0);
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
`


function Head() {
  return (
    <HeadWrapp>
      <HeadSection>
        <TitleAverage>Меня зовут Александр Дудник</TitleAverage>
        <TitleBig as="h1">Я frontend разработчик из города Санкт-Петербург</TitleBig>
        <BtnWrapp>
          <Button href="#my-works">Портфолио</Button>
          <LightButton href="#for-me">Про меня</LightButton>
        </BtnWrapp>
      </HeadSection>
    </HeadWrapp>
  );
}

export default Head;
