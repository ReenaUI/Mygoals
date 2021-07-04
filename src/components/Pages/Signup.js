import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import HandGesture from '../../images/add-gratitude.png';
import Logo from '../../images/logo.png';
import GoalLogo from '../../images/view-goal.png';
import "../../../node_modules/font-awesome/css/font-awesome.css";
import $ from 'jquery';


class Signup extends Component {
    componentDidMount() {
        $(function () {
            $(".toggle_pwd").on("click", function () {
                $(this).toggleClass("fa-eye fa-eye-slash");
                var type = $(this).hasClass("fa-eye-slash") ? "text" : "password";
                $("#txtPassword").attr("type", type);
            });
        });


        let switchCtn = document.querySelector("#switch-cnt");
        let switchC1 = document.querySelector("#switch-c1");
        let switchC2 = document.querySelector("#switch-c2");
        let switchCircle = document.querySelectorAll(".switch__circle");
        let switchBtn = document.querySelectorAll(".switch-btn");
        let aContainer = document.querySelector("#a-container");
        let bContainer = document.querySelector("#b-container");
        let allButtons = document.querySelectorAll(".submit");

        let getButtons = e => e.preventDefault();

        let changeForm = e => {

            switchCtn.classList.add("is-gx");
            setTimeout(function () {
                switchCtn.classList.remove("is-gx");
            }, 1500);

            switchCtn.classList.toggle("is-txr");
            switchCircle[0].classList.toggle("is-txr");
            switchCircle[1].classList.toggle("is-txr");

            switchC1.classList.toggle("is-hidden");
            switchC2.classList.toggle("is-hidden");
            aContainer.classList.toggle("is-txl");
            bContainer.classList.toggle("is-txl");
            bContainer.classList.toggle("is-z200");
        };

        let mainF = e => {
            for (var i = 0; i < allButtons.length; i++) {
                allButtons[i].addEventListener("click", getButtons);
            }
            for (var i = 0; i < switchBtn.length; i++) {
                switchBtn[i].addEventListener("click", changeForm);
            }
        };

        window.addEventListener("load", mainF);
    }
    render() {
        return (
            <>
                <div className="wrap-login-view">
                    <div className="main main-sign-process">
                        <div className="sign-container a-container" id="a-container"><div className="wrap-sign-form-view">
                            <img src={Logo} alt="" className="logo-sign" />
                            <h3 className="cust-heading-center">Welcome back</h3>
                            <div className="social-icons-round social-ico">
                                <a href="#" className="facebook"></a>
                                <a href="#" className="google"></a>
                                <a href="#" className="linekdin"></a>
                            </div>

                            <form className="sign-form"  onSubmit={e => e.preventDefault()}>
                                <Form.Group controlId="email">
                                    <Form.Label>Username:</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Email" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Password:</Form.Label>
                                    <div className="wrap-ps">
                                        <Form.Control type="password" id="txtPassword" placeholder="Enter password" />
                                        <span className="toggle_pwd fa fa-fw fa-eye field_icon"></span>
                                    </div>
                                </Form.Group>

                                <Form.Group className="submit-block">
                                    <button type="submit" onSubmit={e => e.preventDefault()} className="theme-dark__btn submit-btn btn btn-primary">sign in</button>
                                </Form.Group>
                            </form>
                            <a href="#" className="forget-link">Forget your Password?</a>
                        </div>

                        </div>
                        <div className="sign-container b-container" id="b-container">
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
                                        <button type="submit" onClick={this.handleClick} className="theme-dark__btn submit-btn btn btn-primary">sign in</button>
                                    </Form.Group>
                                </form>
                            </div>
                        </div>

                        {/* switch containers */}
                        <div className="switch" id="switch-cnt">
                            <div className="switch__circle"></div>
                            <div className="switch__circle switch__circle--t"></div>
                            <div className="switch__container" id="switch-c1">
                                <div className="splash-view">

                                    <img src={HandGesture} alt="" className="switch-img" />
                                    <h3 className="cust-heading-center cust-heading-white">hello, friend!</h3>
                                    <span>Enter your details and start your yourney with us</span>
                                    <Button id="signup-splash-view-btn" className="theme-white__btn sign-btn switch__button button switch-btn">Sign up</Button>

                                </div>
                            </div>
                            <div className="switch__container is-hidden" id="switch-c2">
                                <div className="splash-view">

                                    <img src={GoalLogo} alt="" className="switch-img" />
                                    <h3 className="cust-heading-center switch-heading cust-heading-white">Welcome back!</h3>
                                    <span className="switch-description">To keep connected with us, please login with your personal info.</span>
                                    <Button id="signup-splash-view-btn" className="theme-white__btn sign-btn switch__button button switch-btn">Sign in</Button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>


        );
    }
}
export default Signup;