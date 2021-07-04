import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import HandGesture from '../../images/add-gratitude.png';
import Logo from '../../images/logo.png';
import "../../../node_modules/font-awesome/css/font-awesome.css";
import $ from 'jquery';

class Signin extends Component {
    componentDidMount() {
        $(function () {
            $(".toggle_pwd").on("click", function() {
                $(this).toggleClass("fa-eye fa-eye-slash");
               var type = $(this).hasClass("fa-eye-slash") ? "text" : "password";
                $("#txtPassword").attr("type", type);
            });
        });
    }
    render() {
        return (
            <div className="login-view">
                <div className="card--white full-height">
                  
                    <div className="sign-form-view">
                        <div className="wrap-sign-form-view">
                            <img src={Logo} alt="" className="logo-sign" />
                            <h3 className="cust-heading-center">create account</h3>
                            <div className="social-icons-round social-ico">
                                <a href="#" className="facebook"></a>
                                <a href="#" className="google"></a>
                                <a href="#" className="linekdin"></a>
                            </div>

                            <form className="sign-form" onSubmit={e => e.preventDefault()}>
                                <Form.Group controlId="first-name">
                                    <Form.Label>First name:</Form.Label>
                                    <Form.Control type="text" placeholder="Elliot" />
                                </Form.Group>

                                <Form.Group controlId="last-name">
                                    <Form.Label>last name:</Form.Label>
                                    <Form.Control type="text" placeholder="MacNay" />
                                </Form.Group>

                                <Form.Group controlId="email">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type="email" placeholder="elliot@mygoals.co" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Password:</Form.Label>
                                    <div className="wrap-ps">
                                        <Form.Control type="password" id="txtPassword" placeholder="Enter password" />
                                        <span className="toggle_pwd fa fa-fw fa-eye field_icon"></span>
                                    </div>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Repeat Password:</Form.Label>
                                    <div className="wrap-ps">
                                        <Form.Control type="password" id="txtPassword" placeholder="Repeat Password:" />
                                        <span className="toggle_pwd fa fa-fw fa-eye field_icon"></span>
                                    </div>
                                </Form.Group>

                                <Form.Group className="submit-block">
                                    <button type="submit" className="theme-dark__btn submit-btn btn btn-primary">Submit</button>
                                </Form.Group>
                            </form>
                        </div>
                    </div>

                    <div className="splash-view">
                        <div className="wrap-splash-view">
                            <img src={HandGesture} alt="" />
                            <h3 className="cust-heading-center cust-heading-white">Welcome back!</h3>
                            <span>To keep connected with us, please login with your personal info.</span>
                            <Button className="theme-white__btn sign-btn">Sign up</Button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default Signin;