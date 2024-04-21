import {v1} from "uuid";
import {ActionMessagesType} from "./messages-actions";


export type MessageType = {
    id: string
    message: string
}


export type initialStateMessagesType ={[key:string]: MessageType[]}

export let initialMessagesState: initialStateMessagesType = {
    [1] : [
        {id: v1(), message: "Hello"},
        {id: v1(), message: "By"}
    ],
    [2] : [
        /*{id: v1(), message: "Privet"},
        {id: v1(), message: "Kak dela?"}*/
    ]
}
export const messagesReducers = (state = initialMessagesState, action: ActionMessagesType):initialStateMessagesType => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            return {...state,
            [action.payload.idDialogs] : [...state[action.payload.idDialogs], {id: v1(), message: action.payload.message}]
            }
        }
        default: return state
    }

}