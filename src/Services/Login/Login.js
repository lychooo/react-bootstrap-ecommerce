import React from 'react';
import { Form, Button } from 'react-bootstrap';

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    changeEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    changePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    
        console.log(this.state);
    }

    render() {
        const { email, password } = this.state;
        
        return (
            <Form className="services-form" onSubmit={this.handleSubmit}>
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
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        );
    }
}

export default Login;