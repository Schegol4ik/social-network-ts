import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {Container} from "../../styles/Container";

export const Header = () => {
    return (
        <HeaderStyles>
            <Container>
                <NavLink to="/profile">logo</NavLink>
            </Container>
        </HeaderStyles>
    );
};

const HeaderStyles = styled.header`
    min-height: 50px;
    display: flex;
    align-items: center;
    background-color: #323844;
    border: 1px solid rgba(202, 202, 212, 1);

    & > div > a:hover {
        color: #939393;
    }
`