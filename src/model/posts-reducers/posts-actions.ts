
type AddPostType = {
    type: "ADD-POST",
    payload: {
        title: string
    }
}

export type ActionsPostsTypes = AddPostType

export const addPostAC = (title: string):AddPostType => {
    return {
        type: "ADD-POST",
        payload: {
            title
        }
    } as const
}