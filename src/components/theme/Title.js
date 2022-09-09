import styled from "styled-components";

export const Title = styled.div`
    font-weight: 700;
    font-size: 36px;
    line-height: 60px;
    z-index: 5;
`;

export const TitleAverage = styled(Title)`
    font-size: 16px;
    line-height: 24px;
    position: relative;
    padding-left: 13px;
    z-index: 2;
    &:before 
    {
        ${props => props.circle || props.theme.circle}
        top: -25%;
        left: 0;

    };
`
export const Description = styled.p`
    margin-top: 10px;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
`
