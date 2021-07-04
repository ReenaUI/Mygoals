import React from "react";
import { Row, Col, Button } from 'react-bootstrap';
import {ListGroup} from "react-bootstrap";
import Sleepy from "../../images/emogis/sleepy.png";
import Weak from "../../images/emogis/weak.png";
import Tired from "../../images/emogis/Tired.png";
import Neutral from "../../images/emogis/neutral.png";
import { Link } from "react-router-dom";

class ViewLog extends React.Component { 
    render() {
        return (
            <div className="card--white full-height log-view">
                <div className="cust-head-center-wrap">
                    <Button className="back-arrow" onClick={() => this.props.history.goBack()}>
                    </Button>
                    <span className="top-heading">feels log</span>
                    <h2 className="cust-heading-center">How Did You Feel?</h2>
                </div>

                <Row className="feels-log-row">
                    <Col sm={6} className="feels-log-col">
                        <h3>Physically?</h3>

                        <ListGroup className="feels-log-group">
                            <ListGroup.Item>
                                <div>
                                    <img src={Sleepy} alt="Sleepy" />
                                    <span>Sleepy</span>
                                </div>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <div>
                                    <img src={Weak} alt="Weak" />
                                    <span>Weak</span>
                                </div>
                            </ListGroup.Item>

                           <ListGroup.Item>
                                <div>
                                    <img src={Tired} alt="Tired" />
                                    <span>Tired</span>
                                </div>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <div>
                                    <img src={Neutral} alt="Neutral" />
                                    <span>Neutral</span>
                                </div>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <div>
                                    <img src={Sleepy} alt="Sleepy" />
                                    <span>Sleepy</span>
                                </div>
                            </ListGroup.Item>

                        </ListGroup>
                    </Col>


                    <Col sm={6} className="feels-log-col">
                        <h3>Emotionally?</h3>

                        <ListGroup className="feels-log-group">
                            <ListGroup.Item>
                                <div>
                                    <img src={Sleepy} alt="Sleepy" />
                                    <span>Sleepy</span>
                                </div>

                                <span>October 29, 2020</span>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <div>
                                    <img src={Weak} alt="Weak" />
                                    <span>Weak</span>
                                </div>

                                <span>October 22, 2020</span>
                            </ListGroup.Item>

                           <ListGroup.Item>
                               <div>
                                    <img src={Tired} alt="Tired" />
                                    <span>Tired</span>
                                </div>
                                <span>October 12, 2020</span>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <div>
                                    <img src={Neutral} alt="Neutral" />
                                    <span>Neutral</span>
                                </div>
                                <span>October 4, 2020</span>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <div>
                                    <img src={Sleepy} alt="Sleepy" />
                                    <span>Sleepy</span>
                                </div>
                                <span>October 29, 2020</span>
                            </ListGroup.Item>

                        </ListGroup>
                    </Col>
                </Row>

                <div className="link-btn-wrap">
                    <a href="#" className="theme-dark-outline__btn" >View All</a>
                </div>
           </div>
        );
    }
}

export default ViewLog;