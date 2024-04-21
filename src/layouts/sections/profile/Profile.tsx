import React from 'react';
import styled from "styled-components";
import {PostType} from "../../../model/posts-reducers/posts-reducers";
import {MyPosts} from "../../../components/MyPosts";
import {AddInputForm} from "../../../components/AddInputForm";

type ProfileType = {
    posts: PostType[]
    addPost: (value: string) => void
}
export const Profile = ({posts, addPost}: ProfileType) => {

    const onChangePost = (value: string) => {
        addPost(value)
    }


    return (
        <ProfileStyles>
            ava + dis
            <h2>My Posts</h2>
            <AddInputForm title={"Add"} onChange={onChangePost}/>
            <div>
                {posts.map(({title, like, id}) => <MyPosts key={id} id={id}
                                                           title={title} like={like}/>)}
            </div>
        </ProfileStyles>
    );
};

const ProfileStyles = styled.section`

    padding: 20px;

    h2 {
        margin-top: 30px;
        margin-bottom: 20px;
    }
    
`
