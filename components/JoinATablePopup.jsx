import { Rating } from '@mui/material'
import React from 'react'

export default function JoinATablePopup() {
    return (
        <div className='join-table-popup'>
            <div className="card">
                <div className="card-body">
                    <div className="course-details">
                        <h6>Gamification : Motivation Psychology & The Art of Engagement</h6>
                        <p>Learn how to motivate and engage anyone by learning the psychology that underpins human behavior.</p>
                        <div className="rating d-flex align-items-center">
                            <div>
                                <span>4.0</span>
                                <Rating name="size-small" defaultValue={2} size="small" />
                            </div>
                            <p className='mb-0'>1325 rating</p>
                        </div>
                        <div className="course-info-wrapper ">
                            <div className="course-info-course-author">
                                <div className="course-info-course-author-img">
                                    <img src="" alt="" />
                                </div>
                                <p className="course-info-course-author-name">Nadia Mumtahena</p>
                            </div>
                            <div className="course-info-course-number">

                            </div>
                            <div className="course-info-course-duration"></div>
                        </div>

                        <div className="what-you-learn">
                            <div className="card">
                                <div className="card-body">
                                    <h6>what you'll learn</h6>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className='what-you-learn-text'>Learn how to motivate and engage anyone by learning the psychology that underpins human behavior.</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p className='what-you-learn-text'>Learn how to motivate and engage anyone by learning the psychology that underpins human behavior.</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p className='what-you-learn-text'>Learn how to motivate and engage anyone by learning the psychology that underpins </p>
                                        </div>
                                        <div className="col-md-6">
                                            <p className='what-you-learn-text'>Learn how to motivate and engage anyone by learning the psychology that underpins </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
