import styled from 'styled-components';

import { TitleLittle, Title, TitleSection, TitleAverage, Description } from "../theme/Title";
import { Section } from "../theme/Container";
import { Divider } from '../theme/Divider';
import { ImgSrc } from '../theme/SkillsImg';

import html5 from '../../resources/icons/skills/html5.svg';
import css3 from '../../resources/icons/skills/css3.svg';
import javaScript from '../../resources/icons/skills/js.svg';
import react from '../../resources/icons/skills/react.svg';
import nodeJs from '../../resources/icons/skills/node.js.svg';
import mongoBb from '../../resources/icons/skills/mongo.db.svg';



const MyHardSkillWrapp = styled.div`
  margin-top: 60px;
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fit, 270px);
  grid-template-rows: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  gap: 10px;
`

const MyHardSkillItem = styled.div`
  display: grid;
  align-items: center;
  grid-template-rows: 60px 20px 100px;
  gap: 10px;
  padding: 30px;
  height: 100%;
  width: 100%;
  text-align: left;
  border: 1px solid black;
`

const MyHardSkillPercentWrapp = styled.div`
  margin-top: 120px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 270px);
  grid-template-rows: minmax(70px, auto);
  grid-auto-rows: minmax(70px, auto);
  justify-content: space-around;
  gap: 30px 45px;
  /* @media ${props => props.theme.media.notebook} {
    gap: 20px;
  }
  @media ${props => props.theme.media.bigTablet} {
    gap: 30px;
  }

  @media ${props => props.theme.media.tablet} {
    grid-template-columns: repeat(1, minmax(425px, auto));
  } */

`
const MyHardSkillPercentTitleBox = styled.div`
  display: flex;
  justify-content:space-between;
`


const MyHardSkillPercentBox = styled.div`
  position: relative;
  margin-top: 27px;
  width: 100%;
  height: 14px;
  background: #E8E4DE;
  border-radius: 4px;
  &:before 
    {
      content: '';
        position: absolute;
        width: ${props => props.width};
        height: 14px;
        border-radius: 4px;
        background: ${props => props.color || props.theme.colors.primary};
        z-index: 20;
        top: 0;
        left: 0;

    };
`

const MyHardSkillPercentComponent = ({ title, percent }) => {
  return (
    <div>
      <MyHardSkillPercentTitleBox>
        <TitleAverage>{title}</TitleAverage>
        <TitleLittle>{percent}</TitleLittle>
      </MyHardSkillPercentTitleBox >
      <MyHardSkillPercentBox width={percent} />
    </div>
  )
}

const MyHardSkillItemComponent = ({ img, title, descr }) => {
  return (
    <MyHardSkillItem>
      <ImgSrc img={img} />
      <TitleLittle>{title}</TitleLittle>
      <Description>{descr}</Description>
    </MyHardSkillItem>
  )
}

function MyHardSkill() {
  return (
    <Section as="section" id="skills">
      <TitleSection as="h2">Навыки</TitleSection>
      <Title>Что я использую в работе</Title>
      <Divider />
      <MyHardSkillWrapp>
        <MyHardSkillItemComponent
          img={html5}
          title={'HTML5'}
          descr={'Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта'}
        />
        <MyHardSkillItemComponent
          img={css3}
          title={'CSS3'}
          descr={'Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!'}
        />
        <MyHardSkillItemComponent
          img={javaScript}
          title={'Java Script'}
          descr={'Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое'}
        />
        <MyHardSkillItemComponent
          img={react}
          title={'React'}
          descr={'Эта библиотека позволяет создавать web-приложения. Мы можем создать максимально интерактивный продукт именно под ваши цели'}
        />
        <MyHardSkillItemComponent
          img={nodeJs}
          title={'Node.js'}
          descr={'Эта платформа позволяет создавать бэкенд для вашего продукта - “мозги”, которые будут выполнять действия, которые пользователь не видит'}
        />
        <MyHardSkillItemComponent
          img={mongoBb}
          title={'Mongo.db'}
          descr={'Это нереляционная база данных, которая будет хранить данные вашего сайта или приложения'}
        />
      </MyHardSkillWrapp>
      <MyHardSkillPercentWrapp>
        <MyHardSkillPercentComponent
          title={'Создание сайтов'}
          percent={'100%'}
        />
        <MyHardSkillPercentComponent
          title={'Создание приложений'}
          percent={'85%'}
        />
        <MyHardSkillPercentComponent
          title={'Работа с данными'}
          percent={'90%'}
        />
        <MyHardSkillPercentComponent
          title={'Креативность'}
          percent={'75%'}
        />
        <MyHardSkillPercentComponent
          title={'Создание дизайна'}
          percent={'90%'}
        />
        <MyHardSkillPercentComponent
          title={'Soft skills'}
          percent={'95%'}
        />
      </MyHardSkillPercentWrapp>
    </Section>
  );
}

export default MyHardSkill;
