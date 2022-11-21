import styled from 'styled-components';
import { useState, useEffect, useMemo } from 'react';

import { nav } from "../data/data";
import { setContent } from '../../shared/services';
import { TitleLittle, TitleSection, TitleAverage, Description } from "../theme/Title";
import { Section } from "../theme/Container";
import { Divider } from '../theme/Divider';

const PricesWrapp = styled.div`
padding: 10px;
margin-top: 70px;
display: grid;
grid-template-columns: repeat(auto-fit, 270px);
grid-template-rows: minmax(50px, auto);
grid-auto-rows: minmax(50px, auto);
justify-content:space-around;
gap: 30px;
text-align:left;
  @media ${props => props.theme.media.bigTablet} {
    margin-top: 30px;
  }
  @media ${props => props.theme.media.smallPhone} {
    justify-content: right;
  }
`

const PricesTitle = styled(TitleAverage)`
padding:0;
    &:before 
    {
        top: 4px;
        left: -25px;
        height: 15px;
        width: 15px;
    };
`

const PriceValue = styled(TitleLittle)`
  font-size: 16px;
  line-height: 24px;
`

const PricesTitleBox = styled.div`
display: flex;
justify-content:space-between;
text-align:left;
`


function Prices() {

  const name = 'Прайс-лист'

  const [process, setProcess] = useState('loading');
  const [prices, setPrices] = useState({});

  useEffect(() => {
    getData(nav)
  }, [process])

  const getData = async (data) => {
    setProcess('loading')
    try {
      const res = data.find((e) => e.name === name)
      const { prices } = res
      setPrices(prices)
      setProcess('confirmed')
      return res
    }
    catch (err) {
      setProcess('error')
      alert(err);
    }
  }

  const items = (arr) => arr.map(item => {

    const { id, name, descr, price } = item;

    return (
      <div key={id}>
        <PricesTitleBox>
          <PricesTitle>{name}</PricesTitle>
          <PriceValue>{price}</PriceValue>
        </PricesTitleBox >
        <Description>{descr}</Description>
      </div>
    )
  });

  const pricesRend = useMemo(() => {
    return setContent(process, () => items(prices));
  }, [process, prices])


  return (
    <Section as="section" id="prices">
      <TitleSection as="h2">Прайс-лист</TitleSection>
      <Divider />
      <PricesWrapp>
        {pricesRend}
      </PricesWrapp>
    </Section>
  );
}

export default Prices;
