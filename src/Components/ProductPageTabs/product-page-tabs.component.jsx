import React from 'react';

import { Nav, Col, Row, Tab } from 'react-bootstrap';

import './product-page-tabs.styles.css';

const ProductPageTabs = ({ description }) => {

    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">

            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Description</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Shipping</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Return Policy</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>

                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <div>
                                <h5>Description</h5>
                                {description}
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <div>
                                <h5>Shipping Info</h5>
                                <p>The total delivery time is calculated from the time your order is placed until the time it is delivered to you. Total delivery time is broken down into processing time and shipping time.</p>
                                <p>Processing time: The time it takes to prepare your item(s) to ship from our warehouse. This includes preparing your items, performing quality checks, and packing for shipment.</p>
                                <p>Shipping time: The time for your item(s) to travel from our warehouse to your destination.</p>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <div>
                                <h5>Return Policy</h5>
                                <p>We offer one year warranty for phones. Accessories such as batteries, cables and chargers have a one month warranty.If the phone is faulty within one year (counted from the date of delivery), customers can send them back for free repair. Artificial factors such as dis-assembly, misuse, drops or falls, water damage, un official firmware or software modifications or any others causes of damage are not covered.</p>
                                <p>If approved, we will cover the entire repair fee, handling fee and the defective component replacement charge for the phone (the motherboard and screen are not in the scope of this free repair policy).</p>
                                <p>If accessories like batteries or charger cables are faulty within one month (counted from the date of arrival), we can arrange to resend or refund once you have confirmed the issue with us by sending photos or videos showing the issue. Artificial factors such as dis-assembly, misuse, drops or falls, water damage, un official firmware or software modifications or any others causes of damage are not covered.</p>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>

        </Tab.Container>
    )
}

export default ProductPageTabs;