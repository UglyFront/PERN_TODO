import { actions } from "./action"

let defState = {
    todo: [],
    currentTodo: {},
    viewModal: false
}

export function reducer(state = defState, action) {
    switch (action.type) {
        case actions.GET_ALL: 
            return {...state, todo: [...action.payload]}

        case actions.VIEW: 
            console.log(state.viewModal)
            let newModal = !state.viewModal
            return {...state, viewModal: newModal}

        default:
            return state
    }
}
