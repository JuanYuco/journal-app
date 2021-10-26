import { types } from "../types/types";

const initalState = {
    notes: [],
    active: null
}

export const notesReducer = ( state = initalState, action ) => {
    switch ( action.type ) {
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.notesLoad:
            return {
                ...state,
                notes: [ ...action.payload ]
            }
        default:
            return state;
    }
}