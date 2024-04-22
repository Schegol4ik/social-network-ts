import React from 'react';
import styled from "styled-components";
import {PATH} from "../../assets/PATH";
import {NavLink} from "react-router-dom";
import {FlexWrapper} from "../../styles/FlexWrapper";

type NavbarLinksType = {
    path: string,
    title: string
}
export const Navbar = () => {

    const navbarLinks: NavbarLinksType[] = [
        {
            path: PATH.profile,
            title: "Profile"
        },
        {
            path: PATH.dialogs,
            title: "Dialogs"
        },
        {
            path: PATH.friends,
            title: "Friends"
        },
        {
            path: PATH.musics,
            title: "Musics"
        },
        {
            path: PATH.news,
            title: "News"
        },
        {
            path: PATH.settings,
            title: "Settings"
        },
    ]

    return (
        <NavbarStyles>
                    {
                        navbarLinks.map(({title,path}) => <FlexWrapper key={path}>
                            <NavLink to={path} >{title}</NavLink>
                        </FlexWrapper>)
                    }
        </NavbarStyles>
    );
};

const NavbarStyles = styled.nav`
    font-size: 20px;
    background-color: #323844;
    max-width: 20%;
    padding: 20px;
    margin-top: 20px;
    box-shadow: 0px 0px 2px 1px rgba(219, 223, 255, 1);

    & > div > a.active {
        color: #008080;
    }

    & > div > a:hover {
        color: #939393;
    }
    
    
`
