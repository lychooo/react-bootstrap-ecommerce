import React, { Fragment } from 'react';
import ProductList from '../ProductList/product-list.component';
import { Jumbotron, Container } from 'react-bootstrap';

function Drones() {
    return (
        <Fragment>
            <Jumbotron style={{marginBottom: '0', background: 'white'}} fluid>
                <Container>
                    <h1>Fluid jumbotron</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                            </p>
                </Container>
            </Jumbotron>
            <ProductList />
        </Fragment>
    )
}

export default Drones;