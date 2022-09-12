import styled from 'styled-components';

import { TitleAverage, Title, TitleLittle, Description } from "../theme/Title";
import { Container } from "../theme/Container";
import { Divider } from '../theme/Divider';
import SkillsImg from '../theme/SkillsImg';

import university from '../../resources/icons/experience/university.svg';
import courses from '../../resources/icons/experience/courses.svg';
import developer from '../../resources/icons/experience/developer.svg';
import designer from '../../resources/icons/experience/designer.svg';


const MySoftSkillSection = styled(Container)`
  padding-top: 120px;
  /* align-items: center; */
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

const MySoftSkillWrapp = styled.div`
  margin-top: 70px;
  display: grid;
  //align-items: center;
  //justify-items: center;
  justify-content: center;
  grid-template-columns: repeat(2, 425px);
  grid-template-rows: 380px;
  grid-auto-rows: 380px;
  gap: 130px;
`

const MySoftSkillWrappCollum = styled.div`
  text-align: left;
  padding-left: 45px ;


`

const TitleMySoftSkillWrapp = styled(TitleAverage)`
  padding: 0;
  font-size: 20px;
  line-height: 30px;
    &:before 
    {
        top: 7px;
        left: -50px;
        height: 15px;
        width: 15px;
        /* transform: translateX(-50%); */
    };
`

const ItemMySoftSkill = styled.li`
  margin-top: 45px;
  position: relative;
    &:after {
      content: '';
      position: absolute;
      width: 1px;
      height: calc(100% + 54px);
      background-color: black;
      top: -54px;
      left: -43px;
    };
`
const HeadItemWrapp = styled.div`
  display: flex;
  position: relative;
  &:before {
      content: '';
      position: absolute;
      width: 45px;
      height: 1px;
      background-color: black;
      top: 18px;
      left: -43px;
    };

`

const TitleItemWrapp = styled.div`
  padding-left: 20px;
`

const TitleItemDescr = styled(Description)`
  margin: 0;
`

const ItemDescrLink = styled.a.attrs(prop => ({ href: prop.link, target: 'blank' }))`
  color: ${props => props.color || props.theme.colors.primary};
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
`

const ItemMySoftSkillComponent = ({ img, title, subTitle, descr, link, titleLink }) => {

  return (
    <ItemMySoftSkill>
      <HeadItemWrapp>
        <SkillsImg img={img} />
        <TitleItemWrapp>
          <TitleLittle as="h4">{title}</TitleLittle>
          <TitleItemDescr>{subTitle}</TitleItemDescr>
        </TitleItemWrapp>
      </HeadItemWrapp>
      <Description>{descr}</Description>
      <ItemDescrLink link={link}>{titleLink}</ItemDescrLink>
    </ItemMySoftSkill>
  )

}


function MySoftSkill() {
  return (
    <MySoftSkillSection as="section">
      <TitleMySoftSkill as="h2">Опыт</TitleMySoftSkill>
      <Title>Чем я буду полезен</Title>
      <Divider />
      <MySoftSkillWrapp>
        <MySoftSkillWrappCollum>
          <TitleMySoftSkillWrapp as="h3">Образование</TitleMySoftSkillWrapp>
          <ul>
            <ItemMySoftSkillComponent
              img={university}
              title={'ЛГУ им. А. С. Пушкина'}
              subTitle={'Диплом специалиста | СПб (2009-2014)'}
              descr={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex incidunt sequi at eum ratione tenetur iure vel odit sapiente, beatae quis provident quasi omnis inventore? Minima aliquam rem eum labore.'}
            />
            <ItemMySoftSkillComponent
              img={courses}
              title={'UNDEMY'}
              subTitle={'Полный курс по JavaScript + React | 2022'}
              descr={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex incidunt sequi at eum ratione tenetur iure vel odit sapiente, beatae quis provident quasi omnis inventore? Minima aliquam rem eum labore.'}
              link={'https://www.udemy.com/certificate/UC-bc2945a2-edb7-4ce1-80fd-73f8ac400f7e/'}
              titleLink={'Сертификат'}
            />
          </ul>
        </MySoftSkillWrappCollum>
        <MySoftSkillWrappCollum>
          <TitleMySoftSkillWrapp as="h3">Опыт работы</TitleMySoftSkillWrapp>
          <ul>
            <ItemMySoftSkillComponent
              img={developer}
              title={'Front-End Developer'}
              subTitle={'EPAM | СПб (2020-2021)'}
              descr={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex incidunt sequi at eum ratione tenetur iure vel odit sapiente, beatae quis provident quasi omnis inventore? Minima aliquam rem eum labore.'}
            />
            <ItemMySoftSkillComponent
              img={designer}
              title={'UI/UX Designer'}
              subTitle={'Squad Team | СПб (2021)'}
              descr={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex incidunt sequi at eum ratione tenetur iure vel odit sapiente, beatae quis provident quasi omnis inventore? Minima aliquam rem eum labore.'}
            />
          </ul>
        </MySoftSkillWrappCollum>
      </MySoftSkillWrapp>
    </MySoftSkillSection>
  );
}

export default MySoftSkill;
