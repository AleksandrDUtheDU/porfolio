import styled from 'styled-components';

import { TitleAverage, Title, TitleLittle, TitleSection, Description } from "../theme/Title";
import { Section } from "../theme/Container";
import { Divider } from '../theme/Divider';
import SkillsImg from '../theme/SkillsImg';

import university from '../../resources/icons/experience/university.svg';
import courses from '../../resources/icons/experience/courses.svg';
import developer from '../../resources/icons/experience/developer.svg';


const MySoftSkillWrapp = styled.div`

  margin-top: 70px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, minmax(425px, auto));
  grid-template-rows: minmax(380px, auto);
  grid-auto-rows: minmax(380px, auto);
  gap: 130px;
  @media ${props => props.theme.media.notebook} {
    gap: 60px;
  }
  @media ${props => props.theme.media.bigTablet} {
    gap: 30px;
  }
  @media ${props => props.theme.media.tablet} {
    grid-template-columns: repeat(1, minmax(425px, auto));
  }
  @media ${props => props.theme.media.phone} {
    grid-template-columns: repeat(1, minmax(290px, auto));
  }

`

const MySoftSkillWrappCollum = styled.div`
  /* padding:10px; */
  text-align: left;
  padding-left: 45px ;
  min-height: 380px;

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
    <Section as="section" id="experience">
      <TitleSection as="h2">Опыт</TitleSection>
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
              subTitle={'WEB-разработчик | 2022'}
              descr={'Курс позволил мне освоить верстку (адаптивная, резиновая, flex, grid'}
              link={'https://www.udemy.com/certificate/UC-6a0d698b-849a-4736-b686-6cce0f0d854e/'}
              titleLink={'Сертификат'}
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
              title={'Frontend Developer'}
              subTitle={'Andersen  | СПб (2022)'}
              descr={'Основные задачи: верстка лэндингов и написание простейшей логики UI (формы отправки, слайды, адаптив), получение/отправление и обработка данных с различных API, поиск ошибок и внесение правок в старом/новом коде'}
            />
            <ItemMySoftSkillComponent
              img={developer}
              title={'Фриланс'}
              subTitle={'Биржа Фриланс | СПб (2022)'}
              descr={'Написание лендингов (Full Stack), и SPA приложений'}
            />

          </ul>
        </MySoftSkillWrappCollum>
      </MySoftSkillWrapp>
    </Section>
  );
}

export default MySoftSkill;
