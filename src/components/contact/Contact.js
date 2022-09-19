import styled from 'styled-components';

import main_photo from '../../resources/img/main_photo3.jpg';
import Telegram from '../sociaIcons/Telegram';
import Vkontakte from '../sociaIcons/Vkontakte';
import Github from '../sociaIcons/Github';


import { Container } from "../theme/Container";
import { TitleAverage, Title, TitleLittle, Description } from "../theme/Title";
import { Divider } from '../theme/Divider';
import Form from '../Form/Form';

const ContactSection = styled(Container)`
  padding: 120px 25px 90px 25px;
  display: grid;
  grid-template-columns: 400px 585px;
  /* grid-template-rows: minmax(245px auto) minmax(255px auto);
  grid-auto-rows: minmax(245px auto); */
  justify-content: space-between;
  /* column-gap: 70px; */

  /* row-gap: 40px; */
`

const Foto = styled.img.attrs({
  src: main_photo,
})`
  /* grid-row: 1/3; */
`

const ContactTitle = styled.div`
  padding-top: 7px;
`

const DividerForMe = styled(Divider)`
  margin: 0; 
`

const TitleBig = styled(Title)`
  font-size: 36px;
`

const DescriptionAverage = styled(Description)`
margin-top: 20px;
font-size: 14px;
line-height: 21px;
`

const SocialLink = styled.div`
    margin-top: 20px;
    width: 135px;
    display: flex;
    justify-content: space-between;
    align-items:center;
`;



function ContactTitleComponent() {
  return (
    <ContactTitle>
      <TitleAverage as="h2">Контакты</TitleAverage>
      <TitleBig>Свяжитесь со мной</TitleBig>
      <DividerForMe />
      <DescriptionAverage>
        Любым удобным для вас способом:
      </DescriptionAverage>
      <SocialLink>
        <Github width="30" height="30" />
        <Vkontakte width="30" height="30" />
        <Telegram width="30" height="30" />
      </SocialLink>
      <DescriptionAverage>
        Или оставьте ваши данные и я сам вам напишу:
      </DescriptionAverage>
      {/* <form action='#' >
        <div>
          <input name='name' id='name' type={'text'}></input>
          <label for='name'></label>
        </div>
        <div>
          <input name='email' id='email' type={'email'}></input>
          <label for='email'></label>
        </div>
        <div>
          <textarea name='text' id='text'  ></textarea>
          <label for='text'></label>
        </div>
      </form> */}
      <Form />

    </ContactTitle>
  )
}


function Contact() {
  return (
    <ContactSection as="section">
      <Foto />
      <ContactTitleComponent />
    </ContactSection>
  );
}

export default Contact;
