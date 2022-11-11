import styled from 'styled-components';

import main_photo from '../../resources/img/main_photo2.jpg';
import main_photo_min from '../../resources/img/main_photo_min.jpg';

import mobileWeb from '../../resources/icons/about_me/mobile_dev.svg';
import webDev from '../../resources/icons/about_me/web_development.svg';

import { Section } from "../theme/Container";
import { TitleAverage, Title, TitleLittle, Description } from "../theme/Title";
import { Divider } from '../theme/Divider';
import SkillsImg, { ImgSrc } from '../theme/SkillsImg';

const ForMeSection = styled(Section)`
  display: grid;
  grid-template-columns: 1fr 1.55fr;
  grid-template-rows: minmax(245px auto) minmax(255px auto);
  grid-auto-rows: minmax(245px auto);
  column-gap: 70px;
  row-gap: 40px;
  text-align: left;
  @media ${props => props.theme.media.notebook} {
    column-gap: 30px;
    row-gap: 20px;
  }
  @media ${props => props.theme.media.bigTablet} {
    grid-template-columns: 1fr 1.26fr;
  }
  @media ${props => props.theme.media.phone} {
    grid-template-columns: 1fr;
  }
`

const Foto = styled(ImgSrc)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  grid-row: 1/3;
  @media ${props => props.theme.media.phone} {
    grid-row: unset;
  }
`

const ForMeTitle = styled.div`
  padding-top: 7px;
`

const DividerForMe = styled(Divider)`
  margin: 0; 
`

const DescriptionAverage = styled(Description)`
  margin-top: 20px;
  font-size: 14px;
  line-height: 21px;
`

const ForMeSkillBox = styled.div`
  display: grid;
  grid-template-rows: repeat(1, minmax(115px, auto));
  grid-template-columns: repeat(2, 260px);
  grid-auto-rows: minmax(115px, auto);
  column-gap: 50px;
  row-gap: 20px;
  @media ${props => props.theme.media.notebook} {
    column-gap: 20px;
  }
  @media ${props => props.theme.media.bigTablet} {
    grid-template-rows: repeat(2, minmax(70px, auto));
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(70px, auto);
  }

`

const SkillsItem = styled.div`
  display: grid;
  grid-template-columns: 40px auto;
  column-gap: 20px;
  width: 100%; 
`

const SkillsItemComponent = ({ img, imgMobile, title, description }) => {
  return (
    <SkillsItem>
      <SkillsImg img={img} imgMobile={imgMobile} />
      <div>
        <TitleLittle>{title}</TitleLittle>
        <Description>{description}</Description>
      </div>
    </SkillsItem>
  )
}

function ForMeTitleComponent() {
  return (
    <ForMeTitle>
      <TitleAverage as="h2">Про меня</TitleAverage>
      <Title>Меня зовут Александр</Title>
      <DividerForMe />
      <DescriptionAverage>
        С 2020 года развиваю себя как Frontend-разработчика. В этой работе я нахожу вдохновение т.к. она позволяет бесконечо развиваться, совершенствовать свои навыки. Потолока нет, в любой момент ты можешь открывать для себя все новые и новые уровни понимания - это круто! Разработка дает мне возможность самостоятельно реализовывать свои идеи и вкладывать в себя. Приходилось так же выступать и в роли заказчика програмных продуктов, поэтому у меня есть понимание как это выглядит с "другой стороны".
        Люблю упрощать сложное, систематизировать информацию и отлаживать бизнес процессы. Я слишком ленив, что бы делать не качественно. Хорошо умею ладить с людьми, всегда стараюсь найти общий язык.
      </DescriptionAverage>
    </ForMeTitle>
  )
}

function ForMeSkillBoxComponent() {
  return (
    <ForMeSkillBox>
      <SkillsItemComponent img={webDev} title={'Web-разработка'}
        description={'Верстка сайтов с адаптивностью и кроссбраузерностью.'} />
      <SkillsItemComponent img={mobileWeb} title={'Разработка приложений'}
        description={'Разработка приложений frontend'} />
      {/* <SkillsItemComponent img={design} title={'Верстка'}
        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} /> */}
    </ForMeSkillBox>

  )
}

function ForMe() {
  return (
    <ForMeSection as="section" id='for-me'>
      <Foto img={main_photo} imgMobile={main_photo} />
      <ForMeTitleComponent />
      <ForMeSkillBoxComponent />


    </ForMeSection>
  );
}

export default ForMe;
