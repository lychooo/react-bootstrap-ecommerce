import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Logo from '../logo/Logo'

class Navigation extends React.Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="/"><Logo /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Category" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/drones">Drones</NavDropdown.Item>
                            <NavDropdown.Item href="/electronics">Electronics</NavDropdown.Item>
                            <NavDropdown.Item href="/toys">Toys Hobbies</NavDropdown.Item>
                            <NavDropdown.Item href="/women">Women's Clothing</NavDropdown.Item>
                            <NavDropdown.Item href="/women">Men's Clothing</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/flash-deals">Flash Deals</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#features">What's New</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">About us</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Contact
                            </Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation