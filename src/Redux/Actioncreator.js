import * as actionTypes from "./Actiontypes";
import axios from 'axios';




export const Loading_photos = () => {
    return {
        type: actionTypes.LOADING_PHOTOS
    }
}

export const Loading_comments = () => {
    return {
        type: actionTypes.LOADING_COMMENTS
    }
}


export const Load_photos = (photos) => {

    return {
        type: actionTypes.LOAD_PHOTOS,
        payload: photos,
    }



}

export const Load_comments = (comments) => {

    return {
        type: actionTypes.LOAD_COMMENTS,
        payload: comments,
    }



}


export const FetchPhotos = () => dispatch => {

    dispatch(Loading_photos());



    axios.get("https://photo-gallery-dcfe1-default-rtdb.firebaseio.com/photos.json")
        .then(response => {
            dispatch(Load_photos(response.data))
        })
        .catch(err => console.log(err.message));

}

export const FetchComments = () => dispatch => {

    dispatch(Loading_comments());


    axios.get("https://photo-gallery-dcfe1-default-rtdb.firebaseio.com/comments.json")
        .then(response => {
            dispatch(Load_comments(response.data))
        })
        .catch(err => console.log(err.message));

}