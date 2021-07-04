import React from "react";
import { Row, Col } from "react-bootstrap";
import Setnewgoal from "../../images/set-new-goal.png";
import Addgratitude from "../../images/add-gratitude.png";
import Readlearn from "../../images/Read-Learn.png";
import Viewgoal from "../../images/view-goal.png";
import Newentry from "../../images/New-entry.png";
import HappyEmog from "../../images/emogis/happy.png";
import TiredEmog from "../../images/emogis/Tired.png";

class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard-view">
                <div className="greeting-card">
                    <h2>Hi Elliot,</h2>
                    <span>We have a few things for you to look at.</span>
                </div>
                
                <Row>
                    <Col xl={8}>
                        <div className="card--white">
                            <h3 className="cust-heading">goals</h3>
                            <div className="row">
                                <Col lg={6} className="divider">
                                    <img src={Setnewgoal} alt="Set New Goal" className="resp-img" />
                                        <div className="link-btn-wrap">
                                        <a href="#" className="theme-dark__btn" >set new goal</a>
                                    </div>
                                </Col>

                                <Col lg={6}>
                                    <img src={Viewgoal} alt="View Goal" className="resp-img" />
                                    <div className="link-btn-wrap">
                                         <a href="#" className="theme-dark__btn" >view goal</a>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </Col>

                    <Col xl={4} lg={6}>
                        <div className="card--white feels-block">
                            <h3 className="cust-heading">Feels</h3>
                            <div className="feel-wrap">
                                <div className="feel-cells">
                                    <h2>Physical:</h2>
                                    <span>Tired</span>
                                    <img src={TiredEmog} alt="" />
                                </div>

                                <div className="feel-cells">
                                    <h2>Emotion:</h2>
                                    <span>Happy</span>
                                    <img src={HappyEmog} alt="" />
                                </div>
                            </div>
                            <div className="link-btn-wrap">
                                <a href="#" className="theme-dark__btn" >Update</a>
                              </div>
                         
                        </div>
                    </Col>

                    <Col xl={4} lg={6}>
                        <div className="card--white">
                            <h3 className="cust-heading">gratitude</h3>
                            <img src={Addgratitude} alt="Add gratitude" className="resp-img" />
                              <div className="link-btn-wrap">
                                <a href="#" className="theme-dark__btn" >Add gratitude</a>
                              </div>
                        </div>
                    </Col>

                    <Col xl={4} lg={6}>
                        <div className="card--white">
                            <h3 className="cust-heading">journal</h3>
                            <img src={Newentry} alt="New entry" className="resp-img" />
                              <div className="link-btn-wrap">
                                <a href="#" className="theme-dark__btn" >New entry</a>
                             </div>
                        </div>
                    </Col>

                    <Col xl={4} lg={6}>
                        <div className="card--white">
                            <h3 className="cust-heading">content</h3>
                            <img src={Readlearn} alt="Read learn" className="resp-img" />
                                <div className="link-btn-wrap">
                                    <a href="#" className="theme-dark__btn" >Read and Learn</a>
                                </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;