import styled from 'styled-components';

import { TitleLittle, TitleSection, TitleAverage, Description } from "../theme/Title";
import { Section } from "../theme/Container";
import { Divider } from '../theme/Divider';

const MyPrisesWrapp = styled.div`
margin-top: 70px;
display: grid;
grid-template-columns: repeat(2, 340px);
grid-template-rows: repeat(1, minmax(50px, auto));
grid-auto-rows: minmax(50px, auto);
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
    <Section as="section" id="prises">
      <TitleSection as="h2">Прайс-лист</TitleSection>
      <Divider />

      <MyPrisesWrapp>
        <MyPrisesComponent
          title={'Landing-page'}
          prises={'от 25000 руб.'}
          descr={'Одностраничный сайт для презентации услуг/товаров/...'}
        />
        <MyPrisesComponent
          title={'Корпоративный сайт'}
          prises={'от 80000 руб.'}
          descr={'Сайт для вашего бизнеса или компании'}
        />
        <MyPrisesComponent
          title={'Интернет-магазин'}
          prises={'от 100000 руб.'}
          descr={'Инструмент для ваших продаж в сети'}
        />
        <MyPrisesComponent
          title={'Web-приложение'}
          prises={'от 120000 руб.'}
          descr={'Приложение внутри браузера для лучшего комфорта'}
        />
      </MyPrisesWrapp>

    </Section>
  );
}

export default Prises;
