import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../styles/FlexWrapper";
import female_icon from '../../../assets/images/avatar-female.svg'
import male_icon from '../../../assets/images/avatar.svg'
import {PersonType} from "../../../model/dialogs-reducers/dialogs-reducers";

type FriendsType = {
    friends: PersonType[]
    addDialogs: (id: string, name: string, gender: "female" | "male") => void
}

export const Friends = ({friends, addDialogs}:FriendsType) => {

    const onClickHandler = (id: string, name: string, gender: "female" | "male") => {
        addDialogs(id, name, gender)
    }


    return (
        <FriendsStyles>
            {friends.map(({name,id, gender})=> <div key={id}>
                <FlexWrapper align="center">
                    <img src={gender === "male"? male_icon : female_icon} alt=""/>
                    <span>{name}</span>
                    <button onClick={() => onClickHandler(id, name, gender)}>Write</button>
                </FlexWrapper>
            </div>)}
        </FriendsStyles>
    );
};

const FriendsStyles = styled.section`
    padding: 20px;
    img {
        max-width: 50px;
        object-fit: cover;
        margin-right: 10px;
    }
    button {
        margin-left: 5px;
    }
    
`