import React, { Component } from 'react'
import {
    Route,
} from "react-router-dom";

import Header from '../Pages/Header';
import Sidebar from '../Pages/Sidebar';

class DashboardLayout extends Component {
    render() {
        const RouteComponent = this.props.component;
        return (
            <div className="page-wrap-main">
                <Header />

                <div className="wrapper-main">
                    <Sidebar />

                    <div className="page-content">
                        <Route render={matchProps => (
                            <RouteComponent {...matchProps} />
                        )} />
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardLayout