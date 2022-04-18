import React, { useCallback, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button, Col } from "react-bootstrap";

import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha
} from 'react-google-recaptcha-v3';

const GoogleRecaptchaComponent = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [token, setToken] = useState('');
    const [actionToChange, setActionToChange] = useState('');

    const registerUser = useCallback(async () => {
        if (!executeRecaptcha) {
            return;
        }
        const result = await executeRecaptcha('register');
        setToken(result);
    }, [executeRecaptcha]);

    const handleTextChange = useCallback(event => {
        setActionToChange(event.target.value);
    }, []);

    useEffect(() => {
        if (!executeRecaptcha) {
            return;
        }
        const handleReCaptchaVerify = async () => {
            const token = await executeRecaptcha('register');
            setToken(token);
        };
        handleReCaptchaVerify();
    }, [executeRecaptcha]);

    return (
        <div>
            <div className="row d-flex justify-content-center text-center">
                <h1>React Google Recaptcha V3 example - technostuf.com</h1>
                <hr />
                <Col xs={6}>
                    <Form>
                        <Form.Group className="mb-3" controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First name" onChange={handleTextChange} value={actionToChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={registerUser}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </div>
            {token && <p>Token: {token}</p>}
        </div>
    );
}
export default GoogleRecaptchaComponent;