import React from "react";
import { Row, ProgressBar, Col } from 'react-bootstrap';
import Travel from "../../images/mygoals-travel/goal-one.png";
import Money from "../../images/mygoals-travel/goal-two.png";
import Fitness from "../../images/mygoals-travel/goal-three.png";
import Reading from "../../images/mygoals-travel/goal-four.png";
import { Link } from "react-router-dom";

class Home extends React.Component {

    render() {
        return (
            <div className="card--white full-height goal-view">
                <div className="cust-heading-wrap">
                    <h3 className="cust-heading cust-heading-view">your goals</h3>
                    <Link className="theme-dark__btn" to="/goals/new-goal">
                        set new goal
                    </Link>
                </div>

                <div className="goal-row-wrap">
                    <Row className="goal-row">
                        <Col md={8} className="goal-left">
                            <img src={Travel} alt="Travel" />
                            <div className="goal-left-conent">
                                <Link to="/goals/financial-goal">
                                    <h2>I will travel to Thailand with my friends</h2>
                                </Link>
                                <div className="progressbar cust-progressbar">
                                    <ProgressBar animated now={0} /><span>100% to goal</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="goal-right">
                            <div className="goal-date">
                                <span>Achievement Date</span>
                                <span>September 9, 2020</span>
                            </div>

                            <Link className="eye-ico" to="/goals/financial-goal">
                            </Link>
                        </Col>
                    </Row>
                    <Row className="goal-row">
                        <Col md={8} className="goal-left">
                            <img src={Money} alt="Money" />
                            <div className="goal-left-conent">
                                <Link to="/goals/financial-goal">
                                    <h2>I will hit my quarterly sales target for £250,000</h2>
                                </Link>
                                <div className="progressbar cust-progressbar">
                                    <ProgressBar animated now={79} /><span>29% to goal</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="goal-right">
                            <div className="goal-date">
                                <span>Achievement Date</span>
                                <span>September 9, 2020</span>
                            </div>

                            <Link className="eye-ico" to="/goals/financial-goal">
                            </Link>
                        </Col>
                    </Row>

                    <Row className="goal-row">
                        <Col md={8} className="goal-left">
                            <img src={Fitness} alt="Fitness" />
                            <div className="goal-left-conent">

                                <Link to="/goals/financial-goal">
                                    <h2>I will complete a 10km run in under 50-minutes</h2>
                                </Link>
                                <div className="progressbar cust-progressbar">
                                    <ProgressBar animated now={29} /><span>73% to goal</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="goal-right">
                            <div className="goal-date">
                                <span>Achievement Date</span>
                                <span>December 31, 2020</span>
                            </div>

                            <Link className="eye-ico" to="/goals/financial-goal">
                            </Link>
                        </Col>
                    </Row>

                    <Row className="goal-row">
                        <Col md={8} className="goal-left">
                            <img src={Reading} alt="Reading" />
                            <div className="goal-left-conent">
                                <Link to="/goals/financial-goal">
                                    <h2>I will read three new books</h2>
                                </Link>
                                <div className="progressbar cust-progressbar">
                                    <ProgressBar animated now={89} /><span>14% to goal</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="goal-right">
                            <div className="goal-date">
                                <span>Achievement Date</span>
                                <span>December 31, 2021</span>
                            </div>

                            <Link className="eye-ico" to="/goals/financial-goal">
                            </Link>
                        </Col>
                    </Row>

                    <Row className="goal-row">
                        <Col md={8} className="goal-left">
                            <img src={Travel} alt="Travel" />
                            <div className="goal-left-conent">

                                <Link to="/goals/financial-goal">
                                    <h2>I will travel to Samoa with my friends</h2>
                                </Link>
                                <div className="progressbar cust-progressbar">
                                    <ProgressBar animated now={10} /><span>80% to goal</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="goal-right">
                            <div className="goal-date">
                                <span>Achievement Date</span>
                                <span>December 31, 2021</span>
                            </div>

                            <Link className="eye-ico" to="/goals/financial-goal">
                            </Link>
                        </Col>
                    </Row>
                </div>
                <div className="link-btn-wrap">
                    <a href="#" className="theme-dark-outline__btn" >View All</a>
                </div>

            </div>
        );
    }
}

export default Home;