import React, {useReducer} from 'react';
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import {PATH} from "./assets/PATH";
import {Profile} from "./layouts/sections/profile/Profile";
import {Dialogs} from "./layouts/sections/dialogs/Dialogs";
import {News} from "./layouts/sections/news/News";
import {Settings} from "./layouts/sections/settings/Settings";
import {Musics} from "./layouts/sections/musics/Musics";
import {ErrorPage} from "./components/ErrorPage";
import {Header} from "./layouts/header/Header";
import {Navbar} from "./layouts/navbar/Navbar";
import styled from "styled-components";
import {Container} from "./styles/Container";
import {FlexWrapper} from "./styles/FlexWrapper";
import {initialPostsState, postsReducers} from "./model/posts-reducers/posts-reducers";
import {addPostAC} from "./model/posts-reducers/posts-actions";
import {dialogsReducers, initialDialogsState} from "./model/dialogs-reducers/dialogs-reducers";
import {initialMessagesState, messagesReducers} from "./model/messages-reducers/messages-reducers";
import {Messages} from "./layouts/sections/messages/Messages";
import {addMessageAC, addMessageDialogAC} from "./model/messages-reducers/messages-actions";
import {Friends} from "./layouts/sections/friends/Friends";
import {friendsReducer, initialFriendsState} from "./model/friends-reducers/friends-reducers";
import {addDialogsAC} from "./model/dialogs-reducers/dialogs-actions";


const App = () => {

    const [posts, dispatchPosts] = useReducer(postsReducers, initialPostsState)
    const [dialogs, dispatchDialogs] = useReducer(dialogsReducers, initialDialogsState)
    const [messages, dispatchMessages] = useReducer(messagesReducers, initialMessagesState)
    const [friends, dispatchFriends] = useReducer(friendsReducer, initialFriendsState)

    const navigate = useNavigate()

    const addPost = (title: string) => {
        dispatchPosts(addPostAC(title))
    }

    const addMessage = (idDialogs: string, message: string) => {
        dispatchMessages(addMessageAC(idDialogs, message))
    }

    const addDialogs = (id: string, name: string, gender: "female" | "male") => {
        dispatchDialogs(addDialogsAC(id, name, gender))
        dispatchMessages(addMessageDialogAC(id))

        navigate(`/messages/${id}`)
    }

    return (
        <AppStyles>
            <Header/>
            <Container>
                <FlexWrapper>
                    <Navbar/>
                    <PageStyle>
                        <Routes>
                            <Route path='/' element={<Navigate to={PATH.profile}/>}/>
                            <Route path={PATH.profile} element={<Profile posts={posts} addPost={addPost}/>}/>
                            <Route path={PATH.dialogs} element={<Dialogs dialogs={dialogs}/>}/>
                            <Route path={PATH.friends} element={<Friends friends={friends} addDialogs={addDialogs}/>}/>
                            <Route path={PATH.news} element={<News/>}/>
                            <Route path={PATH.settings} element={<Settings/>}/>
                            <Route path={PATH.musics} element={<Musics/>}/>
                            <Route path={PATH.errorPage} element={<ErrorPage/>}/>
                            <Route path={PATH.messages}
                                   element={<Messages addMessage={addMessage} messages={messages}/>}/>
                            <Route path="/*" element={<Navigate to={PATH.errorPage}/>}/>
                        </Routes>
                    </PageStyle>
                </FlexWrapper>
            </Container>
        </AppStyles>
    );
};

const AppStyles = styled.div`

`

const PageStyle = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #323844;
    margin: 20px;
    box-shadow: 0 0 2px 1px rgba(219, 223, 255, 1);

`
export default App;