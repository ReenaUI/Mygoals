import React from "react";
import { Row, Col } from 'react-bootstrap';
import FeatureImg from '../../images/blog-images/blog-1.png';
import { Link } from "react-router-dom";

class RecentContent extends React.Component {
    render() {
        return (
            <Row className="content-posts-block content-posts-sm">
                <Col xl={4} lg={6} className="content-posts-cell">
                <Link className="content-cell" to="/contents/contents-detail">
                    <div className="img-view-box">
                        <img src={FeatureImg} alt="" />
                        <span className="cat-label">Category</span>
                    </div>
                    <h2>Ut enim ad minim veniam, quis nostrud.
</h2>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

                    <span className="author">By Elliot McNay &#x02223; <span>September 14, 2020</span></span>
                </Link>
            </Col>

            <Col xl={4} lg={6} className="content-posts-cell">
                <Link className="content-cell" to="/contents/contents-detail">
                    <div className="img-view-box">
                        <img src={FeatureImg} alt="" />
                        <span className="cat-label">Category</span>
                    </div>
                    <h2>Ut enim ad minim veniam, quis nostrud.
</h2>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    <span className="author">By Elliot McNay &#x02223; <span>September 14, 2020</span></span>
                </Link>
            </Col>
            <Col xl={4} lg={6} className="content-posts-cell">
                <Link className="content-cell" to="/contents/contents-detail">
                    <div className="img-view-box">
                        <img src={FeatureImg} alt="" />
                        <span className="cat-label">Category</span>
                    </div>
                    <h2>Ut enim ad minim veniam, quis nostrud.
</h2>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    <span className="author">By Elliot McNay &#x02223; <span>September 14, 2020</span></span>

                </Link>
            </Col>
        </Row>

        );
    }
}

export default RecentContent;