import * as actiontypes from "./Actiontypes";
import { combineReducers } from 'redux';


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
    comments: commentReducer

})