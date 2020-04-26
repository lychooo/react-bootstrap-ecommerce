import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';


class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    changeEmail = event => {
        this.setState({
            email: event.target.value
        });
    }

    changePassword = event => {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });

        } catch (error) {
            console.log(error);
        };
    };

    // handleChange = event => {
    //     const { value, name } = event.target;

    //     this.setState({ [name]: value });
    // }

    render() {
        const { email, password } = this.state;
        
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

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>

                <Button variant="primary" type="submit">Sing in</Button>

                <Button variant="primary" type="button" onClick={signInWithGoogle}>Sing in with Google</Button>

                <div style={{marginTop: '1em'}}>
                    <span>Don't Have an Account? 
                     <LinkContainer to="/register"><a> Click here</a></LinkContainer>
                    </span>
                </div>
            </Form>
        );
    }
}

export default Login;