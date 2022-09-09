import styled from 'styled-components';

import { Container } from "../theme/Container";
import { TitleAverage, Title, Description } from "../theme/Title";
import { Divider } from '../theme/Divider';


const MySoftSkillSection = styled(Container)`
  padding-top: 120px;
  align-items: center;
  text-align: center;
  
`

const TitleMySoftSkill = styled(TitleAverage)`
padding: 0;
    &:before 
    {
        top: -25%;
        left: 50%;
        transform: translateX(-50%);
    };
`





function MySoftSkill() {
  return (
    <MySoftSkillSection as="section">
      <TitleMySoftSkill as="h2">Опыт</TitleMySoftSkill>
      <Title>Чем я буду полезен</Title>
      <Divider />
      <Title>НИЧЕМ НАХУЙ</Title>
    </MySoftSkillSection>
  );
}

export default MySoftSkill;
