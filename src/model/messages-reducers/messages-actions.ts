

type AddMessageType = {
    type: "ADD-MESSAGE"
    payload: {
        idDialogs: string,
        message: string
    }
}


export type ActionMessagesType = AddMessageType

export const addMessageAC = (idDialogs: string, message: string):AddMessageType => {
    return {
        type: "ADD-MESSAGE",
        payload: {
            idDialogs,
            message
        }
    }as const
}