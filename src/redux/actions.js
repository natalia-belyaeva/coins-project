import types from "./types"

export function addIdToState (id) {
    return {
        type: types.addIdToState,
        payload: { id: id }
    }
}

export function addCoinIdToState (id) {
    return {
        type: types.addCoinIdToState,
        payload: { id: id }
    }
}
