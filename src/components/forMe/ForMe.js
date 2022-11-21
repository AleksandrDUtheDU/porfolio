import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { nav } from "../data/data";
import { theme } from '../theme/Theme';
import { Section } from "../theme/Container";
import { TitleAverage, Title, TitleLittle, Description } from "../theme/Title";
import { Divider } from '../theme/Divider';
import SkillsImg, { ImgSrc } from '../theme/SkillsImg';

const name = 'Про меня'
const { link, title, descr, img, content } = nav.find((e) => e.name === name)

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
const items = content.map(item => {

  const { id, name, descr, img } = item;

  return (
    <SkillsItem key={id}>
      <SkillsImg img={img} />
      <div>
        <TitleLittle>{name}</TitleLittle>
        <Description>{descr}</Description>
      </div>
    </SkillsItem>
  )
});

function ForMeTitleComponent() {
  return (
    <ForMeTitle>
      <TitleAverage as="h2">{name}</TitleAverage>
      <Title>{title}</Title>
      <DividerForMe />
      <DescriptionAverage>{descr}</DescriptionAverage>
    </ForMeTitle>
  )
}

function ForMeSkillBoxComponent() {
  return (
    <ForMeSkillBox>
      {items}
    </ForMeSkillBox>
  )
}

function ForMe() {
  const isBigTablet = useMediaQuery({
    query: theme.media.bigTablet
  })


  return (
    <ForMeSection as="section" id={link}>
      {isBigTablet ? '' : <Foto img={img} />}
      <ForMeTitleComponent />
      <ForMeSkillBoxComponent />
    </ForMeSection>
  );
}

export default ForMe;
