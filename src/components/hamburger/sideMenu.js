import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';


import { MenuContext } from './navState';
import Telegram from '../sociaIcons/Telegram';
import Vkontakte from '../sociaIcons/Vkontakte';
import Github from '../sociaIcons/Github';

const Menu = styled.nav`
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    z-index: 293;
    display: block;
    width: 345px;
    margin-top: 0px;
    padding-top: 100px;
    padding-right: 0px;
    align-items: stretch;
    background-color: ${props => props.color || props.theme.colors.primary};
    transform: translateX(-100%);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    @media ${props => props.theme.media.phone} {
        max-width: 250px;
    }
    ${props =>
        props.open &&
        css`
        transform: translateX(0);
        `}
`;

export const MenuLink = styled.a`
    font-size: 24px;
    line-height: 36px;
    color: #FFFFFF;
    text-transform: uppercase;
    position: relative;
    display: block;
    text-align: left;
    max-width: 100%;
    padding-top: 0px;
    padding-bottom: 25px;
    padding-left: 75px;
    padding-right: 20px;
    background-position: 88% 50%;
    background-size: 36px;
    background-repeat: no-repeat;
    transition: background-position 500ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
    text-decoration: none;
    transition: all 0.5s;
    @media ${props => props.theme.media.phone} {
        padding-left: 55px;
    }
    :before {
        content: '';
        position: absolute;
        left: 40px;
        top:10px;
        position: absolute;
        width: 15px;
        height: 15px;
        border: 1px solid #000000;
        border-radius: 100%;
        transition: all 0.5s;
        @media ${props => props.theme.media.phone} {
            left: 25px;
        }
    }

    :hover {
        background-position: 90% 50%;
        :before {
            background-color: black;
        }
    }
`;

const SocialLink = styled.div`
    position:absolute;
    width: 120px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
`;

export const SideMenu = ({ children }) => {
    const { isMenuOpen } = useContext(MenuContext);

    return <Menu open={isMenuOpen}>{children}</Menu>;
};

SideMenu.propTypes = {
    children: PropTypes.node,
};

SideMenu.defaultProps = {
    children: (
        <>
            <ul>
                <li><MenuLink href="#for-me">Про меня</MenuLink></li>
                <li><MenuLink href="#experience">Мой опыт</MenuLink></li>
                <li><MenuLink href="#skills">Мои навыки</MenuLink></li>
                <li><MenuLink href="#my-works">Мои работы</MenuLink></li>
                <li><MenuLink href="#prises">Прайс-лист</MenuLink></li>
                <li><MenuLink href="#contact">Контакты</MenuLink></li>
            </ul>
            <SocialLink>
                <Github width="30" height="30" />
                <Vkontakte width="30" height="30" />
                <Telegram width="30" height="30" />
            </SocialLink>
        </>
    ),
};