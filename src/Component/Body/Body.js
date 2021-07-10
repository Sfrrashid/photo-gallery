import React, { useEffect } from 'react';
import Home from "../Home/Home";
import Gallery from "../Gallery/Gallery";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from "react-redux"
import { Authcheck } from '../../Redux/AuthActionCreator';

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        Authcheck: () => dispatch(Authcheck())
    }
}







const Body = (props) => {
    console.log(props)

    useEffect(() => {

        props.Authcheck()
        // eslint-disable-next-line
    }, [])


    let routes = null;
    if (props.auth.token === null) {
        routes = (
            <Switch>

                <Route exact path="/home" component={Home} />
                <Route path="/gallery" exact component={Gallery} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/login" exact component={Login} />

                <Redirect from="/" to="/home" />



            </Switch>

        )
    } else {
        routes = (
            <Switch>

                <Route exact path="/home" component={Home} />
                <Route path="/gallery" exact component={Gallery} />


                <Route path="/logout" exact component={Logout} />
                <Redirect from="/" to="/home" />



            </Switch>
        )
    }


    return (
        <div>
            {routes}

        </div>


    );


}
export default connect(mapStateToProps, mapDispatchToProps)(Body);