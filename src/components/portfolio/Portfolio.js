import styled from 'styled-components';
import { useState, useEffect, useMemo } from 'react';

import { nav } from "../data/data";
import { setContent } from '../../shared/services';
import { Title, TitleSection } from "../theme/Title";
import { Section } from "../theme/Container";
import { Divider } from '../theme/Divider';
import { ImgSrc } from '../theme/SkillsImg';


const PortfolioWrapp = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-auto-rows: 1fr;
  justify-content: space-around;
  gap: 15px;
  @media ${props => props.theme.media.bigTablet} {
    grid-template-columns: repeat(1, 1fr);
  }
`

const PortfolioItemLink = styled.a`
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
`

const PortfolioImg = styled(ImgSrc)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  &:hover {
    filter: grayscale(100%);
  }
`

function Portfolio() {

  const name = 'Портфолио'

  const [process, setProcess] = useState('loading');
  const [portfolio, setPortfolio] = useState({});

  useEffect(() => {
    getData(nav)
  }, [process])

  const getData = async (data) => {
    setProcess('loading')
    try {
      const res = data.find((e) => e.name === name)
      const { portfolio } = res
      setPortfolio(portfolio)
      setProcess('confirmed')
      return res
    }
    catch (err) {
      setProcess('error')
      alert(err);
    }
  }

  const items = (arr) => arr.map(item => {

    const { id, img, link } = item;

    return (
      <PortfolioItemLink key={id} href={link} target="_blank">
        <PortfolioImg img={img} />
      </PortfolioItemLink>
    )
  });

  const portfolioRend = useMemo(() => {
    return setContent(process, () => items(portfolio));
  }, [process, portfolio])


  return (
    <Section as="section" id="portfolio">
      <TitleSection as="h2">Портфолио</TitleSection>
      <Title>Мои работы</Title>
      <Divider />
      <PortfolioWrapp>
        {portfolioRend}
      </PortfolioWrapp>
    </Section>
  );
}

export default Portfolio;
