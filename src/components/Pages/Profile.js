import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import UserAvatar from "../../images/user-avatar-lg.png";
import AddValues from "../Pages/Modals/AddValues";
import AddInterestPassion from "../Pages/Modals/AddInterestPassion";
import ProfileUpload from "../Pages/Modals/ProfileUpload";

class Profile extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = { interestModalShow: false, valueModalShow: false, profileModalShow: false };
    }

    render() {

        return (
            <div className="card--white full-height profile-view">
                <h3 className="cust-heading-center">My profile</h3>
                <Form className="row profile-form">
                    <Col className="profile-edit-block">
                        <div className="row" onSubmit={e => e.preventDefault()}>
                            <Form.Group className="col-md-3">
                                <div className="user-profile-edit-card" >
                                    <img src={UserAvatar} alt="" />
                                    <div>
                                        <span>Profile Picture</span>
                                        <Button onClick={() => this.setState({ profileModalShow: true })} className="edit-ico override-btn"></Button>
                                        <ProfileUpload
                                            show={this.state.profileModalShow}
                                            onHide={() => this.setState({ profileModalShow: false })}
                                        />
                                    </div>
                                </div>
                            </Form.Group>
                            <Form.Group controlId="firstname" className="col-md-3">
                                <Form.Label>First Name:</Form.Label>
                                <div className="profile-form-inputs">
                                    <Form.Control type="text" placeholder="Elliot" />
                                    <span className="edit-ico"></span>
                                </div>
                            </Form.Group>

                            <Form.Group controlId="lastname" className="col-md-3">
                                <Form.Label>last Name:</Form.Label>
                                <div className="profile-form-inputs">
                                    <Form.Control type="text" placeholder="MacNay" />
                                    <span className="edit-ico"></span>
                                </div>
                            </Form.Group>

                            <Form.Group controlId="useremail" className="col-md-3">
                                <Form.Label>Email:</Form.Label>
                                <div className="profile-form-inputs">
                                    <Form.Control type="email" placeholder="elliot@mygoals.co" />
                                    <span className="edit-ico"></span>
                                </div>
                            </Form.Group>

                            {/* <Form.Group className="text-right">
                                <Button type="submit" onSubmit={e => e.preventDefault()} className="theme-dark__btn submit-btn">
                                    Submit
                                </Button>
                            </Form.Group> */}
                        </div>
                    </Col>

                    <Col md={12} className="user-profile-cols">
                        <Form.Group controlId="purpose">
                            <Form.Label>Purpose:</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                    </Col>

                    <Col md={12} className="user-profile-cols tags-block">
                        <Form.Group controlId="purpose">
                            <Form.Label>Values:</Form.Label>
                            <ul className="tags">
                                <li>Authenticity <span className="remove"></span></li>
                                <li>Collaboration <span className="remove"></span></li>
                                <li>Courage <span className="remove"></span></li>
                                <li>Faith <span className="remove"></span></li>
                                <li>Friendship <span className="remove"></span></li>
                            </ul>
                            <Button onClick={() => this.setState({ valueModalShow: true })} className="cust-plus__btn theme-dark__btn">Add</Button>
                            <AddValues
                                show={this.state.valueModalShow}
                                onHide={() => this.setState({ valueModalShow: false })}
                            />
                        </Form.Group>
                    </Col>

                    <Col md={12} className="user-profile-cols tags-block interests-block">
                        <Form.Group controlId="values">
                            <Form.Label>Interests and passions:</Form.Label>
                            <ul className="tags">
                                <li>Art <span className="remove"></span></li>
                                <li>Cooking <span className="remove"></span></li>
                                <li>Events <span className="remove"></span></li>
                                <li>Health &amp; Fitness <span className="remove"></span></li>
                                <li>Music <span className="remove"></span></li>
                            </ul>
                            <Button onClick={() => this.setState({ interestModalShow: true })} className="cust-plus__btn theme-dark__btn">Add</Button>
                            <AddInterestPassion
                                show={this.state.interestModalShow}
                                onHide={() => this.setState({ interestModalShow: false })}
                            />
                        </Form.Group>
                    </Col>

                    <Col md={12} className="user-profile-cols profile-save-col">
                        <Button className="theme-dark-outline__btn cust-cancel-btn">Cancel</Button>
                        <Button className="theme-dark__btn cust-save-btn">Save</Button>
                    </Col>
                </Form>
            </div>
        );
    }
}

export default Profile;