import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../Styles/styles.css';

import { LinkContainer } from "react-router-bootstrap";
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            rePassword: ''
        }
    }

    changeDisplayName = (e) => {
        this.setState({
            displayName: e.target.value
        });
    };

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

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, rePassword } = this.state;

        if (password !== rePassword) {
            alert("Password don't match");
        };

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                rePassword: '',
            });

        } catch (error) {
            console.error(error);
        }

        console.log(this.state);
    };

    // handleChange = event => {
    //     const { name, value } = event.target;

    //     this.setState({ [name]: value });
    // };

    render() {
        const { displayName, email, password, rePassword } = this.state;

        return (
            <Form className="form-login-register" onSubmit={this.handleSubmit}>

                <Form.Group>
                    <Form.Label>Display Name</Form.Label>
                    <Form.Control type="text" onChange={this.changeDisplayName} value={displayName} placeholder="Display Name" />
                </Form.Group>

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

                <div style={{ marginTop: '1em' }}>
                    <span>Already Have an Account?
                     <LinkContainer to="/login"><a> Click here</a></LinkContainer>
                    </span>
                </div>
                {/* {error ? (<div><p>{error}</p></div>) : null} */}
            </Form>
        );
    }
}

export default Register;