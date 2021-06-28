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

export const commentfield = comment => {
    return {
        type: actionTypes.ADD_COMMENT,
        payload: comment
    }
}


export const Add_Comment = (picId, author, comment, rating, uid) => dispatch => {
    const newComment = {
        picId: picId,
        author: author,
        id: uid,
        comment: comment,
        rating: rating
    }

    newComment.date = new Date().toISOString();

    let Url = `https://photo-gallery-dcfe1-default-rtdb.firebaseio.com/comments/${uid}.json`

    axios.patch(Url, newComment)
        .then(response => {
            console.log(response)
            console.log(response.data)
            console.log(typeof (response.data))
            console.log(Array.isArray(response.data))


            dispatch(commentfield(response.data))


        })





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