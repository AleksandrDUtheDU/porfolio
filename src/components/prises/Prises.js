import styled from 'styled-components';

import { TitleLittle, TitleSection, TitleAverage, Description } from "../theme/Title";
import { Section } from "../theme/Container";
import { Divider } from '../theme/Divider';

const MyPrisesWrapp = styled.div`
margin-top: 70px;
display: grid;
grid-template-columns: repeat(2, 340px);
grid-template-rows: repeat(3, 50px);
grid-auto-rows: 50px;
justify-content:space-around;
gap: 15px;
text-align:left;
`
const MyPrisesTitle = styled(TitleAverage)`
padding:0;
    &:before 
    {
        top: 4px;
        left: -30px;
        height: 15px;
        width: 15px;
    };

`

const MyPrisesTitleBox = styled.div`
display: flex;
justify-content:space-between;
text-align:left;
`

const MyPrisesComponent = ({ title, prises, descr }) => {
  return (
    <div>
      <MyPrisesTitleBox>
        <MyPrisesTitle>{title}</MyPrisesTitle>
        <TitleLittle>{prises}</TitleLittle>
      </MyPrisesTitleBox >
      <Description>{descr}</Description>
    </div>
  )
}


function Prises() {
  return (
    <Section as="section">
      <TitleSection as="h2">Прайс-лист</TitleSection>
      <Divider />

      <MyPrisesWrapp>
        <MyPrisesComponent
          title={'Landing-page'}
          prises={'от 8000 руб.'}
          descr={'Одностраничный сайт для презентации услуг/товаров/...'}
        />
        <MyPrisesComponent
          title={'Корпоративный сайт'}
          prises={'от 20000 руб.'}
          descr={'Сайт для вашего бизнеса или компании'}
        />
        <MyPrisesComponent
          title={'Интернет-магазин'}
          prises={'от 30000 руб.'}
          descr={'Инструмент для ваших продаж в сети'}
        />
        <MyPrisesComponent
          title={'Web-приложение'}
          prises={'от 28000 руб.'}
          descr={'Приложение внутри браузера для лучшего комфорта'}
        />
        <MyPrisesComponent
          title={'Android/IOS Приложение'}
          prises={'от 25000 руб.'}
          descr={'Приложение для смартфона любой ОС'}
        />
        <MyPrisesComponent
          title={'Дизайн'}
          prises={'Индивидуально'}
          descr={'Создам дизайн для вашего сайта/приложения...'}
        />
      </MyPrisesWrapp>

    </Section>
  );
}

export default Prises;
