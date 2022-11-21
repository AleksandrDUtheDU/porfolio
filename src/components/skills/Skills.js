import styled from 'styled-components';
import { useState, useEffect, useMemo } from 'react';

import { nav } from "../data/data";
import { setContent } from '../../shared/services';
import { TitleLittle, Title, TitleSection, TitleAverage, Description } from "../theme/Title";
import { Section } from "../theme/Container";
import { Divider } from '../theme/Divider';
import { ImgSrc } from '../theme/SkillsImg';


const TehnoWrapp = styled.div`
  margin-top: 60px;
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fit, 270px);
  grid-template-rows: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  gap: 10px;
`

const SkillWrapp = styled.div`
  margin-top: 120px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 270px);
  grid-template-rows: minmax(70px, auto);
  grid-auto-rows: minmax(70px, auto);
  justify-content: space-around;
  gap: 30px 45px;
`


const TehnoItem = styled.div`
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

const SkillTitleBox = styled.div`
  display: flex;
  justify-content:space-between;
`


const SkillPercentBox = styled.div`
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

function Skills() {

  const name = 'Навыки'

  const [process, setProcess] = useState('loading');
  const [technologies, setTechnologies] = useState({});
  const [skills, setSkills] = useState({});

  useEffect(() => {
    getData(nav)
  }, [process])

  const getData = async (data) => {
    setProcess('loading')
    try {
      const res = data.find((e) => e.name === name)
      const { technologies, skills } = res
      setTechnologies(technologies)
      setSkills(skills)
      setProcess('confirmed')
      return res
    }
    catch (err) {
      setProcess('error')
      alert(err);
    }
  }

  const technologiesItems = (arr) => arr.map(item => {

    const { id, name, descr, img } = item;

    return (
      <TehnoItem key={id}>
        <ImgSrc img={img} />
        <TitleLittle>{name}</TitleLittle>
        <Description>{descr}</Description>
      </TehnoItem>
    )
  });

  const skillsItem = (arr) => arr.map(item => {

    const { id, percent, name } = item;

    return (
      <div key={id}>
        <SkillTitleBox>
          <TitleAverage>{name}</TitleAverage>
          <TitleLittle>{percent}</TitleLittle>
        </SkillTitleBox >
        <SkillPercentBox width={percent} />
      </div>
    )
  });

  const technologiesItemsRend = useMemo(() => {
    return setContent(process, () => technologiesItems(technologies));
  }, [process, technologies])

  const skillsItemRend = useMemo(() => {
    return setContent(process, () => skillsItem(skills));
  }, [process, skills])


  return (
    <Section as="section" id="skills">
      <TitleSection as="h2">Навыки</TitleSection>
      <Title>Что я использую в работе</Title>
      <Divider />
      <TehnoWrapp>
        {technologiesItemsRend}
      </TehnoWrapp>
      <SkillWrapp>
        {skillsItemRend}
      </SkillWrapp>
    </Section>
  );
}

export default Skills;
