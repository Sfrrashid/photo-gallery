import * as actionTypes from "./Actiontypes";
import axios from 'axios';


export const Load_photos = (photos) => {

    return {
        type: actionTypes.LOAD_PHOTOS,
        payload: photos,
    }



}


export const FetchPhotos = () => dispatch => {
    axios.get("https://photo-gallery-dcfe1-default-rtdb.firebaseio.com/photos.json")
        .then(response => console.log(response.data))
        .catch(err => console.log(err));

}