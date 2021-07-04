import React from "react";
import { Link } from "react-router-dom";
import { Form,Button } from "react-bootstrap";
import SelectJournalPrompt from "../Pages/Modals/SelectJournalPrompt";

class Journal extends React.Component {
    constructor(...args) {
		super(...args);

		this.state = { modalShow: false };
	}
    render() {
        let modalClose = () => this.setState({ modalShow: false });
        return (
            <div className="card--white full-height journal-view">
            <div className="cust-heading-wrap">
                <h3 className="cust-heading cust-heading-view">select your journal prompt</h3>
                <Link to="/journal/journal-log" className="view__btn">
                    View log
                    <span className="eye-ico"></span>
                </Link>
            </div>

            <div className="journal-post-block">
                <div className="journal-custom-post">
                     <div className="journal-select-btn-wrap">
                        <Button onClick={() => this.setState({ modalShow: true })} className="theme-dark__btn select-btn" >
                        Select
                        </Button>
                        <Button className="theme-dark-outline__btn others-btn" >
                        Others
                        </Button>

                        <SelectJournalPrompt
                            show={this.state.modalShow}
                            onHide={modalClose}
                        />
                    </div>
                    <Form.Control type="text" placeholder="Write Your Custom Journal Prompt:" />
                    <h2></h2>
                </div>
                <Form className="post-form" onSubmit={e => e.preventDefault()}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" placeholder="Type your thoughts or put pen to paper" className="cust-textarea" />
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

export default Journal;