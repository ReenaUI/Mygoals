import React from "react";
import { Row, ProgressBar, Col, Button } from 'react-bootstrap';
import FinancialIcon from "../../images/Financial_Icon.png";
import GoalAccodians from '../Pages/Accodians/GoalAccodians';

class GoalDetailPage extends React.Component {
    render() {
        return (
            <div className="card--white full-height goal-view">
                <div className="cust-head-center-wrap">
                    <Button className="back-arrow" onClick={() => this.props.history.goBack()}>
                    </Button>
                    <span className="top-heading">Financial goal</span>
                    <h2 className="cust-heading-center">I will save £10,000 in my savings</h2>
                </div>

                <div className="progressbar cust-progressbar cust-progressbar-lg">
                    <ProgressBar animated now={34} /><span className="per-text">66% to goal</span>
                </div>

                <Row className="goal-details-row">
                    <Col lg={8} className="goal-details-left">
                        <img src={FinancialIcon} alt="Financial Icon" />
                        <div className="wrap-accordians">
                            <GoalAccodians />
                        </div>
                    </Col>
                    <Col lg={4} className="goal-details-right">
                        <h2>Steps</h2>
                        <div className="counter-timeline">
                            <span className="counter">1</span>
                            <p>Create a monthly budget</p>
                        </div>
                        <div className="counter-timeline">
                            <span className="counter">2</span>
                            <p>Set up a direct debit for pay day from my current account into my savings account.</p>
                        </div>
                        <div className="counter-timeline inactive-counter-timeline">
                            <span className="counter">3</span>
                            <p>Stick to the budget of the remainder of the year.</p>
                        </div>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default GoalDetailPage;