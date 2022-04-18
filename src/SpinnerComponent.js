import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Spinner, Button } from "react-bootstrap";

const SpinnerComponent = () => {
    return (
        <div>
            <div class="row d-flex justify-content-center text-center">
                <h1>React bootstrap spinner component - technostuf.com</h1>
                <hr />
                <div className="col-md-8">
                    <h4>Spinners with Animations</h4>
                    <p>Border Style: <Spinner animation="border" /></p>
                    <p>Grow Style: <Spinner animation="grow" /></p>
                </div>
                <div className="col-md-8">
                    <h4>Spinners with different variants(colors)</h4>
                    <p>Primary Style: <Spinner animation="border" variant="primary" /></p>
                    <p>Secondary Style: <Spinner animation="border" variant="secondary" /></p>
                </div>
                <div className="col-md-8">
                    <h4>Spinners with button</h4>
                    <Button variant="dark" disabled>
                        <Spinner
                            as="span"
                            animation="border"
                            variant="light"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        &nbsp;Submit
                        <span className="visually-hidden">Loading...</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default SpinnerComponent;