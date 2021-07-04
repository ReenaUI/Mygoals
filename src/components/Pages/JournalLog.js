import React from "react";
import { Button } from 'react-bootstrap';
import $ from 'jquery';

class JournalLog extends React.Component {
    componentDidMount() {
        $('.read-more-content').addClass('hide')
        $('.read-more-show, .read-more-hide').removeClass('hide')

        $('.read-more-show').on('click', function (e) {
            $(this).next('.read-more-content').removeClass('hide');
            $(this).addClass('hide');
            e.preventDefault();
        });

        $('.read-more-hide').on('click', function (e) {
            var p = $(this).parents('.read-more-content');
            p.addClass('hide');
            p.prev('.read-more-show').removeClass('hide');
            e.preventDefault();
        });

    };

    constructor() {
        super();
        this.state = {
            JournalData: [{
                id: 1,
                JournalHeading: 'Who or what gives you comfort?',
                Journaldescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                date: 'November 3, 2020'
            },
            {
                id: 2,
                JournalHeading: 'What is the best compliment you’ve ever been given? How did it...',
                Journaldescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                date: 'October 29, 2020'
            },
            {
                id: 3,
                JournalHeading: 'What are you in control of at this very moment?',
                Journaldescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                date: 'October 22, 2020'
            },
            {
                id: 4,
                JournalHeading: 'Who is inspiring you right now? Why?',
                Journaldescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                date: 'October 12, 2020'
            },
            {
                id: 5,
                JournalHeading: 'Write a thank-you note to yourself',
                Journaldescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                date: 'October 4, 2020'

            },
            {
                id: 6,
                JournalHeading: 'If failure was impossible, what would you try that yu have never...',
                Journaldescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                date: 'October 12, 2020'
            }]
        }
    }

    render() {
        const { JournalData } = this.state;
        return (
            <div className="card--white full-height journal-log-view">
                <div className="cust-head-center-wrap">
                    <Button className="back-arrow" onClick={() => this.props.history.goBack()}>
                    </Button>

                    <h2 className="cust-heading-center">journal log</h2>
                </div>

                <div className="expand-log-details">
                    {
                        JournalData.map((JrnlData) => {
                            return (
                                <div className="expand-row" key={JrnlData.id}>
                                    <div className="expand-log-left">
                                        <p className="expand-log-description">
                                            <span className="expand-log-heading">{JrnlData.JournalHeading}</span>
                                            <a className="read-more-show hide pls" href="#">Read More &#x0002B;</a>
                                            <span className="read-more-content">
                                                <span>{JrnlData.Journaldescription}
                                        <a className="read-more-hide hide" href="#">Read Less &#x02013;</a>
                                                </span>
                                            </span>
                                        </p>
                                    </div>

                                    <span className="expand-log-date">{JrnlData.date}</span>
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

export default JournalLog;