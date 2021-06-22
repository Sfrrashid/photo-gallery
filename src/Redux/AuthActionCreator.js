import * as actionTypes from '../Redux/Actiontypes';
import axios from 'axios';


export const auth_Loading = isLoading => {

    return {
        type: actionTypes.LOADING_AUTH,
        payload: isLoading

    }
}

export const auth_Load = (userId, token) => {

    return {
        type: actionTypes.LOAD_AUTH,
        payload: {
            token: token,
            userId: userId
        }
    }
}

export const auth_failed = errmsg => {
    return {
        type: actionTypes.AUTH_FAILED,
        payload: errmsg
    }
}

export const auth = (email, password, passwordConfirm) => dispatch => {
    dispatch(auth_Loading(true));
    const auth_signup = {

        email: email,
        password: password,
        passwordConfirm: passwordConfirm,




        returnSecureToken: true

    }

    let Url_signUp = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="


    const API_KEY_signUp = "AIzaSyCLNX48P-En1cgkV7GtsyVp1kxlPZGTRuY"


    axios.post(Url_signUp + API_KEY_signUp, auth_signup)
        .then(response => {
            dispatch(auth_Loading(false))
            console.log(response)
            dispatch(auth_Load(response.data))


        })
        .catch(err => {
            dispatch(auth_Loading(false))

            dispatch(auth_failed(err.response.data.error.message))

        })


}

export const auth_login = (email, password) => dispatch => {
    dispatch(auth_Loading(true));
    const auth_login = {

        email: email,
        password: password,





        returnSecureToken: true

    }

    let Url_auth = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="


    const API_KEY_signIn = "AIzaSyCLNX48P-En1cgkV7GtsyVp1kxlPZGTRuY"


    axios.post(Url_auth + API_KEY_signIn, auth_login)
        .then(response => {
            dispatch(auth_Loading(false))
            console.log(response)
            dispatch(auth_Load(response.data))


        })
        .catch(err => {
            dispatch(auth_Loading(false))

            dispatch(auth_failed(err.response.data.error.message))

        })


}