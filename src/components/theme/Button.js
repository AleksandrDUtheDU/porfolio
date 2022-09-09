import styled from "styled-components";

export const Button = styled.a`
color: black;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    padding: 12px 25px;
    height: 45px;
    background: ${props => props.color || props.theme.colors.primary};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    align-items: center;

    &:hover {
        background: grey;
        box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.288);
        color: wait;

    }

    &_light {
        background: rgba(255, 255, 255, 0);
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);

    }

`;