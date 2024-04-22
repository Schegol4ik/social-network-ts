import {v1} from "uuid";
import {FriendsActions} from "./friends-actions";
import {PersonType} from "../dialogs-reducers/dialogs-reducers";



export const initialFriendsState: PersonType[] = [
    {id: v1(), name: "Masha", gender: "female"},
    {id: v1(), name: "Sasha", gender: "male"},
    {id: v1(), name: "Katya", gender: "female"},
    {id: v1(), name: "Ira", gender: "female"},
    {id: v1(), name: "Tanya", gender: "female"},
    {id: v1(), name: "Nastya", gender: "female"},
    {id: v1(), name: "Vitalya", gender: "male"},
]

export const friendsReducer = (state = initialFriendsState, action: FriendsActions): PersonType[] => {
    switch (action.type) {
        default: return state
    }
}