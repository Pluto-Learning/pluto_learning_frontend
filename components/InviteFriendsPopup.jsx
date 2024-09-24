import Link from 'next/link'
import React from 'react'

export default function InviteFriendsPopup() {
    return (
        <>
            <div className="card friend-request-card suggest-people-card">
                <div className="card-body">
                    <div className="card-top d-flex justify-content-between align-items-center">
                        <h6>Suggestion People</h6>
                        {/* <h6>
                                                <Link to=''>View sent request</Link>
                                                </h6> */}
                    </div>
                    <div className="friend-request-list">
                        <ul class="nav">
                            <li class="nav-item">
                                <div className="friend-request">
                                    <div className="left">
                                        <div className="friend-img">
                                            <img src={'/assets/images/friends-request.png'} alt="" className='img-fluid' />
                                        </div>
                                        <div className="friend-info">
                                            <h6 className="friend-name">
                                                <Link href=''>Rolan Dip</Link>
                                            </h6>
                                            <div className='d-flex'>
                                                <p className='mutual-friends'>163 mutual friends</p>
                                                <p className='time'>25m ago</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div class="d-flex justify-content-between">
                                            <button class="btn friend-request-btn dismiss shadow-0" type="button">Dismiss</button>
                                            <button class="btn friend-request-btn accept shadow-0" type="button">Accept</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item">
                                <div className="friend-request">
                                    <div className="left">
                                        <div className="friend-img">
                                            <img src={'/assets/images/friends-request.png'} alt="" className='img-fluid' />
                                        </div>
                                        <div className="friend-info">
                                            <h6 className="friend-name">
                                                <Link href=''>Rolan Dip</Link>
                                            </h6>
                                            <div className='d-flex'>
                                                <p className='mutual-friends'>163 mutual friends</p>
                                                <p className='time'>25m ago</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div class="d-flex justify-content-between">
                                            <button class="btn friend-request-btn dismiss shadow-0" type="button">Dismiss</button>
                                            <button class="btn friend-request-btn accept shadow-0" type="button">Accept</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item">
                                <div className="friend-request">
                                    <div className="left">
                                        <div className="friend-img">
                                            <img src={'/assets/images/friends-request.png'} alt="" className='img-fluid' />
                                        </div>
                                        <div className="friend-info">
                                            <h6 className="friend-name">
                                                <Link href=''>Rolan Dip</Link>
                                            </h6>
                                            <div className='d-flex'>
                                                <p className='mutual-friends'>163 mutual friends</p>
                                                <p className='time'>25m ago</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div class="d-flex justify-content-between">
                                            <button class="btn friend-request-btn dismiss shadow-0" type="button">Dismiss</button>
                                            <button class="btn friend-request-btn accept shadow-0" type="button">Accept</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
