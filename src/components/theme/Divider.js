import styled from "styled-components";

export const Divider = styled.div`
    width: 60px;
    height: 3px;
    background: ${props => props.color || props.theme.colors.primary};
    margin: 25px auto 0;
    `