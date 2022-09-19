import styled from 'styled-components';

import main_photo from '../../resources/img/main_photo3.jpg';
import design from '../../resources/icons/about_me/design.svg'
import mobileWeb from '../../resources/icons/about_me/mobile_dev.svg';
import webDev from '../../resources/icons/about_me/web_development.svg';

import { Container } from "../theme/Container";
import { TitleAverage, Title, TitleLittle, Description } from "../theme/Title";
import { Divider } from '../theme/Divider';
import SkillsImg from '../theme/SkillsImg';

const ForMeSection = styled(Container)`
  padding-top: 120px;
  display: grid;
  grid-template-columns: 400px 670px;
  grid-template-rows: minmax(245px auto) minmax(255px auto);
  grid-auto-rows: minmax(245px auto);
  column-gap: 70px;
  row-gap: 40px;
`

const Foto = styled.img.attrs({
  src: main_photo,
})`
  grid-row: 1/3;
`

const ForMeTitle = styled.div`
  padding-top: 7px;
`

const DividerForMe = styled(Divider)`
  margin: 0; 
`

const TitleBig = styled(Title)`
  font-size: 36px;
`

const DescriptionAverage = styled(Description)`
margin-top: 20px;
font-size: 14px;
line-height: 21px;
`

const ForMeSkillBox = styled.div`
  display: grid;
  grid-template: repeat(2, minmax(115px, auto)) / repeat(2, 260px);
  grid-auto-rows: minmax(115px, auto);
  column-gap: 50px;
  row-gap: 20px;
`

const SkillsItem = styled.div`
  display: grid;
  grid-template-columns: 40px 200px;
  column-gap: 20px;
  width: 260px;
  height: 116px;
`

const SkillsItemComponent = ({ img, title, description }) => {
  return (
    <SkillsItem>
      <SkillsImg img={img} />

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
      <TitleBig>Меня зовут Александр</TitleBig>
      <DividerForMe />
      <DescriptionAverage>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit error quia blanditiis omnis dicta perferendis tenetur officiis doloremque nam nemo quaerat autem nesciunt quas totam, architecto nostrum aliquid reprehenderit vitae?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis impedit aperiam qui exercitationem sequi commodi perspiciatis, sunt repudiandae, ab sed harum in, saepe earum dolores dolorem consequatur odit quam? Eos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat doloribus quos repudiandae nisi expedita blanditiis unde architecto minima veritatis, deleniti mollitia! Ipsam debitis cumque voluptates modi ducimus veniam iure iusto.
      </DescriptionAverage>
    </ForMeTitle>
  )
}

function ForMeSkillBoxComponent() {
  return (
    <ForMeSkillBox>
      <SkillsItemComponent img={webDev} title={'Web-разработка'}
        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
      <SkillsItemComponent img={mobileWeb} title={'Разработка приложений'}
        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
      <SkillsItemComponent img={design} title={'UI/UX Design'}
        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
    </ForMeSkillBox>

  )
}

function ForMe() {
  return (
    <ForMeSection as="section">
      <Foto />
      <ForMeTitleComponent />
      <ForMeSkillBoxComponent />


    </ForMeSection>
  );
}

export default ForMe;
