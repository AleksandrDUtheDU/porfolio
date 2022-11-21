import styled from 'styled-components';
import { useState, useEffect, useMemo } from 'react';

import { nav } from "../data/data";
import { setContent } from '../../shared/services';
import { TitleAverage, Title, TitleLittle, TitleSection, Description } from "../theme/Title";
import { Section } from "../theme/Container";
import { Divider } from '../theme/Divider';
import SkillsImg from '../theme/SkillsImg';


const ExperienceWrapp = styled.div`
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
    display: flex;
    flex-direction: column;
  }
`

const ExperienceWrappCollum = styled.div`
  text-align: left;
  padding-left: 45px ;
`

const TitleExperienceWrapp = styled(TitleAverage)`
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

const ItemExperience = styled.li`
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

function Experience() {

  const name = 'Опыт'

  const [process, setProcess] = useState('loading');
  const [education, setEducation] = useState({});
  const [workExperience, setWorkExperience] = useState({});

  useEffect(() => {
    getData(nav)
  }, [process])

  const getData = async (data) => {
    setProcess('loading')
    try {
      const res = data.find((e) => e.name === name)
      const { education, workExperience } = res
      setEducation(education)
      setWorkExperience(workExperience)
      setProcess('confirmed')
      return res
    }
    catch (err) {
      setProcess('error')
      alert(err);
    }
  }

  const items = (arr) => arr.map(item => {

    const { id, title, name, descr, img, linkName, link } = item;

    return (
      <ItemExperience key={id}>
        <HeadItemWrapp>
          <SkillsImg img={img} />
          <TitleItemWrapp>
            <TitleLittle as="h4">{name}</TitleLittle>
            <TitleItemDescr>{title}</TitleItemDescr>
          </TitleItemWrapp>
        </HeadItemWrapp>
        <Description>{descr}</Description>
        <ItemDescrLink link={link}>{linkName}</ItemDescrLink>
      </ItemExperience>
    )
  });

  const educationRend = useMemo(() => {
    return setContent(process, () => items(education));
  }, [process, education])

  const workExperienceRend = useMemo(() => {
    return setContent(process, () => items(workExperience));
  }, [process, workExperience])


  return (
    <Section as="section" id='experience'>
      <TitleSection as="h2">Опыт</TitleSection>
      <Title>Чем я буду полезен</Title>
      <Divider />
      <ExperienceWrapp>
        <ExperienceWrappCollum>
          <TitleExperienceWrapp as="h3">Образование</TitleExperienceWrapp>
          <ul>
            {educationRend}
          </ul>
        </ExperienceWrappCollum>
        <ExperienceWrappCollum>
          <TitleExperienceWrapp as="h3">Опыт работы</TitleExperienceWrapp>
          <ul>
            {workExperienceRend}
          </ul>
        </ExperienceWrappCollum>
      </ExperienceWrapp>
    </Section>
  );
}

export default Experience;
