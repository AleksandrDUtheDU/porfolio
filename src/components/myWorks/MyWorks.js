import styled from 'styled-components';

import { Title, TitleSection } from "../theme/Title";
import { Section } from "../theme/Container";
import { Divider } from '../theme/Divider';
import { ImgSrc } from '../theme/SkillsImg';

import uber from '../../resources/img/works/uber.jpg';
import pulse from '../../resources/img/works/pulse.jpg';
import bread from '../../resources/img/works/bread.jpg';
import plans from '../../resources/img/works/plans.jpg';
import ipad from '../../resources/img/works/ipad.jpg';
import mac from '../../resources/img/works/mac.jpg';



const MyWorksWrapp = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(4, 1fr);
  gap: 5px;
`

const MyWorksItemLink = styled.a`

`

const MyWorksItemHorizontal = styled(MyWorksItemLink)`
  grid-row: 2 / 3;
  grid-column: 2 / 4;
`

const MyWorksItemVertikal = styled(MyWorksItemLink)`
  grid-row: 1 / 3;
  grid-column: 4 / 5;
`

const MyWorksImg = styled(ImgSrc)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  &:hover {
    filter: grayscale(100%);
  }

`

function MyWorks() {
  return (
    <Section as="section" id="my-works">
      <TitleSection as="h2">Портфолио</TitleSection>
      <Title>Мои работы</Title>
      <Divider />
      <MyWorksWrapp>
        <MyWorksItemLink href="http://gachiclab.ru/" target="blank">
          <MyWorksImg img={uber} />
        </MyWorksItemLink>
        <MyWorksItemLink href="http://gachiclab.ru/" target="blank">
          <MyWorksImg img={pulse} />
        </MyWorksItemLink>
        <MyWorksItemLink href="http://gachiclab.ru/" target="blank">
          <MyWorksImg img={bread} />
        </MyWorksItemLink>
        <MyWorksItemVertikal href="http://gachiclab.ru/" target="blank">
          <MyWorksImg img={plans} />
        </MyWorksItemVertikal>
        <MyWorksItemLink href="http://gachiclab.ru/" target="blank">
          <MyWorksImg img={ipad} />
        </MyWorksItemLink>
        <MyWorksItemHorizontal href="http://gachiclab.ru/" target="blank">
          <MyWorksImg img={mac} />
        </MyWorksItemHorizontal>
      </MyWorksWrapp>
    </Section>
  );
}

export default MyWorks;
