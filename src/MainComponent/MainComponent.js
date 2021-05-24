import React from 'react';
import Home from '../Component/Home/Home';
import Gallery from '../Component/Gallery/Gallery';
import SignUp from "../Component/SignUp/SignUp";
import Login from "../Component/Login/Login";
import Logout from "../Component/Logout/Logout";




const MainComponent = () => {

    return (
        <div>
            <Home />
            <Gallery />
            <SignUp />
            <Login />
            <Logout />


        </div>


    );


}
export default MainComponent;