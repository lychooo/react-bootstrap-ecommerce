import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../Styles/styles.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            rePassword: '',
            error: null
        }
    }

    changeEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    };

    changePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    };

    changeRePassword = (e) => {
        this.setState({
            rePassword: e.target.value
        });
    };

    // handleSubmit = (e) => {
    //     e.preventDefault();

    //     const { email, password } = this.state;    

    //     this.setState({
    //         email: '',
    //         password: '',
    //         rePassword: '',
    //         error: null
    //     })
    // };

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, rePassword, error } = this.state;

        if (password === rePassword) {
            this.setState({
                email: '',
                password: '',
                rePassword: '',
                error: null
            })
        } else {
            this.setState({
                error: 'The password does not match'
            })
        }
        console.log(this.state);
    }

    render() {
        const { email, password, rePassword, error } = this.state;

        return (
            <Form className="form-login-register" onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" onChange={this.changeEmail} value={email} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={this.changePassword} value={password} placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicRePassword">
                    <Form.Label>Repassword</Form.Label>
                    <Form.Control type="password" onChange={this.changeRePassword} value={rePassword} placeholder="Repassword" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I agree with the terms." />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
                <div style={{marginTop: '1em'}}>
                    <span>Already Have an Account?
                     <LinkContainer to="/login"><a> Click here</a></LinkContainer>
                    </span>
                </div>
                {error ? (<div><p>{error}</p></div>) : null}
            </Form>
        );
    }
}

export default Register;