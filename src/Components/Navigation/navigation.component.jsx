import React, { Fragment } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import { auth } from '../../firebase/firebase.utils';

import Logo from '../logo/logo.component';
import './navigation.styles.css'

const Navigation = ({ currentUser }) => {
    // console.log(currentUser)
    return (
        <Fragment>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Navbar.Brand>
                    <Link to="/"><Logo /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Category" id="collasible-nav-dropdown">
                            <LinkContainer to="/drones">
                                <NavDropdown.Item>Drones</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Item href="/electronics">Electronics</NavDropdown.Item>
                            <NavDropdown.Item href="/toys">Toys Hobbies</NavDropdown.Item>
                            <NavDropdown.Item href="/women">Women's Clothing</NavDropdown.Item>
                            <NavDropdown.Item href="/women">Men's Clothing</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/flash-deals">Flash Deals</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/new">What's New</Nav.Link>
                        <Nav.Link href="/pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                    <Nav>
                        {currentUser ?
                            (
                                <LinkContainer to="/">
                                    <Nav.Link onClick={() => auth.signOut()}>Logout</Nav.Link>
                                </LinkContainer>
                            ) : (
                                < LinkContainer to="/login">
                                    <Nav.Link>Login</Nav.Link>
                                </LinkContainer>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment >
    )
}

export default Navigation