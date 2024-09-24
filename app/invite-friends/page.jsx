import InviteFriendsPopup from '@/components/InviteFriendsPopup'
import ProfileLayout from '@/layouts/profileLayout/ProfileLayout'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <ProfileLayout>
            <div className='profile-content'>
                <div className="invite-friends">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="row g-4">
                                <div className="col-12">
                                    <div className="friend-suggestion-top">
                                        <div className="left">
                                            <div className="user-info">
                                                <h4 className="user-name">Ethan Debnath</h4>
                                                <p className='user-follower'>3k Follower | 1.5k Following</p>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <div className="serach-msg">
                                                <div className="position-relative me-3">
                                                    <input type="text" className='form-control' placeholder='Search' />
                                                    <i class="ri-search-2-line "></i>
                                                </div>
                                                <Link href="" className='msg-btn'>Message</Link>
                                                <div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card friend-request-card">
                                        <div className="card-body">
                                            <div className="card-top d-flex justify-content-between align-items-center">
                                                <h6>Friend Request</h6>
                                                <h6>
                                                    <Link href=''>View sent request</Link>
                                                </h6>
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
                                </div>
                                <div className="col-12">
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
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card friend-request-card suggest-people-card">
                                <div className="card-body">
                                    <div className="search-group">
                                        <input type="text" className='form-control' placeholder='Search' />
                                    </div>
                                    <div className="group-join">
                                        <div className='group-join-lists'>
                                            <h6 className="group-join-title">Group Join</h6>
                                            <ul className="nav">
                                                <li className="nav-item">
                                                    <div className="group">
                                                        <div className="group-img">
                                                            <img src={'/assets/images/friends-request.png'} alt="" className='img-fluid' />
                                                        </div>
                                                        <div className="group-text">
                                                            <h6 className="group-text-name">English Club</h6>
                                                            <div className="group-text-info">
                                                                <p>398,098K members</p>
                                                                <div className='dot'></div>
                                                                <p>102,987K posts</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="nav-item">
                                                    <div className="group">
                                                        <div className="group-img">
                                                            <img src={'/assets/images/friends-request.png'} alt="" className='img-fluid' />
                                                        </div>
                                                        <div className="group-text">
                                                            <h6 className="group-text-name">English Club</h6>
                                                            <div className="group-text-info">
                                                                <p>398,098K members</p>
                                                                <div className='dot'></div>
                                                                <p>102,987K posts</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="nav-item">
                                                    <div className="group">
                                                        <div className="group-img">
                                                            <img src={'/assets/images/friends-request.png'} alt="" className='img-fluid' />
                                                        </div>
                                                        <div className="group-text">
                                                            <h6 className="group-text-name">English Club</h6>
                                                            <div className="group-text-info">
                                                                <p>398,098K members</p>
                                                                <div className='dot'></div>
                                                                <p>102,987K posts</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="nav-item">
                                                    <div className="group">
                                                        <div className="group-img">
                                                            <img src={'/assets/images/friends-request.png'} alt="" className='img-fluid' />
                                                        </div>
                                                        <div className="group-text">
                                                            <h6 className="group-text-name">English Club</h6>
                                                            <div className="group-text-info">
                                                                <p>398,098K members</p>
                                                                <div className='dot'></div>
                                                                <p>102,987K posts</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='popular-tables'>
                                            <h6 className="group-join-title">Popular Table</h6>
                                            <ul className="nav">
                                                <li className="nav-item">
                                                    <div className="popular-table-single">
                                                        <div className="popular-table-single-text">
                                                            <h6 className="popular-table-single-text-name">English Club</h6>
                                                            <div className="popular-table-single-text-info">
                                                                <p>398,098K members</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <button className="btn friend-request-btn dismiss shadow-0">Follow</button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="nav-item">
                                                    <div className="popular-table-single">
                                                        <div className="popular-table-single-text">
                                                            <h6 className="popular-table-single-text-name">English Club</h6>
                                                            <div className="popular-table-single-text-info">
                                                                <p>398,098K members</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <button className="btn friend-request-btn dismiss shadow-0">Follow</button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="nav-item">
                                                    <div className="popular-table-single">
                                                        <div className="popular-table-single-text">
                                                            <h6 className="popular-table-single-text-name">English Club</h6>
                                                            <div className="popular-table-single-text-info">
                                                                <p>398,098K members</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <button className="btn friend-request-btn dismiss shadow-0">Follow</button>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProfileLayout>
    )
}
