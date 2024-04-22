import {ActionsDialogsType} from "./dialogs-actions";

export type PersonType = {
    id: string
    name: string
    gender: "male" | "female"
}
export let initialDialogsState: PersonType[] = [
    {
        id: "1",
        name: "Viktorya",
        gender: "female"
    },
    {
        id: "2",
        name: "Vova",
        gender: "male"
    },
]
export const dialogsReducers = (state = initialDialogsState, action: ActionsDialogsType): PersonType[] => {
    switch (action.type) {
        case "ADD-DIALOG":{
            return [...state, {id:action.payload.id, name: action.payload.name, gender: action.payload.gender}]
        }
        default:
            return state
    }
}