import React, { Component } from 'react'
import {
    Route,
} from "react-router-dom";
import Header from '../Pages/Header';

class WithHeaderLayout extends Component {
    render() {
        const RouteComponent = this.props.component;
        return (
            <div className="page-wrap-main header-content-layout">
                <Header />

                <div className="wrapper-main">
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

export default WithHeaderLayout