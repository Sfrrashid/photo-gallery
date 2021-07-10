import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../Redux/AuthActionCreator';



const mapStateToProps = state => {
    console.log(state)
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}


const Logout = (props) => {

    useEffect(() => {
        props.logout()
        // eslint-disable-next-line
    }, [])


    return (
        <div>

        </div>


    );


}
export default connect(mapStateToProps, mapDispatchToProps)(Logout);