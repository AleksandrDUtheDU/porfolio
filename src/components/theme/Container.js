import styled from "styled-components";

export const Section = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 25px;
  padding-top: 120px;
  text-align: center;
  @media ${props => props.theme.media.notebook} {
    max-width: 960px;
  }
  @media ${props => props.theme.media.bigTablet} {
    padding: 15px;
    padding-top: 50px;
    /* max-width: 720px; // потом удалить */
  }
  @media ${props => props.theme.media.tablet} {
    max-width: 100%;
  }
  @media ${props => props.theme.media.phone} {
    padding: 10px;
    max-width: 100%;
  }

  @media ${props => props.theme.media.smallPhone} {
  }
`
