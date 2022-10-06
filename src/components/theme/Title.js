import styled from "styled-components";

export const Title = styled.div`
    margin-top: 20px;
    font-weight: 700;
    font-size: 36px;
    line-height: 60px;
    z-index: 5;
    @media ${props => props.theme.media.bigTablet} {
    font-size: 28px;
    line-height: 36px;
    }
    @media ${props => props.theme.media.smallPhone} {
    font-size: 24px;
    }

`;

export const TitleAverage = styled(Title)`
    margin-top: 0;
    font-size: 16px;
    line-height: 24px;
    position: relative;
    padding-left: 13px;
    z-index: 2;
    /* @media ${props => props.theme.media.bigTablet} {
    margin-top: 50px;
    } */
    &:before 
    {
        ${props => props.circle || props.theme.circle}
        top: -25%;
        left: 0;

    };
`

export const TitleLittle = styled(Title)`
    margin-top: 0;
    font-size: 14px;
    line-height: 21px;
`

export const TitleSection = styled(TitleAverage)`
  padding: 0;
    &:before 
    {
        top: -25%;
        left: 50%;
        transform: translateX(-50%);
    };
`

export const Description = styled.p`
    margin-top: 10px;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
`