import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';







const Navigation = () => {
    const [isOpen, setisOpen] = useState(false)

    const toggle = () => {
        setisOpen(!isOpen)
    };

    return (
        <Navbar dark color='dark' expand="sm">
            <div className="container">
                <NavbarToggler onClick={toggle} />

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