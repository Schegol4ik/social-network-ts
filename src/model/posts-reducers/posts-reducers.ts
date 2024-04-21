import {v1} from "uuid";
import {ActionsPostsTypes} from "./posts-actions";

export type PostType = {
    id: string
    title: string
    like: number
}

type InitialStateType = PostType[]

export let initialPostsState: InitialStateType = [
    {
        id: v1(),
        like: 20,
        title: "Hello World"
    }
]

export const postsReducers = (state = initialPostsState, action: ActionsPostsTypes): InitialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            return [{id: v1(), like: 0, title: action.payload.title}, ...state]
        }
        default:
            return state
    }
}