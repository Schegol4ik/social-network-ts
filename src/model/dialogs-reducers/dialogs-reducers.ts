import {ActionsDialogsType} from "./dialogs-actions";

export type DialogsReducerType = {
    id: string
    name: string
}
export let initialDialogsState: DialogsReducerType[] = [
    {
        id: "1",
        name: "Viktorya"
    },
    {
        id: "2",
        name: "Vova"
    },
]
export const dialogsReducers = (state = initialDialogsState, action: ActionsDialogsType): DialogsReducerType[] => {
    switch (action.type) {
        default:
            return state
    }
}