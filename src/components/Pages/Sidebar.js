import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

export default function() {
    return (
        <div className="page__sidebar wrap-sidebar">
            <Navbar expand="lg" className="sidebar-nav">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="theme-navbar-nav">
                    <Nav>
                        <NavLink className="navbar__link" activeClassName="navbar__link--active" to="/dashboard">
                            <span className="menu-ico-home"></span>
                            <h2>Home</h2></NavLink>

                        <NavLink href="/goals" className="navbar__link" activeClassName="navbar__link--active" to="/goals">
                            <span className="menu-ico-Goals"></span>
                            <h2>Goals</h2></NavLink>
                            
                        <NavLink className="navbar__link" activeClassName="navbar__link--active" to="/feels" >
                            <span className="menu-ico-feels"></span>
                            <h2>Feels</h2></NavLink>

                        <NavLink href="/gratitude" className="navbar__link" activeClassName="navbar__link--active" to="/gratitude">
                            <span className="menu-ico-gratitude"></span>
                            <h2>Gratitude</h2></NavLink>

                        <NavLink href="/journal" className="navbar__link" activeClassName="navbar__link--active" to="/journal">
                            <span className="menu-ico-journal"></span>
                            <h2>Journal</h2></NavLink>

                        <NavLink href="/contents" className="navbar__link" activeClassName="navbar__link--active" to="/contents">
                            <span className="menu-ico-content"></span>
                            <h2>Content</h2></NavLink>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                    </Nav>

                </Navbar.Collapse>

                <div className="footer">
                    <ul>
                        <li><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">GDPR</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>

                    <div className="copyright">
                        <span>&copy; 2020 My Goals Co. </span>
                        <span>All rights reserved.</span>
                    </div>
                </div>
            </Navbar>
        </div>
    )
}