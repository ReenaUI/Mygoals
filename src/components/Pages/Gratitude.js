import React from "react";
import { Link } from "react-router-dom";
import { Form,Button } from "react-bootstrap";

class Gratitude extends React.Component {
    render() {
        return (
            <div className="card--white full-height gratutude-view">
                <div className="cust-heading-wrap">
                    <h3 className="cust-heading cust-heading-view">Gratitude</h3>
                    <Link to="/gratitude/gratitude-log" className="view__btn">
                        View log
                        <span className="eye-ico"></span>
                    </Link>
                </div>

                <div className="gratutude-post-block">
                    <h2>What are you grateful for today?</h2>

                    <Form className="post-form" onSubmit={e => e.preventDefault()}>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>I am grateful for:</Form.Label>
                            <Form.Control as="textarea" placeholder="Type here or put pen to paper" className="cust-textarea" />
                        </Form.Group>

                        <Form.Group className="text-right">
                            <Button type="submit" onSubmit={e => e.preventDefault()} className="theme-dark__btn submit-btn">
                                Submit
                            </Button>
                        </Form.Group>
                     
                    </Form>
                </div>
            </div>
        );
    }
}

export default Gratitude;