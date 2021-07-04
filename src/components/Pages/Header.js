import React from "react";
import logo from "../../images/logo.png";
import { InputGroup, Button, Dropdown,ButtonGroup, FormControl } from "react-bootstrap";
import UserAvatar from "../../images/user-avatar.png";
import UserAvatarLg from "../../images/user-avatar-lg.png";
import { Link } from "react-router-dom";

class Header extends React.Component {
   
    render() {
        return (
            <div className="page__header">
                <div className="left-cell">
                     <Link className="logo" to="/dashboard">
                        <img src={logo} alt="My Goals" />
                    </Link>
              
                    <InputGroup className="search-block">
                            <InputGroup.Append>
                                <Button className="search-ico"></Button>
                            </InputGroup.Append>
                            <FormControl placeholder="Search" 
                            aria-label="Amount (to the nearest dollar)"
                            />
                    </InputGroup>
                 
                </div>

                <div className="right-cell">
                      <Button className="theme-dark__btn" >Upgrade</Button>
                      <div className="user-access">
                        <span>Elliot</span>
                   
                        <Dropdown id="user-access-dropdown" className="cust-dropdown">
                            <Dropdown.Toggle as={ButtonGroup} >
                                <img src={UserAvatar} alt="" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <div className="media-box">
                                    <div className="media-content">
                                        <img src={UserAvatarLg} alt="" />
                                        <div className="media-content-inside">
                                            <span>Elliot MacNay</span>
                                            <a href="mailto:elliot@mygoals.co">elliot@mygoals.co</a>
                                            <a href="/Profile" className="theme-dark__btn profile-btn" >my profile</a>
                                        </div>
                                    </div>

                                    <Dropdown.Divider />
                                        <Link className="logout-btn" to="/sign-up">
                                            Logout
                                        </Link>
                    
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>

                      </div>
                </div>
            </div>
        );
    }
}

export default Header;