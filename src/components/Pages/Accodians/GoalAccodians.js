import React from "react";

class GoalAccodians extends React.Component {
      render() {
        return (
           <div id="accordion" className="cust-accordions">
                <div className="card cust-accordions-cell">
                    <button className="card-header card-link"
                        data-toggle="collapse"
                        data-target="#collapseOne">

                        <div className="header-title">
                            <h2>Why are you committed?:</h2>
                            <span className="edit-ico"></span>
                        </div>
                      
                        <i className="accord-ico accord-plus"></i>
                    </button>

                    <div id="collapseOne" className="collapse show"
                        data-parent="#accordion">
                        <div className="card-body">
                            <p>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <div className="card cust-accordions-cell">
                    <button className="card-header collapsed card-link"
                        data-toggle="collapse"
                        data-target="#collapseTwo">

                        <div className="header-title">
                            <h2>Goals start date:</h2>
                            <span className="edit-ico"></span>
                        </div>

                        <i className="accord-ico accord-plus"></i>
                    </button>

                    <div id="collapseTwo" className="collapse"
                        data-parent="#accordion">
                        <div className="card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>

                <div className="card cust-accordions-cell">
                    <button className="card-header collapsed card-link"
                        data-toggle="collapse"
                        data-target="#collapseThree">
                        <div className="header-title">
                            <h2> Goals completion date:</h2>
                            <span className="edit-ico"></span>
                        </div>
                                  
                        <i className="accord-ico accord-plus"></i>
                    </button>
                    <div id="collapseThree" className="collapse"
                        data-parent="#accordion">
                        <div className="card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>

                <div className="card cust-accordions-cell">
                    <button className="card-header collapsed card-link"
                        data-toggle="collapse"
                        data-target="#collapseFour">
                        <div className="header-title">
                            <h2>  Potential obstacles / roadblocks: </h2>
                            <span className="edit-ico"></span>
                        </div>
           
                        <i className="accord-ico accord-plus"></i>

                    </button>
                    <div id="collapseFour" className="collapse"
                        data-parent="#accordion">
                        <div className="card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>

                <div className="card cust-accordions-cell">
                    <button className="card-header collapsed card-link"
                        data-toggle="collapse"
                        data-target="#collapseFive">
                        <div className="header-title">
                            <h2>How will you celebrate?: </h2>
                            <span className="edit-ico"></span>
                        </div>
     
                        <i className="accord-ico accord-plus"></i>
                    </button>
                    <div id="collapseFive" className="collapse"
                        data-parent="#accordion">
                        <div className="card-body">
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default GoalAccodians;
