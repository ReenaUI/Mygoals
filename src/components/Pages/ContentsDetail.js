import React from "react";
import { Row, Col, Button } from 'react-bootstrap';
import FeatureImg from '../../images/blog-images/blog-1.png';
import Newsletter from './Newsletter';
import RecentContent from './RecentContent';
import Profile from '../../images/blog-images/blog-media.png';

class ContentsDetail extends React.Component {
    render() {
        return (
            <div className="card--white full-height contents-detail-view">
                <div className="cust-head-center-wrap">
                    <Button className="back-arrow" onClick={() => this.props.history.goBack()}>
                    </Button>
                    <span className="top-heading">Content</span>
                    <h2 className="cust-heading-center">sed do eiusmod tempor incididunt ut labore et dolore magna.</h2>
                    <span className="author content-detail-autor">By Elliot McNay &#x02223; <span>September 14, 2020</span></span>
                </div>
                <Row className="content-posts-block container-med content-details-wrap">
                        <div className="content-cell">
                            <div className="img-view-box">
                                <img src={FeatureImg} alt="" />
                                <span className="cat-label">Category</span>
                                <div className="social-ico">
                                    <a href="#" className="facebook"></a>
                                    <a href="#" className="twitter"></a>
                                    <a href="#" className="linekdin"></a>
                                </div>    
                            </div>
                            <div className="content-detail-container-sm">
                                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit (h3)</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <h2>sed do eiusmod tempor incididunt ut labore et dolore magna.</h2>
                                <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </strong>
                                <p>We believe that goal setting is essential for mental wellbeing and personal development. Businesses who invest in teaching their people this life skill will reap the rewards of better company culture, enhanced performance of employees, and the mental health of employees.</p>
                                <h3>consectetur adipisicing elit (h3)</h3>
               
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                </div>
                            <div className="blockquote-block">
                                <blockquote>‘sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud’</blockquote>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            </div>
                            <div className="content-detail-container-sm">
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit (h3)</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit(H2)</h2>
                            <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</strong>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                            </div>
                        </div>
                </Row>

                 <div className="content-media-box">
                    <div className="content-detail-container-sm">
                        <img src={Profile} alt="" />
                        <div className="content-media-content">
                            <span>By Elliot McNay</span>
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        </div>
                     </div>
                 </div>
                <Newsletter />
                <div className="wrap-recent-block">
                    <h2 className="cust-heading-center">related content</h2>
                    <RecentContent />
                </div>
            </div>
        );
    }
}

export default ContentsDetail;