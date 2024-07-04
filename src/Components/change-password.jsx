import React from 'react';
import './in-PlayStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import Header from './header';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Basic validation
        if (newPassword !== confirmPassword) {
            setError("New password and confirm password don't match.");
            return;
        }

        // TODO: Add password change logic here
        console.log("Old Password:", oldPassword);
        console.log("New Password:", newPassword);
        console.log("Confirm Password:", confirmPassword);

        // Clear form fields
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setError('');
    };

    return (
        <>
        <Header />
        <Container className='changeForm'>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2>Change Password</h2>
                    <Form onSubmit={handleSubmit}>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form.Group controlId="oldPassword">
                            <Form.Label>Old Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="newPassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className='mt-2' style={{ backgroundColor: '#ff1616', borderColor: '#ff1616' }}>
                            Change Password
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default ChangePassword;
