import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';
import "./Navbar.css";
import Myicon from "../../assets/image/Mynavicon.png";






const Navigation = () => {
    const [isOpen, setisOpen] = useState(false)

    const toggle = () => {
        setisOpen(!isOpen)
    };

    return (
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
                            <NavLink href="/" active>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/gallery">Gallery</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/SignUp">SignUp</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Login">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Logout">Logout</NavLink>
                        </NavItem>




                    </Nav>

                </Collapse>


            </div>



        </Navbar>


    );

}
export default Navigation;