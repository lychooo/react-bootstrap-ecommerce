import React, { Fragment } from 'react';
import { Carousel } from 'react-bootstrap';

import imgFirst from './images/eachine-h8s-jjch20-1.jpg';
import imgSecond from './images/h8-home-03.jpg';
import imgThird from './images/s9-1-home02.jpg';
import './header.styles.css';

import { LinkContainer } from "react-router-bootstrap";

class Header extends React.Component {

    render() {
        return (
            <Fragment>
                <Carousel>

                    <LinkContainer to="/eachine/h20">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imgFirst}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </LinkContainer>

                    <LinkContainer to="/eachine/h8">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={imgSecond}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </LinkContainer>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={imgThird}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Fragment>
        )
    }
}

export default Header;