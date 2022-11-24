import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import useOnClickOutside from '../../hooks/onClickOutside';
import { MenuContext } from './navState';
import HamburgerButton from './hamdurgerButton';
import { SideMenu } from './sideMenu';

const Navbar = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  outline: currentcolor none medium;
  max-width: 100%;
  margin: 0px;
  align-items: center;
  background: none;
  min-width: 0px;
  min-height: 0px;
  justify-content: flex-end;
  z-index: 500;
`;

const Bloked = styled.div`
    position: fixed;
    visibility: visible; 
    z-index: 200; 
    top: 0px; 
    left: 0px; 
    width: 100%; 
    height: 100%; 
    background-color: #ccc; 
    opacity: 0.5; 
`;


const MainMenu = () => {
    const node = useRef();
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
    useOnClickOutside(node, () => {
        if (isMenuOpen) {
            toggleMenuMode();
        }
    });

    return (
        <>
            <header ref={node}>
                <Navbar>
                    <HamburgerButton />
                </Navbar>
                <SideMenu />
            </header>
            {isMenuOpen ? <Bloked /> : ''}
        </>

    );
};

export default MainMenu;