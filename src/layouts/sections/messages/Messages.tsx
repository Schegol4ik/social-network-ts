import React from 'react';
import {initialStateMessagesType} from "../../../model/messages-reducers/messages-reducers";
import {Navigate, NavLink, useParams} from "react-router-dom";
import {FlexWrapper} from "../../../styles/FlexWrapper";
import styled from "styled-components";
import {PATH} from "../../../assets/PATH";
import {AddInputForm} from "../../../components/AddInputForm";

type MessagesType = {
    messages: initialStateMessagesType
    addMessage: (idDialogs: string, message: string) => void
}
export const Messages = ({messages, addMessage}: MessagesType) => {

      const params = useParams()

    const onHandlerSendMessage = (value:string) => {
        if (params && params.id !== undefined) {
            addMessage(params.id, value)
        }
    }


    return (
        <MessagesStyles>
            <FlexWrapper direction="column">
                <NavLink to={PATH.dialogs}>---back---</NavLink>
                {params && params.id !== undefined && messages[params.id]
                    ? messages[params.id].length ? messages[params.id].map(({message, id}) => <span
                        key={id}>{message}</span>) : <span>Сообщений нет</span>
                    : <Navigate to={"/*"}/>}
              <AddInputForm title={"Send"} onChange={onHandlerSendMessage}/>
            </FlexWrapper>
        </MessagesStyles>
    );
};

const MessagesStyles = styled.section`
    padding: 20px;

    span {
        margin: 10px 0;
    }
`
