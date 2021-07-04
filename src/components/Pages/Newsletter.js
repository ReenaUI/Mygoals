import React from "react";
import { Button, Form } from 'react-bootstrap';


class Newsletter extends React.Component {
    render() {
        return (
                <div className="newsletter-block">
                    <div className="container-min">
                        <h2>subscribe to our newsletter</h2>

                        <Form className="newsletter-form" onSubmit={e => e.preventDefault()}>
                            <Form.Group controlId="">
                                <div className="newsletter-fields">
                                    <Form.Control type="email" placeholder="Email" />
                                    <Button type="submit" className="theme-dark__btn submit-btn">
                                        Submit
                                    </Button>
                                </div>

                                <Form.Text>
                                    No fluff. No spam. Occasional listicles. Unsubscribe anytime.
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
        );
    }
}

export default Newsletter;