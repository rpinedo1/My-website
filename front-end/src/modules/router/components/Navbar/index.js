import React, { useState, useEffect } from "react";
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from "react-scroll";
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink 
} from './NavbarElements';

export const Navbar = ({ toggle, noMenu }) => {
    const [ scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={noMenu || scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>RP</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars></FaBars>
                    </MobileIcon>
                        { noMenu ? 
                        <></> :
                        (
                            <NavMenu>
                                <NavItem>
                                    <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to="experience" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Experience</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</NavLinks>
                                </NavItem>
                            </NavMenu>
                        )
                        }
                        
                    <NavBtn>
                        <NavBtnLink to="/resume">Resume</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};
 
