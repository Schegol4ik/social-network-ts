import React from 'react';
import {PostType} from "../model/posts-reducers/posts-reducers";
import avatar from '../assets/images/avatar.svg'
import styled from "styled-components";
import {FlexWrapper} from "../styles/FlexWrapper";

type MyPostsType = PostType
export const MyPosts = ({title, like, id}: MyPostsType) => {
    return (
        <MyPostsStyles>
            <FlexWrapper align="center">
                <img src={avatar} alt="avatar"/>
                <p>{title}</p>
            </FlexWrapper>
            <span>likes: {like}</span>

        </MyPostsStyles>
    );
};

const MyPostsStyles = styled.div`
    margin-top: 50px;
    p {
        margin-left: 10px;
    }
    span {
        margin: 10px;
    }
    img {
        max-width: 50px;
        object-fit: cover;
    }
`
