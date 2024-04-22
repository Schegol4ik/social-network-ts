

type AddMessageType = {
    type: "ADD-MESSAGE"
    payload: {
        idDialogs: string,
        message: string
    }
}

type AddMessageDialogs = {
    type: "ADD-MESSAGE-DIALOGS"
    payload: {
        id: string
    }
}

export type ActionMessagesType = AddMessageType | AddMessageDialogs

export const addMessageAC = (idDialogs: string, message: string):AddMessageType => {
    return {
        type: "ADD-MESSAGE",
        payload: {
            idDialogs,
            message
        }
    }as const
}

export const addMessageDialogAC = (id:string):AddMessageDialogs => {
    return {
        type: "ADD-MESSAGE-DIALOGS",
        payload: {
            id,
        }
    }as const
}