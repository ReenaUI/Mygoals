import React from "react";
import { Button, Row, Form, Col } from "react-bootstrap";
import AddStep from "../Pages/Modals/AddStep";
import CustomDatePicker from "./CustomDatePicker";
import { Link } from "react-router-dom";
import $ from "jquery";

class SetNewGoal extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = { modalShow: false };
    }

    componentDidMount() {
        $(document).ready(function () {
            $(".to-show").click(function () {
                $(".select-options").toggle();
                $(this).addClass('arrow-up');
            });
            $(".select-options ul li").click(function () {
                let selectedValue = $(this).text();
                $(".to-show").text(selectedValue);
                $(".to-show").toggleClass('placeholder-text');
                $(".select-options").toggle();
                $('.to-show').removeClass('arrow-up');
            });
        });
    }

    render() {
        let modalClose = () => this.setState({ modalShow: false });

        return (
            <div className="card--white full-height setnewgoal-view">
                <div className="cust-head-center-wrap">
                    <Button className="back-arrow" onClick={() => this.props.history.goBack()}>
                    </Button>
                    <h2 className="cust-heading-center">Add new goal</h2>

                    <div className="link-btn-wrap">
                        <Button onClick={() => this.setState({ modalShow: true })} className="close-ico" >
                        </Button>

                        <AddStep
                            show={this.state.modalShow}
                            onHide={modalClose}
                        />
                    </div>
                </div>

                <div className="newgoal-timeline">
                    <Row className="timeline-row">
                        <span className="counter">1</span>
                        <Form.Group className="col-md-4">

                            <Form.Label>
                                <h2>Category & Title:</h2>
                                Goal category: <span>*</span>
                            </Form.Label>

                            <div className="cust-select">
                                <span className="to-show arrow-down init placeholder-text">Select one</span>
                                <div className="select-options">
                                    <ul>
                                        <li>Large select</li>
                                        <li data-value="value 1">Personal Development</li>
                                        <li data-value="value 2">Business and Career</li>
                                        <li data-value="value 3">Financial</li>
                                        <li data-value="value 4">Travel</li>
                                        <li data-value="value 5">Health & Fitness</li>
                                        <li data-value="value 6">Family</li>
                                        <li data-value="value 7">Friends</li>
                                        <li data-value="value 8">Material</li>
                                        <li data-value="value 9">Relationship</li>
                                        <li data-value="value 10">Wellbeing</li>
                                    </ul>
                                    <div className="select-form">
                                        Custom:
                                        <Form.Control type="text" placeholder="Fill in" />
                                    </div>
                                </div>

                            </div>
                        </Form.Group>

                        <Form.Group className="col-md-8">
                            <Form.Label>
                                Title of your goal: <span>*</span>
                            </Form.Label>
                            <Form.Control type="text" placeholder="Fill in" />
                        </Form.Group>
                    </Row>

                    <Row className="timeline-row dates-timeline-row">
                        <span className="counter">2</span>
                        <Form.Group className="col-md-4">
                            <Form.Label>
                                <h2>Dates:</h2>
                                Goal start date: <span>*</span>
                            </Form.Label>

                            <CustomDatePicker />
                        </Form.Group>

                        <Form.Group className="col-md-4">
                            <Form.Label>
                                Goal completion date: <span>*</span>
                            </Form.Label>
                            <CustomDatePicker />
                        </Form.Group>
                    </Row>

                    <Row className="timeline-row">
                        <span className="counter">3</span>
                        <Form.Group className="col-md-12 tell-story">
                            <Form.Label>
                                <h2>Tell your story:</h2>
                                Why are you committed?: <span>*</span>
                            </Form.Label>
                            <Form.Control type="text" placeholder="Tell your story..." />
                        </Form.Group>

                        <Form.Group className="col-md-6">
                            <Form.Label>
                                PotenCtial obstacles / roadblocks:
                            </Form.Label>
                            <Form.Control type="text" placeholder="Fill in" />
                        </Form.Group>

                        <Form.Group className="col-md-6">
                            <Form.Label>
                                How will you celebrate?:
                            </Form.Label>
                            <Form.Control type="text" placeholder="Fill in" />
                        </Form.Group>
                    </Row>

                    <Row className="timeline-row counter-timeline">
                        <span className="counter">4</span>
                        <Col md={12}>
                            <h2>Add Steps:</h2>
                            <Row className="link-btn-wrap">
                                {/* <a href="#" className="theme-dark-outline__btn" >Add Step</a> */}
                                <div className="link-btn-wrap">
                                    <Button onClick={() => this.setState({ modalShow: true })} className="theme-dark-outline__btn" >
                                        Add Step
                                </Button>

                                    <AddStep
                                        show={this.state.modalShow}
                                        onHide={modalClose}
                                    />
                                </div>
                                <a href="#" className="theme-dark__btn" >Set Your Goal</a>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default SetNewGoal;