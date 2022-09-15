import styled from 'styled-components';

import { TitleLittle, Title, TitleSection, TitleAverage, Description } from "../theme/Title";
import { Section } from "../theme/Container";
import { Divider } from '../theme/Divider';
import { SkillsImgSrc } from '../theme/SkillsImg';

import uber from '../../resources/img/works/uber.jpg';
import pulse from '../../resources/img/works/pulse.jpg';
import bread from '../../resources/img/works/bread.jpg';
import plans from '../../resources/img/works/plans.jpg';
import ipad from '../../resources/img/works/ipad.jpg';
import mac from '../../resources/img/works/mac.jpg';



const MyWorksWrapp = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template: repeat(2, 280px) / repeat(4, 280px);
  /* grid-template-columns: repeat(4, 280px);
  grid-template-rows: repeat(2, 280px); */
  gap: 5px;
`

const MyWorksItem = styled.a`

`

const MyWorksItemHorizontal = styled(MyWorksItem)`
grid-row: 2 / 3;
grid-column: 2 / 4;
`

const MyWorksItemVertikal = styled(MyWorksItem)`
grid-row: 1 / 3;
grid-column: 4 / 5;
`

const MyWorksImg = styled(SkillsImgSrc)`
  width: 100%;
  &:hover {
    filter: grayscale(100%);
  }

`

function MyWorks() {
  return (
    <Section as="section">
      <TitleSection as="h2">Портфолио</TitleSection>
      <Title>Мои работы</Title>
      <Divider />
      <MyWorksWrapp>
        <MyWorksItem href="http://gachiclab.ru/" target="blank">
          <MyWorksImg img={uber} />
        </MyWorksItem>
        <MyWorksItem href="http://gachiclab.ru/" target="blank">
          <MyWorksImg img={pulse} />
        </MyWorksItem>
        <MyWorksItem href="http://gachiclab.ru/" target="blank">
          <MyWorksImg img={bread} />
        </MyWorksItem>
        <MyWorksItemVertikal href="http://gachiclab.ru/" target="blank">
          <MyWorksImg img={plans} />
        </MyWorksItemVertikal>
        <MyWorksItem href="http://gachiclab.ru/" target="blank">
          <MyWorksImg img={ipad} />
        </MyWorksItem>
        <MyWorksItemHorizontal href="http://gachiclab.ru/" target="blank">
          <MyWorksImg img={mac} />
        </MyWorksItemHorizontal>
      </MyWorksWrapp>
    </Section>
  );
}

export default MyWorks;
