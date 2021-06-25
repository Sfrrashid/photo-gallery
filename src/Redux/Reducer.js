import * as actiontypes from "./Actiontypes";
import { combineReducers } from 'redux';

const Auth_Initial = {
    Auth_Loading: false,
    Auth_Msg: null,
    token: null,
    userId: null,

}

export const authReducer = (authState = Auth_Initial, action) => {

    switch (action.type) {

        case actiontypes.LOADING_AUTH:

            return {
                ...authState,
                Auth_Loading: action.payload

            }

        case actiontypes.LOAD_AUTH:

            return {
                ...authState,
                token: action.payload.token,
                userId: action.payload.userId

            }

        case actiontypes.AUTH_FAILED:

            return {
                ...authState,
                Auth_Msg: action.payload

            }

        case actiontypes.AUTH_LOGOUT:
            return {
                ...authState,
                userId: null,
                token: null,

            }
        default:
            return authState;
    }







}


export const photoReducer = (photoState = { isLoading: false, photos: [] }, action) => {

    switch (action.type) {

        case actiontypes.LOADING_PHOTOS:
            return {
                ...photoState,
                isLoading: true,
                photos: []
            }


        case actiontypes.LOAD_PHOTOS:
            return {
                ...photoState,
                isLoading: false,
                photos: action.payload
            }

        default:
            return photoState;
    }



}

export const commentReducer = (commentState = { isLoading: false, comments: [] }, action) => {

    switch (action.type) {

        case actiontypes.LOADING_COMMENTS:
            return {
                ...commentState,
                isLoading: true,
                comments: []

            }


        case actiontypes.LOAD_COMMENTS:
            return {
                ...commentState,
                isLoading: false,
                comments: action.payload
            }

        default:
            return commentState;
    }



}

export const reducer = combineReducers({

    photos: photoReducer,
    comments: commentReducer,
    auth: authReducer

})