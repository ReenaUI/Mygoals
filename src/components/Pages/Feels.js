import React from "react";
import { Form, Row, Col } from 'react-bootstrap';
import {Button} from "react-bootstrap";
import Sleepy from "../../images/emogis/sleepy.png";
import Weak from "../../images/emogis/weak.png";
import Tired from "../../images/emogis/Tired.png";
import Awesome from "../../images/emogis/awesome.png";
import Excited from "../../images/emogis/happy.png";
import Neutral from "../../images/emogis/neutral.png";
import Anxious from "../../images/emogis/anxious.png";
import Angry from "../../images/emogis/angry.png";
import Sad from "../../images/emogis/sad.png";
import CustomFeeling from "../Pages/Modals/CustomFeeling";
import { Link } from "react-router-dom";

class Feels extends React.Component {
    constructor(...args) {
		super(...args);

		this.state = { modalShow: false };
	}

    render() {
        let modalClose = () => this.setState({ modalShow: false });
        return (
            <div className="card--white full-height feels-view">
                <div className="cust-heading-wrap">
                    <h3 className="cust-heading cust-heading-view">Feels</h3>
                    <Link className="view__btn" to="/feels/logs">
                         View log <span className="eye-ico"></span>
                    </Link>
                </div>
                <p className="sub-heading">How are you feeling this morning physically?</p>

                <Row className="mood-feels-row">
                    <div className="mood-feels-row-left">
                    <div className="mood-feels-scroll">
                        <Col className="mood-feels-cell">
                            <div className="mood-feels-icons">
                                <div className="mood-feels-img-wrap">
                                    <img src={Sleepy} alt="Sleepy" />
                                </div>

                                <Form className="custom-radio">
                                    <Form.Check
                                        custom
                                        type="radio"
                                        id="radio-1"
                                        label={`Sleepy`}
                                    />
                                </Form>
                            </div>
                        </Col>

                        <Col className="mood-feels-cell">
                            <div className="mood-feels-icons">
                                <div className="mood-feels-img-wrap">
                                    <img src={Weak} alt="Weak" />
                                </div>

                                <Form className="custom-radio">
                                    <Form.Check
                                        custom
                                        type="radio"
                                        id="radio-2"
                                        label={`Weak`}
                                    />
                                </Form>
                            </div>
                        </Col>

                        <Col className="mood-feels-cell">
                            <div className="mood-feels-icons">
                                <div className="mood-feels-img-wrap">
                                    <img src={Tired} alt="Tired" />
                                </div>

                                <Form className="custom-radio" onSubmit={e => e.preventDefault()}>
                                    <Form.Check
                                        custom
                                        type="radio"
                                        id="radio-3"
                                        label={`Tired`}
                                    />
                                </Form>
                            </div>
                        </Col>

                        <Col className="mood-feels-cell">
                            <div className="mood-feels-icons">
                                <div className="mood-feels-img-wrap">
                                    <img src={Neutral} alt="Neutral" />
                                </div>
                                <Form className="custom-radio">
                                    <Form.Check
                                        custom
                                        type="radio"
                                        id="radio-4"
                                        label={`Neutral`}
                                    />
                                </Form>
                            </div>
                        </Col>

                        <Col className="mood-feels-cell">
                            <div className="mood-feels-icons">
                                <div className="mood-feels-img-wrap">
                                    <img src={Awesome} alt="Awesome" />
                                </div>
                                <Form className="custom-radio">
                                    <Form.Check
                                        custom
                                        type="radio"
                                        id="radio-5"
                                        label={`Awesome`}
                                    />
                                </Form>
                            </div>
                        </Col>

                        <Col className="mood-feels-cell">
                            <div className="mood-feels-icons">
                                <div className="mood-feels-img-wrap">
                                    <img src={Sleepy} alt="Sleepy" />
                                </div>

                                <Form className="custom-radio">
                                    <Form.Check
                                        custom
                                        type="radio"
                                        id="radio-1"
                                        label={`Sleepy`}
                                    />
                                </Form>
                            </div>
                        </Col>

                        <Col className="mood-feels-cell">
                            <div className="mood-feels-icons">
                                <div className="mood-feels-img-wrap">
                                    <img src={Weak} alt="Weak" />
                                </div>

                                <Form className="custom-radio">
                                    <Form.Check
                                        custom
                                        type="radio"
                                        id="radio-2"
                                        label={`Weak`}
                                    />
                                </Form>
                            </div>
                        </Col>

                        <Col className="mood-feels-cell">
                            <div className="mood-feels-icons">
                                <div className="mood-feels-img-wrap">
                                    <img src={Tired} alt="Tired" />
                                </div>

                                <Form className="custom-radio">
                                    <Form.Check
                                        custom
                                        type="radio"
                                        id="radio-3"
                                        label={`Tired`}
                                    />
                                </Form>
                            </div>
                        </Col>

                        <Col className="mood-feels-cell">
                            <div className="mood-feels-icons">
                                <div className="mood-feels-img-wrap">
                                    <img src={Neutral} alt="Neutral" />
                                </div>
                                <Form className="custom-radio">
                                    <Form.Check
                                        custom
                                        type="radio"
                                        id="radio-4"
                                        label={`Neutral`}
                                    />
                                </Form>
                            </div>
                        </Col>

                        <Col className="mood-feels-cell">
                            <div className="mood-feels-icons">
                                <div className="mood-feels-img-wrap">
                                    <img src={Awesome} alt="Awesome" />
                                </div>
                                <Form className="custom-radio">
                                    <Form.Check
                                        custom
                                        type="radio"
                                        id="radio-5"
                                        label={`Awesome`}
                                    />
                                </Form>
                            </div>
                        </Col>
                    </div>
                    </div>

                    <div className="mood-feels-cell mood-feels-update-cell">
                        <div className="mood-feels-icons">
                            <div className="mood-feels-img-wrap">
                                <span className="custom-icon">Custom icon</span>
                            </div>

                            <div className="link-btn-wrap">
                                <Button onClick={() => this.setState({ modalShow: true })} className="theme-dark-outline__btn" >
                                    Custom
                                </Button>

                                <CustomFeeling
                                    show={this.state.modalShow}
                                    onHide={modalClose}
                                />
                            </div>
                        </div>
                    </div>
                </Row>

        
                <p className="sub-heading">How are you feeling this morning physically?</p>
                <Row className="mood-feels-row">
                    <div className="mood-feels-scroll clearfix">
                        <Col className="mood-feels-cell">
                            <div className="mood-feels-icons">
                                <div className="mood-feels-img-wrap">
                                    <img src={Excited} alt="Excited" />
                                </div>

                                <Form className="custom-radio">
                                    <Form.Check
                                        custom
                                        type="radio"
                                        id="radio-7"
                                        label={`Excited`}
                                    />
                                </Form>
                            </div>
                        </Col>
                        
                        <Col className="mood-feels-cell">
                            <div className="mood-feels-icons">
                                <div className="mood-feels-img-wrap">
                                    <img src={Neutral} alt="Neutral" />
                                </div>

                                <Form className="custom-radio">
                                    <Form.Check
                                        custom
                                        type="radio"
                                        id="radio-8"
                                        label={`Neutral`}
                                    />
                                </Form>
                            </div>
                        </Col>

                        <Col className="mood-feels-cell">
                            <div className="mood-feels-icons">
                                <div className="mood-feels-img-wrap">
                                    <img src={Anxious} alt="Anxious" />
                                </div>

                                <Form className="custom-radio">
                                    <Form.Check
                                        custom
                                        type="radio"
                                        id="radio-9"
                                        label={`Anxious`}
                                    />
                                </Form>
                            </div>
                        </Col>

                        <Col className="mood-feels-cell">
                            <div className="mood-feels-icons">
                                <div className="mood-feels-img-wrap">
                                    <img src={Angry} alt="Angry" />
                                </div>
                                <Form className="custom-radio">
                                    <Form.Check
                                        custom
                                        type="radio"
                                        id="radio-10"
                                        label={`Angry`}
                                    />
                                </Form>
                            </div>
                        </Col>

                        <Col className="mood-feels-cell">
                            <div className="mood-feels-icons">
                                <div className="mood-feels-img-wrap">
                                    <img src={Sad} alt="Sad" />
                                </div>
                                <Form className="custom-radio">
                                    <Form.Check
                                        custom
                                        type="radio"
                                        id="radio-11"
                                        label={`Sad`}
                                    />
                                </Form>
                            </div>
                        </Col>

                        <Col className="mood-feels-cell">
                            <div className="mood-feels-icons">
                                <div className="mood-feels-img-wrap">
                                    <img src={Anxious} alt="Anxious" />
                                </div>

                                <Form className="custom-radio">
                                    <Form.Check
                                        custom
                                        type="radio"
                                        id="radio-12"
                                        label={`Anxious`}
                                    />
                                </Form>
                            </div>
                        </Col>

                        <Col className="mood-feels-cell">
                            <div className="mood-feels-icons">
                                <div className="mood-feels-img-wrap">
                                    <img src={Angry} alt="Angry" />
                                </div>
                                <Form className="custom-radio">
                                    <Form.Check
                                        custom
                                        type="radio"
                                        id="radio-13"
                                        label={`Angry`}
                                    />
                                </Form>
                            </div>
                        </Col>

                        <Col className="mood-feels-cell">
                            <div className="mood-feels-icons">
                                <div className="mood-feels-img-wrap">
                                    <img src={Sad} alt="Sad" />
                                </div>
                                <Form className="custom-radio">
                                    <Form.Check
                                        custom
                                        type="radio"
                                        id="radio-14"
                                        label={`Sad`}
                                    />
                                </Form>
                            </div>
                        </Col>
                    </div>

                    <div className="mood-feels-cell mood-feels-update-cell">
                        <div className="mood-feels-icons">
                            <div className="mood-feels-img-wrap">
                                <span className="custom-icon">Custom icon</span>
                            </div>

                            <div className="link-btn-wrap">
                                <Button onClick={() => this.setState({ modalShow: true })} className="theme-dark-outline__btn" >
                                    Custom
                                </Button>

                                <CustomFeeling
                                    show={this.state.modalShow}
                                    onHide={modalClose}
                                />
                            </div>
                        </div>
                    </div>

                </Row>
                <div className="link-btn-wrap common-view-foot">
                    <a href="#" className="theme-dark__btn" >Update</a>
                </div>
            </div>
        );
    }
}

export default Feels;