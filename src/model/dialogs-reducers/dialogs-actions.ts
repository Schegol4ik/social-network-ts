
type AddDialogsType = {
    type: "ADD-DIALOG"
    payload: {
        id: string,
        name: string,
        gender: "female" | "male"
    }
}

export type ActionsDialogsType = AddDialogsType

export const addDialogsAC = (id: string, name: string, gender: "female"| "male"): AddDialogsType => {
    return {
        type: "ADD-DIALOG",
        payload: {
            id,
            name,
            gender
        }
    } as const

}