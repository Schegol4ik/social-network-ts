import React from 'react';
import styled from "styled-components";
import {DialogsReducerType} from "../../../model/dialogs-reducers/dialogs-reducers";
import {NavLink} from "react-router-dom";
import {FlexWrapper} from "../../../styles/FlexWrapper";

type DialogsType = {
    dialogs: DialogsReducerType[],
}
export const Dialogs = ({dialogs}: DialogsType) => {
    return (
        <DialogsStyles>
            <h2>Dialogs</h2>
            <FlexWrapper direction="column">
                {dialogs.map(({name,id}) => <NavLink key={id} to={`/messages/${id}`}>{name}</NavLink> )}
            </FlexWrapper>
        </DialogsStyles>
    );
};

const DialogsStyles = styled.section`
    padding: 20px;

    & > div > a {
        margin-top: 10px;
    }

    & > div > a:hover {
        color: #939393;
    }
`