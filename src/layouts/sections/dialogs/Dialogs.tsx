import React from 'react';
import styled from "styled-components";
import {PersonType} from "../../../model/dialogs-reducers/dialogs-reducers";
import {NavLink} from "react-router-dom";
import {FlexWrapper} from "../../../styles/FlexWrapper";
import avatar_male from "../../../assets/images/avatar.svg";
import avatar_female from "../../../assets/images/avatar-female.svg";

type DialogsType = {
    dialogs: PersonType[],
}
export const Dialogs = ({dialogs}: DialogsType) => {
    return (
        <DialogsStyles>
            <h2>Dialogs</h2>
            <FlexWrapper direction="column">
                {dialogs.map(({name,id, gender}) =>
                    <NavLink to={`/messages/${id}`}>
                        <FlexWrapper align="center">
                            <img src={gender === "male" ? avatar_male : avatar_female} alt=""/>
                            <span>{name}</span>
                        </FlexWrapper>
                    </NavLink>
                )}
            </FlexWrapper>
        </DialogsStyles>
    );
};

const DialogsStyles = styled.section`
    padding: 20px;

    a {
        max-width: 100px;
    }

    img {
        max-width: 50px;
        object-fit: cover;
        margin-right: 10px;
    }

    & > div > a {
        margin-top: 10px;
    }

    & > div > a:hover {
        color: #939393;
    }
`