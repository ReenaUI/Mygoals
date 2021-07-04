import React, { Component } from 'react'
import {
    Route,
} from "react-router-dom";


class DashboardLayout extends Component {
    render() {
        const RouteComponent = this.props.component;
        return (
            <div className="page-wrap-main full-width-layout">
                <Route render={matchProps => (
                    <RouteComponent {...matchProps} />
                )} />
            </div>
        )
    }
}

export default DashboardLayout