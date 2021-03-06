import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import "./Navbar.css";
import Myicon from "../../assets/image/Mynavicon.png";
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";


const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}






const Navigation = (props) => {
    const [isOpen, setisOpen] = useState(false)

    const toggle = () => {
        setisOpen(!isOpen)
    };

    let links = null;
    if (props.auth.token === null) {
        links = (
            <Navbar light expand="sm" className="navbar-color">
                <div className="container">
                    <NavbarToggler onClick={toggle} />
                    <img src={Myicon} alt="myicon" width="80px" height="60px" className="nav-icon" />

                    <NavbarBrand href='/'>
                        My Gallery
                    </NavbarBrand>

                    <Collapse isOpen={isOpen} navbar>

                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink to="/" exact className="nav-link active">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/gallery" exact className="nav-link">Gallery</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/signup" className="nav-link">SignUp</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/login" className="nav-link">Login</NavLink>
                            </NavItem>





                        </Nav>

                    </Collapse>


                </div>



            </Navbar>)


    } else {
        links = (
            <Navbar light expand="sm" className="navbar-color">
                <div className="container">
                    <NavbarToggler onClick={toggle} />
                    <img src={Myicon} alt="myicon" width="80px" height="60px" className="nav-icon" />

                    <NavbarBrand href='/'>
                        My Gallery
                    </NavbarBrand>

                    <Collapse isOpen={isOpen} navbar>

                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink to="/" exact className="nav-link active">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/gallery" exact className="nav-link">Gallery</NavLink>
                            </NavItem>


                            <NavItem>
                                <NavLink to="/logout" className="nav-link">Logout</NavLink>
                            </NavItem>




                        </Nav>

                    </Collapse>


                </div>



            </Navbar>
        )
    }

    return (
        <div>
            {links}
        </div>


    );

}
export default connect(mapStateToProps)(Navigation);