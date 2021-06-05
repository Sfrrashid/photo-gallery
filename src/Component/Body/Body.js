import React from 'react';
import Home from "../Home/Home";
import Gallery from "../Gallery/Gallery";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";


import { Route, Switch, Redirect } from 'react-router-dom';

const Body = () => {

    return (
        <div>
            <Switch>

                <Route exact path="/home" component={Home} />
                <Route path="/gallery" exact component={Gallery} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/login" exact component={Login} />
                <Route path="/logout" exact component={Logout} />
                <Redirect from="/" to="/home" />



            </Switch>

        </div>


    );


}
export default Body;