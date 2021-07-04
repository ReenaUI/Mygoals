import React from "react";
import { Row, Col, Button, Form } from 'react-bootstrap';
import FeatureImg from '../../images/blog-images/blog-1.png';
import { Link } from "react-router-dom";
import Newsletter from './Newsletter';

class ContentsPage extends React.Component {
    render() {
        return (
            <div className="card--white full-height contents-view">
                <h3 className="cust-heading">Content</h3>
                <span className="subheading">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>

                <Row className="content-posts-block">
                    <Col md={6} className="content-posts-cell">
                        <Link className="content-cell" to="/contents/contents-detail">
                            <div className="img-view-box">
                                <img src={FeatureImg} alt="" />
                                <span className="cat-label">Category</span>
                            </div>
                            <h2>sed do eiusmod tempor incididunt ut labore et dolore magna.</h2>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                            <span className="author">By Elliot McNay &#x02223; <span>September 14, 2020</span></span>
                        </Link>
                    </Col>

                    <Col md={6} className="content-posts-cell">
                        <Link className="content-cell" to="/contents/contents-detail">
                            <div className="img-view-box">
                                <img src={FeatureImg} alt="" />
                                <span className="cat-label">Category</span>
                            </div>
                            <h2>sed do eiusmod tempor incididunt ut labore et dolore magna.</h2>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                            <span className="author">By Elliot McNay &#x02223; <span>September 14, 2020</span></span>
                        </Link>
                    </Col>

                    <Col md={6} className="content-posts-cell">
                        <Link className="content-cell" to="/contents/contents-detail">
                            <div className="img-view-box">
                                <img src={FeatureImg} alt="" />
                                <span className="cat-label">Category</span>
                            </div>
                            <h2>sed do eiusmod tempor incididunt ut labore et dolore magna.</h2>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                            <span className="author">By Elliot McNay &#x02223; <span>September 14, 2020</span></span>
                        </Link>
                    </Col>

                    <Col md={6} className="content-posts-cell">
                        <Link className="content-cell" to="/contents/contents-detail">
                            <div className="img-view-box">
                                <img src={FeatureImg} alt="" />
                                <span className="cat-label">Category</span>
                            </div>
                            <h2>sed do eiusmod tempor incididunt ut labore et dolore magna.</h2>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                            <span className="author">By Elliot McNay &#x02223; <span>September 14, 2020</span></span>
                        </Link>
                    </Col>
                </Row>

                <Newsletter />

                <Row className="content-posts-block content-posts-sm">
                    <Col xl={4} lg={6} className="content-posts-cell">
                        <Link className="content-cell faded-cell" to="/contents/contents-detail">
                            <div className="img-view-box">
                                <img src={FeatureImg} alt="" />
                                <span className="cat-label">Category</span>
                            </div>
                            <h2>Ut enim ad minim veniam, quis nostrud.
</h2>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>


                        </Link>
                    </Col>

                    <Col xl={4} lg={6} className="content-posts-cell">
                        <Link className="content-cell faded-cell" to="/contents/contents-detail">
                            <div className="img-view-box">
                                <img src={FeatureImg} alt="" />
                                <span className="cat-label">Category</span>
                            </div>
                            <h2>Ut enim ad minim veniam, quis nostrud.
</h2>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                        </Link>
                    </Col>
                    <Col xl={4} lg={6} className="content-posts-cell">
                        <Link className="content-cell faded-cell" to="/contents/contents-detail">
                            <div className="img-view-box">
                                <img src={FeatureImg} alt="" />
                                <span className="cat-label">Category</span>
                            </div>
                            <h2>Ut enim ad minim veniam, quis nostrud.
</h2>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

                        </Link>
                    </Col>
                </Row>

                <div className="link-btn-wrap text-center">
                    <a href="#" className="theme-pink__btn load-more__btn">
                        load more
                    </a>
                </div>
            </div>
        );
    }
}

export default ContentsPage;