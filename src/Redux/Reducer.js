import * as actiontypes from "./Actiontypes";

const initialState = {
    photos: []
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actiontypes.LOAD_PHOTOS:
            return {
                ...state,
                photos: action.payload
            }

        default:
            return state;
    }








}