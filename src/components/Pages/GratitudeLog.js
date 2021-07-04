import React from "react";
import { Button } from 'react-bootstrap';
import $ from 'jquery';
class GratitudeLog extends React.Component {


    componentDidMount() {
        $('.read-more-content').addClass('hide')
        $('.read-more-show, .read-more-hide').removeClass('hide')

        $('.read-more-show').on('click', function (e) {
            $(this).next('.read-more-content').removeClass('hide');
            $(this).addClass('hide');
            e.preventDefault();
        });

        $('.read-more-hide').on('click', function (e) {
            var p = $(this).parent('.read-more-content');
            p.addClass('hide');
            p.prev('.read-more-show').removeClass('hide');
            e.preventDefault();
        });

    };


    constructor() {
        super();
        this.state = {
            gratitudeData: [{
                id: 1,
                gratitudeHeading: 'lorem ipsum dolor sit amet, consectetur adiscing ...',
                gratitudedescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
                date: 'November 3, 2020'
            },
            {
                id: 2,
                gratitudeHeading: 'lorem ipsum dolor sit amet',
                gratitudedescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
                date: 'October 29, 2020'
            },
            {
                id: 3,
                gratitudeHeading: 'lorem ipsum dolor sit amet, consectetur adiscing ...',
                gratitudedescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
                date: 'October 22, 2020'
            },
            {
                id: 4,
                gratitudeHeading: 'lorem ipsum dolor sit amet',
                gratitudedescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
                date: 'October 12, 2020'
            },
            {
                id: 5,
                gratitudeHeading: 'lorem ipsum dolor sit amet, consectetur adiscing ... ',
                gratitudedescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
                date: 'October 4, 2020'

            },
            {
                id: 6,
                gratitudeHeading: 'lorem ipsum dolor sit amet',
                gratitudedescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
                date: 'October 12, 2020'
            }]
        }
    }


    render() {
        const { gratitudeData } = this.state;
        return (
            <div className="card--white full-height gratitude-log-view">
                <div className="cust-head-center-wrap">
                    <Button className="back-arrow" onClick={() => this.props.history.goBack()}>
                    </Button>
                    <span className="top-heading">gratitude log</span>
                    <h2 className="cust-heading-center">what are you grateful for today?</h2>
                </div>

                <div className="expand-log-details">
                    {
                        gratitudeData.map((grtData) => {
                            return (
                                <div className="expand-row" key={grtData.id}>
                                    <div className="expand-log-left">
                                        <p className="expand-log-description">
                                            {grtData.gratitudeHeading}<a className="read-more-show hide pls" href="#">Read More &#x0002B;</a> <span className="read-more-content">{grtData.gratitudedescription} <a className="read-more-hide hide" href="#">Read Less &#x02013;</a></span></p>
                                    </div>

                                    <span className="expand-log-date">{grtData.date}</span>
                                </div>


                            )
                        })
                    }
                </div>

                <div className="link-btn-wrap text-center">
                    <a href="#" className="theme-dark-outline__btn" >View All</a>
                </div>
            </div>
        );
    }
}

export default GratitudeLog;