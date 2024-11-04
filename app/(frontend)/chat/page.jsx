import HomeLayout from '@/layouts/homeLayout/HomeLayout'
import ProfileLayout from '@/layouts/profileLayout/ProfileLayout'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <HomeLayout>
            <main class="content chat-message">
                <div class="container-fluid">
                    <div class="row g-3">
                        <div class="col-12 col-lg-5 col-xl-2 border-right">
                            <div className="card h-100 card-left">
                                <div className="card-header">
                                    <div class="px-4">
                                        <div class="d-flex align-items-center">
                                            <div class="flex-grow-1">
                                                <input type="text" class="form-control my-3" placeholder="Search..." />
                                            </div>
                                            <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                                <i class="fa-solid fa-bars"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div class="people-list">
                                        <div class="list-group-item list-group-item-action border-0 people">
                                            <div class="d-flex align-items-start ">
                                                <div className="people-img position-relative">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                        class="rounded-circle mr-1" alt="Steve Bangalter" width="40" height="40" />
                                                    <div class="small d-lg-none">
                                                        <span class="fas fa-circle chat-online"></span>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3 people-info">
                                                    <h6 className="people-name mb-0">
                                                        Steve Bangalter
                                                    </h6>
                                                    <div class="small">
                                                        <span class="fas fa-circle chat-online"></span> Online
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="list-group-item list-group-item-action border-0 people">
                                            <div class="d-flex align-items-start ">
                                                <div className="people-img position-relative">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                        class="rounded-circle mr-1" alt="Steve Bangalter" width="40" height="40" />
                                                    <div class="small d-lg-none">
                                                        <span class="fas fa-circle chat-online"></span>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3 people-info">
                                                    <h6 className="people-name mb-0">
                                                        Steve Bangalter
                                                    </h6>
                                                    <div class="small">
                                                        <span class="fas fa-circle chat-online"></span> Online
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="list-group-item list-group-item-action border-0 people">
                                            <div class="d-flex align-items-start ">
                                                <div className="people-img position-relative">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                        class="rounded-circle mr-1" alt="Steve Bangalter" width="40" height="40" />
                                                    <div class="small d-lg-none">
                                                        <span class="fas fa-circle chat-online"></span>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3 people-info">
                                                    <h6 className="people-name mb-0">
                                                        Steve Bangalter
                                                    </h6>
                                                    <div class="small">
                                                        <span class="fas fa-circle chat-online"></span> Online
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="list-group-item list-group-item-action border-0 people">
                                            <div class="d-flex align-items-start ">
                                                <div className="people-img position-relative">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                        class="rounded-circle mr-1" alt="Steve Bangalter" width="40" height="40" />
                                                    <div class="small d-lg-none">
                                                        <span class="fas fa-circle chat-online"></span>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3 people-info">
                                                    <h6 className="people-name mb-0">
                                                        Steve Bangalter
                                                    </h6>
                                                    <div class="small">
                                                        <span class="fas fa-circle chat-online"></span> Online
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="list-group-item list-group-item-action border-0 people">
                                            <div class="d-flex align-items-start ">
                                                <div className="people-img position-relative">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                        class="rounded-circle mr-1" alt="Steve Bangalter" width="40" height="40" />
                                                    <div class="small d-lg-none">
                                                        <span class="fas fa-circle chat-online"></span>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3 people-info">
                                                    <h6 className="people-name mb-0">
                                                        Steve Bangalter
                                                    </h6>
                                                    <div class="small">
                                                        <span class="fas fa-circle chat-online"></span> Online
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="list-group-item list-group-item-action border-0 people">
                                            <div class="d-flex align-items-start ">
                                                <div className="people-img position-relative">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                        class="rounded-circle mr-1" alt="Steve Bangalter" width="40" height="40" />
                                                    <div class="small d-lg-none">
                                                        <span class="fas fa-circle chat-online"></span>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3 people-info">
                                                    <h6 className="people-name mb-0">
                                                        Steve Bangalter
                                                    </h6>
                                                    <div class="small">
                                                        <span class="fas fa-circle chat-online"></span> Online
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="list-group-item list-group-item-action border-0 people">
                                            <div class="d-flex align-items-start ">
                                                <div className="people-img position-relative">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                        class="rounded-circle mr-1" alt="Steve Bangalter" width="40" height="40" />
                                                    <div class="small d-lg-none">
                                                        <span class="fas fa-circle chat-online"></span>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3 people-info">
                                                    <h6 className="people-name mb-0">
                                                        Steve Bangalter
                                                    </h6>
                                                    <div class="small">
                                                        <span class="fas fa-circle chat-online"></span> Online
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="list-group-item list-group-item-action border-0 people">
                                            <div class="d-flex align-items-start ">
                                                <div className="people-img position-relative">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                        class="rounded-circle mr-1" alt="Steve Bangalter" width="40" height="40" />
                                                    <div class="small d-lg-none">
                                                        <span class="fas fa-circle chat-online"></span>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3 people-info">
                                                    <h6 className="people-name mb-0">
                                                        Steve Bangalter
                                                    </h6>
                                                    <div class="small">
                                                        <span class="fas fa-circle chat-online"></span> Online
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="list-group-item list-group-item-action border-0 people">
                                            <div class="d-flex align-items-start ">
                                                <div className="people-img position-relative">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                        class="rounded-circle mr-1" alt="Steve Bangalter" width="40" height="40" />
                                                    <div class="small d-lg-none">
                                                        <span class="fas fa-circle chat-online"></span>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3 people-info">
                                                    <h6 className="people-name mb-0">
                                                        Steve Bangalter
                                                    </h6>
                                                    <div class="small">
                                                        <span class="fas fa-circle chat-online"></span> Online
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="list-group-item list-group-item-action border-0 people">
                                            <div class="d-flex align-items-start ">
                                                <div className="people-img position-relative">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                        class="rounded-circle mr-1" alt="Steve Bangalter" width="40" height="40" />
                                                    <div class="small d-lg-none">
                                                        <span class="fas fa-circle chat-online"></span>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3 people-info">
                                                    <h6 className="people-name mb-0">
                                                        Steve Bangalter
                                                    </h6>
                                                    <div class="small">
                                                        <span class="fas fa-circle chat-online"></span> Online
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="list-group-item list-group-item-action border-0 people">
                                            <div class="d-flex align-items-start ">
                                                <div className="people-img position-relative">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                        class="rounded-circle mr-1" alt="Steve Bangalter" width="40" height="40" />
                                                    <div class="small d-lg-none">
                                                        <span class="fas fa-circle chat-online"></span>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3 people-info">
                                                    <h6 className="people-name mb-0">
                                                        Steve Bangalter
                                                    </h6>
                                                    <div class="small">
                                                        <span class="fas fa-circle chat-online"></span> Online
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="list-group-item list-group-item-action border-0 people">
                                            <div class="d-flex align-items-start ">
                                                <div className="people-img position-relative">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                        class="rounded-circle mr-1" alt="Steve Bangalter" width="40" height="40" />
                                                    <div class="small d-lg-none">
                                                        <span class="fas fa-circle chat-online"></span>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3 people-info">
                                                    <h6 className="people-name mb-0">
                                                        Steve Bangalter
                                                    </h6>
                                                    <div class="small">
                                                        <span class="fas fa-circle chat-online"></span> Online
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="list-group-item list-group-item-action border-0 people">
                                            <div class="d-flex align-items-start ">
                                                <div className="people-img position-relative">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                        class="rounded-circle mr-1" alt="Steve Bangalter" width="40" height="40" />
                                                    <div class="small d-lg-none">
                                                        <span class="fas fa-circle chat-online"></span>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3 people-info">
                                                    <h6 className="people-name mb-0">
                                                        Steve Bangalter
                                                    </h6>
                                                    <div class="small">
                                                        <span class="fas fa-circle chat-online"></span> Online
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="list-group-item list-group-item-action border-0 people">
                                            <div class="d-flex align-items-start ">
                                                <div className="people-img position-relative">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                        class="rounded-circle mr-1" alt="Steve Bangalter" width="40" height="40" />
                                                    <div class="small d-lg-none">
                                                        <span class="fas fa-circle chat-online"></span>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3 people-info">
                                                    <h6 className="people-name mb-0">
                                                        Steve Bangalter
                                                    </h6>
                                                    <div class="small">
                                                        <span class="fas fa-circle chat-online"></span> Online
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="list-group-item list-group-item-action border-0 people">
                                            <div class="d-flex align-items-start ">
                                                <div className="people-img position-relative">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                        class="rounded-circle mr-1" alt="Steve Bangalter" width="40" height="40" />
                                                    <div class="small d-lg-none">
                                                        <span class="fas fa-circle chat-online"></span>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3 people-info">
                                                    <h6 className="people-name mb-0">
                                                        Steve Bangalter
                                                    </h6>
                                                    <div class="small">
                                                        <span class="fas fa-circle chat-online"></span> Online
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="list-group-item list-group-item-action border-0 people">
                                            <div class="d-flex align-items-start ">
                                                <div className="people-img position-relative">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                        class="rounded-circle mr-1" alt="Steve Bangalter" width="40" height="40" />
                                                    <div class="small d-lg-none">
                                                        <span class="fas fa-circle chat-online"></span>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3 people-info">
                                                    <h6 className="people-name mb-0">
                                                        Steve Bangalter
                                                    </h6>
                                                    <div class="small">
                                                        <span class="fas fa-circle chat-online"></span> Online
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="list-group-item list-group-item-action border-0 people">
                                            <div class="d-flex align-items-start ">
                                                <div className="people-img position-relative">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                        class="rounded-circle mr-1" alt="Steve Bangalter" width="40" height="40" />
                                                    <div class="small d-lg-none">
                                                        <span class="fas fa-circle chat-online"></span>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3 people-info">
                                                    <h6 className="people-name mb-0">
                                                        Steve Bangalter
                                                    </h6>
                                                    <div class="small">
                                                        <span class="fas fa-circle chat-online"></span> Online
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="chat-list">
                                        <div className="people-wrapper group">
                                            <h4 className='text-center '>Group</h4>
                                            <div class="people-list">
                                                <a href="#" class="list-group-item list-group-item-action border-0">
                                                    <div class="d-flex align-items-start">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                            class="rounded-circle mr-1" alt="Jennifer Chang" width="40" height="40" />
                                                        <div class="flex-grow-1 ms-3">
                                                            Jennifer Chang
                                                            <div class="small"><span class="fas fa-circle chat-offline"></span> Offline
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action border-0">
                                                    <div class="d-flex align-items-start">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                            class="rounded-circle mr-1" alt="Jennifer Chang" width="40" height="40" />
                                                        <div class="flex-grow-1 ms-3">
                                                            Jennifer Chang
                                                            <div class="small"><span class="fas fa-circle chat-offline"></span> Offline
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action border-0">
                                                    <div class="d-flex align-items-start">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                            class="rounded-circle mr-1" alt="Jennifer Chang" width="40" height="40" />
                                                        <div class="flex-grow-1 ms-3">
                                                            Jennifer Chang
                                                            <div class="small"><span class="fas fa-circle chat-offline"></span> Offline
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action border-0">
                                                    <div class="d-flex align-items-start">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                            class="rounded-circle mr-1" alt="Jennifer Chang" width="40" height="40" />
                                                        <div class="flex-grow-1 ms-3">
                                                            Jennifer Chang
                                                            <div class="small"><span class="fas fa-circle chat-offline"></span> Offline
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action border-0">
                                                    <div class="d-flex align-items-start">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                            class="rounded-circle mr-1" alt="Jennifer Chang" width="40" height="40" />
                                                        <div class="flex-grow-1 ms-3">
                                                            Jennifer Chang
                                                            <div class="small"><span class="fas fa-circle chat-offline"></span> Offline
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action border-0">
                                                    <div class="d-flex align-items-start">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                            class="rounded-circle mr-1" alt="Jennifer Chang" width="40" height="40" />
                                                        <div class="flex-grow-1 ms-3">
                                                            Jennifer Chang
                                                            <div class="small"><span class="fas fa-circle chat-offline"></span> Offline
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action border-0">
                                                    <div class="d-flex align-items-start">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                            class="rounded-circle mr-1" alt="Jennifer Chang" width="40" height="40" />
                                                        <div class="flex-grow-1 ms-3">
                                                            Jennifer Chang
                                                            <div class="small"><span class="fas fa-circle chat-offline"></span> Offline
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="people-wrapper people">
                                            <h4 className='text-center '>Group</h4>
                                            <div class="people-list">
                                                <a href="#" class="list-group-item list-group-item-action border-0">
                                                    <div class="d-flex align-items-start">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                            class="rounded-circle mr-1" alt="Jennifer Chang" width="40" height="40" />
                                                        <div class="flex-grow-1 ms-3">
                                                            Jennifer Chang
                                                            <div class="small"><span class="fas fa-circle chat-offline"></span> Offline
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action border-0">
                                                    <div class="d-flex align-items-start">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                            class="rounded-circle mr-1" alt="Jennifer Chang" width="40" height="40" />
                                                        <div class="flex-grow-1 ms-3">
                                                            Jennifer Chang
                                                            <div class="small"><span class="fas fa-circle chat-offline"></span> Offline
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action border-0">
                                                    <div class="d-flex align-items-start">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                            class="rounded-circle mr-1" alt="Jennifer Chang" width="40" height="40" />
                                                        <div class="flex-grow-1 ms-3">
                                                            Jennifer Chang
                                                            <div class="small"><span class="fas fa-circle chat-offline"></span> Offline
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action border-0">
                                                    <div class="d-flex align-items-start">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                            class="rounded-circle mr-1" alt="Jennifer Chang" width="40" height="40" />
                                                        <div class="flex-grow-1 ms-3">
                                                            Jennifer Chang
                                                            <div class="small"><span class="fas fa-circle chat-offline"></span> Offline
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action border-0">
                                                    <div class="d-flex align-items-start">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                            class="rounded-circle mr-1" alt="Jennifer Chang" width="40" height="40" />
                                                        <div class="flex-grow-1 ms-3">
                                                            Jennifer Chang
                                                            <div class="small"><span class="fas fa-circle chat-offline"></span> Offline
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action border-0">
                                                    <div class="d-flex align-items-start">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                            class="rounded-circle mr-1" alt="Jennifer Chang" width="40" height="40" />
                                                        <div class="flex-grow-1 ms-3">
                                                            Jennifer Chang
                                                            <div class="small"><span class="fas fa-circle chat-offline"></span> Offline
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action border-0">
                                                    <div class="d-flex align-items-start">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                            class="rounded-circle mr-1" alt="Jennifer Chang" width="40" height="40" />
                                                        <div class="flex-grow-1 ms-3">
                                                            Jennifer Chang
                                                            <div class="small"><span class="fas fa-circle chat-offline"></span> Offline
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action border-0">
                                                    <div class="d-flex align-items-start">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                            class="rounded-circle mr-1" alt="Jennifer Chang" width="40" height="40" />
                                                        <div class="flex-grow-1 ms-3">
                                                            Jennifer Chang
                                                            <div class="small"><span class="fas fa-circle chat-offline"></span> Offline
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action border-0">
                                                    <div class="d-flex align-items-start">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                            class="rounded-circle mr-1" alt="Jennifer Chang" width="40" height="40" />
                                                        <div class="flex-grow-1 ms-3">
                                                            Jennifer Chang
                                                            <div class="small"><span class="fas fa-circle chat-offline"></span> Offline
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action border-0">
                                                    <div class="d-flex align-items-start">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                            class="rounded-circle mr-1" alt="Jennifer Chang" width="40" height="40" />
                                                        <div class="flex-grow-1 ms-3">
                                                            Jennifer Chang
                                                            <div class="small"><span class="fas fa-circle chat-offline"></span> Offline
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" class="list-group-item list-group-item-action border-0">
                                                    <div class="d-flex align-items-start">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                            class="rounded-circle mr-1" alt="Jennifer Chang" width="40" height="40" />
                                                        <div class="flex-grow-1 ms-3">
                                                            Jennifer Chang
                                                            <div class="small"><span class="fas fa-circle chat-offline"></span> Offline
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-7 col-xl-8">
                            <div className="card h-100 card-center">
                                <div className="card-header">
                                    <div class="py-2 px-4 ">
                                        <div class="d-flex align-items-center py-1">
                                            <div class="position-relative">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                    class="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
                                            </div>
                                            <div class="flex-grow-1 ps-3">
                                                <strong>Sharon Lessman</strong>
                                                <div class="small">
                                                    <span class="fas fa-circle chat-online"></span> Online
                                                </div>
                                                {/* <div class="text-muted small"><em>Typing...</em></div> */}
                                            </div>
                                            {/* <div >
                                                <button class="btn btn-primary btn-lg mr-1 px-3"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-phone feather-lg">
                                                    <path
                                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                                    </path>
                                                </svg></button>
                                                <button class="btn btn-info btn-lg mr-1 px-3 d-none d-md-inline-block"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-video feather-lg">
                                                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                                                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                                                </svg></button>
                                                <button class="btn btn-light border btn-lg px-3"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-more-horizontal feather-lg">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="19" cy="12" r="1"></circle>
                                                    <circle cx="5" cy="12" r="1"></circle>
                                                </svg></button>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">

                                    <div class="position-relative">
                                        <div class="chat-messages p-4">

                                            <div class="chat-message-right pb-4">
                                                <div>
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                        class="rounded-circle mr-1" alt="Chris Wood" width="40" height="40" />
                                                    <div class="text-muted small text-nowrap mt-2">2:33 am</div>
                                                </div>
                                                <div class="flex-shrink-1 bg-light  me-3 message">
                                                    <div class="font-weight-bold mb-1">You</div>
                                                    Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.
                                                </div>
                                            </div>

                                            <div class="chat-message-left pb-4">
                                                <div>
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                        class="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
                                                    <div class="text-muted small text-nowrap mt-2">2:34 am</div>
                                                </div>
                                                <div class="flex-shrink-1 bg-light  ms-3 message">
                                                    <div class="font-weight-bold mb-1">Sharon Lessman</div>
                                                    Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.
                                                </div>
                                            </div>

                                            <div class="chat-message-right mb-4">
                                                <div>
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                        class="rounded-circle mr-1" alt="Chris Wood" width="40" height="40" />
                                                    <div class="text-muted small text-nowrap mt-2">2:35 am</div>
                                                </div>
                                                <div class="flex-shrink-1 bg-light  me-3 message">
                                                    <div class="font-weight-bold mb-1">You</div>
                                                    Cum ea graeci tractatos.
                                                </div>
                                            </div>

                                            <div class="chat-message-left pb-4">
                                                <div>
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                        class="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
                                                    <div class="text-muted small text-nowrap mt-2">2:36 am</div>
                                                </div>
                                                <div class="flex-shrink-1 bg-light  ms-3 message">
                                                    <div class="font-weight-bold mb-1">Sharon Lessman</div>
                                                    Sed pulvinar, massa vitae interdum pulvinar, risus lectus porttitor magna, vitae
                                                    commodo lectus mauris et velit.
                                                    Proin ultricies placerat imperdiet. Morbi varius quam ac venenatis tempus.
                                                </div>
                                            </div>

                                            <div class="chat-message-left pb-4">
                                                <div>
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                        class="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
                                                    <div class="text-muted small text-nowrap mt-2">2:37 am</div>
                                                </div>
                                                <div class="flex-shrink-1 bg-light  ms-3 message">
                                                    <div class="font-weight-bold mb-1">Sharon Lessman</div>
                                                    Cras pulvinar, sapien id vehicula aliquet, diam velit elementum orci.
                                                </div>
                                            </div>

                                            <div class="chat-message-right mb-4">
                                                <div>
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                        class="rounded-circle mr-1" alt="Chris Wood" width="40" height="40" />
                                                    <div class="text-muted small text-nowrap mt-2">2:38 am</div>
                                                </div>
                                                <div class="flex-shrink-1 bg-light  me-3 message">
                                                    <div class="font-weight-bold mb-1">You</div>
                                                    Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.
                                                </div>
                                            </div>

                                            <div class="chat-message-left pb-4">
                                                <div>
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                        class="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
                                                    <div class="text-muted small text-nowrap mt-2">2:39 am</div>
                                                </div>
                                                <div class="flex-shrink-1 bg-light  ms-3 message">
                                                    <div class="font-weight-bold mb-1">Sharon Lessman</div>
                                                    Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.
                                                </div>
                                            </div>

                                            <div class="chat-message-right mb-4">
                                                <div>
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                        class="rounded-circle mr-1" alt="Chris Wood" width="40" height="40" />
                                                    <div class="text-muted small text-nowrap mt-2">2:40 am</div>
                                                </div>
                                                <div class="flex-shrink-1 bg-light  me-3 message">
                                                    <div class="font-weight-bold mb-1">You</div>
                                                    Cum ea graeci tractatos.
                                                </div>
                                            </div>

                                            <div class="chat-message-right mb-4">
                                                <div>
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                        class="rounded-circle mr-1" alt="Chris Wood" width="40" height="40" />
                                                    <div class="text-muted small text-nowrap mt-2">2:41 am</div>
                                                </div>
                                                <div class="flex-shrink-1 bg-light  me-3 message">
                                                    <div class="font-weight-bold mb-1">You</div>
                                                    Morbi finibus, lorem id placerat ullamcorper, nunc enim ultrices massa, id
                                                    dignissim metus urna eget purus.
                                                </div>
                                            </div>

                                            <div class="chat-message-left pb-4">
                                                <div>
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                        class="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
                                                    <div class="text-muted small text-nowrap mt-2">2:42 am</div>
                                                </div>
                                                <div class="flex-shrink-1 bg-light  ms-3 message">
                                                    <div class="font-weight-bold mb-1">Sharon Lessman</div>
                                                    Sed pulvinar, massa vitae interdum pulvinar, risus lectus porttitor magna, vitae
                                                    commodo lectus mauris et velit.
                                                    Proin ultricies placerat imperdiet. Morbi varius quam ac venenatis tempus.
                                                </div>
                                            </div>

                                            <div class="chat-message-right mb-4">
                                                <div>
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                        class="rounded-circle mr-1" alt="Chris Wood" width="40" height="40" />
                                                    <div class="text-muted small text-nowrap mt-2">2:43 am</div>
                                                </div>
                                                <div class="flex-shrink-1 bg-light  me-3 message">
                                                    <div class="font-weight-bold mb-1">You</div>
                                                    Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.
                                                </div>
                                            </div>

                                            <div class="chat-message-left pb-4">
                                                <div>
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                        class="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
                                                    <div class="text-muted small text-nowrap mt-2">2:44 am</div>
                                                </div>
                                                <div class="flex-shrink-1 bg-light  ms-3 message">
                                                    <div class="font-weight-bold mb-1">Sharon Lessman</div>
                                                    Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="flex-grow-0 py-3 px-4 border-top">
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Type your message" />
                                            <button class="btn btn-primary">Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-12 col-lg-5 col-xl-2 border-right d-none d-lg-block">
                            <div className="card h-100 card-right">
                                <div className="card-header">
                                    <div class="py-2 px-4">
                                        <div class="d-flex justify-content-end align-items-center py-2">
                                            {/* <div class="flex-grow-1 ps-3"> */}
                                            <div class="dropdown">
                                                <button class="btn btn-secondary " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </div>
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body px-4">
                                    <div class="d-flex flex-column" style={{ gap: '20px' }}>
                                        <div class="text-center">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                class="rounded-circle mr-1 img-fluid mb-2" alt="Chris Wood" width="100" height="100" />
                                            <h5>Sharon Lessman</h5>
                                        </div>
                                        <div className="photos-wrapper">
                                            <div className="title d-flex justify-content-between mb-2">
                                                <p className="mb-0">Photos</p>
                                                <Link href="">
                                                    <p className="mb-0">See All</p>
                                                </Link>
                                            </div>
                                            <div className="photos">
                                                <div className="row g-2">
                                                    <div className="col-lg-4">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="img-fluid rounded" />
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" className="img-fluid rounded" />
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" className="img-fluid rounded" />
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" className="img-fluid rounded" />
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" className="img-fluid rounded" />
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" className="img-fluid rounded" />
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="img-fluid rounded" />
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" className="img-fluid rounded" />
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" className="img-fluid rounded" />
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" className="img-fluid rounded" />
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" className="img-fluid rounded" />
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" className="img-fluid rounded" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="file-wrapper">
                                            <div className="title d-flex justify-content-between mb-2">
                                                <p className="mb-0">Files</p>
                                                <Link href="">
                                                    <p className="mb-0">See All</p>
                                                </Link>
                                            </div>
                                            <div className="files">
                                                <ul class="nav flex-column">
                                                    <li class="nav-item">
                                                        <div className="document-card">
                                                            <div className="document-icon">
                                                                <img src="/assets/images/file-icons/word.png" alt="" className='img-fluid' />
                                                            </div>
                                                            <div className="document-info">
                                                                <h6 className='mb-1'>Document</h6>
                                                                <small className='text-muted'>16 MB</small>
                                                            </div>
                                                            <div className="download">
                                                                <button className="btn">
                                                                    <i class="ri-download-line"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="nav-item">
                                                        <div className="document-card">
                                                            <div className="document-icon">
                                                                <img src="/assets/images/file-icons/word.png" alt="" className='img-fluid' />
                                                            </div>
                                                            <div className="document-info">
                                                                <h6 className='mb-1'>Document</h6>
                                                                <small className='text-muted'>16 MB</small>
                                                            </div>
                                                            <div className="download">
                                                                <button className="btn">
                                                                    <i class="ri-download-line"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="nav-item">
                                                        <div className="document-card">
                                                            <div className="document-icon">
                                                                <img src="/assets/images/file-icons/word.png" alt="" className='img-fluid' />
                                                            </div>
                                                            <div className="document-info">
                                                                <h6 className='mb-1'>Document</h6>
                                                                <small className='text-muted'>16 MB</small>
                                                            </div>
                                                            <div className="download">
                                                                <button className="btn">
                                                                    <i class="ri-download-line"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="nav-item">
                                                        <div className="document-card">
                                                            <div className="document-icon">
                                                                <img src="/assets/images/file-icons/word.png" alt="" className='img-fluid' />
                                                            </div>
                                                            <div className="document-info">
                                                                <h6 className='mb-1'>Document</h6>
                                                                <small className='text-muted'>16 MB</small>
                                                            </div>
                                                            <div className="download">
                                                                <button className="btn">
                                                                    <i class="ri-download-line"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="nav-item">
                                                        <div className="document-card">
                                                            <div className="document-icon">
                                                                <img src="/assets/images/file-icons/word.png" alt="" className='img-fluid' />
                                                            </div>
                                                            <div className="document-info">
                                                                <h6 className='mb-1'>Document</h6>
                                                                <small className='text-muted'>16 MB</small>
                                                            </div>
                                                            <div className="download">
                                                                <button className="btn">
                                                                    <i class="ri-download-line"></i>
                                                                </button>
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
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div className="card h-100 card-right">
                                <div className="card-header">
                                    <div class="py-2 px-4">
                                        <div class="d-flex justify-content-end align-items-center py-2">
                                            {/* <div class="flex-grow-1 ps-3"> */}
                                            <div class="dropdown">
                                                <button class="btn btn-secondary " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </div>
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body px-4">
                                    <div class="d-flex flex-column" style={{ gap: '20px' }}>
                                        <div class="text-center">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                class="rounded-circle mr-1 img-fluid mb-2" alt="Chris Wood" width="100" height="100" />
                                            <h5>Sharon Lessman</h5>
                                        </div>
                                        <div className="photos-wrapper">
                                            <div className="title d-flex justify-content-between mb-2">
                                                <p className="mb-0">Photos</p>
                                                <Link href="">
                                                    <p className="mb-0">See All</p>
                                                </Link>
                                            </div>
                                            <div className="photos">
                                                <div className="row g-2">
                                                    <div className="col-lg-4">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="img-fluid rounded" />
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" className="img-fluid rounded" />
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" className="img-fluid rounded" />
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" className="img-fluid rounded" />
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" className="img-fluid rounded" />
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" className="img-fluid rounded" />
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="img-fluid rounded" />
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" className="img-fluid rounded" />
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" className="img-fluid rounded" />
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" className="img-fluid rounded" />
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" className="img-fluid rounded" />
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" className="img-fluid rounded" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="file-wrapper">
                                            <div className="title d-flex justify-content-between mb-2">
                                                <p className="mb-0">Files</p>
                                                <Link href="">
                                                    <p className="mb-0">See All</p>
                                                </Link>
                                            </div>
                                            <div className="files">
                                                <ul class="nav flex-column">
                                                    <li class="nav-item">
                                                        <div className="document-card">
                                                            <div className="document-icon">
                                                                <img src="/assets/images/file-icons/word.png" alt="" className='img-fluid' />
                                                            </div>
                                                            <div className="document-info">
                                                                <h6 className='mb-1'>Document</h6>
                                                                <small className='text-muted'>16 MB</small>
                                                            </div>
                                                            <div className="download">
                                                                <button className="btn">
                                                                    <i class="ri-download-line"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="nav-item">
                                                        <div className="document-card">
                                                            <div className="document-icon">
                                                                <img src="/assets/images/file-icons/word.png" alt="" className='img-fluid' />
                                                            </div>
                                                            <div className="document-info">
                                                                <h6 className='mb-1'>Document</h6>
                                                                <small className='text-muted'>16 MB</small>
                                                            </div>
                                                            <div className="download">
                                                                <button className="btn">
                                                                    <i class="ri-download-line"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="nav-item">
                                                        <div className="document-card">
                                                            <div className="document-icon">
                                                                <img src="/assets/images/file-icons/word.png" alt="" className='img-fluid' />
                                                            </div>
                                                            <div className="document-info">
                                                                <h6 className='mb-1'>Document</h6>
                                                                <small className='text-muted'>16 MB</small>
                                                            </div>
                                                            <div className="download">
                                                                <button className="btn">
                                                                    <i class="ri-download-line"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="nav-item">
                                                        <div className="document-card">
                                                            <div className="document-icon">
                                                                <img src="/assets/images/file-icons/word.png" alt="" className='img-fluid' />
                                                            </div>
                                                            <div className="document-info">
                                                                <h6 className='mb-1'>Document</h6>
                                                                <small className='text-muted'>16 MB</small>
                                                            </div>
                                                            <div className="download">
                                                                <button className="btn">
                                                                    <i class="ri-download-line"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="nav-item">
                                                        <div className="document-card">
                                                            <div className="document-icon">
                                                                <img src="/assets/images/file-icons/word.png" alt="" className='img-fluid' />
                                                            </div>
                                                            <div className="document-info">
                                                                <h6 className='mb-1'>Document</h6>
                                                                <small className='text-muted'>16 MB</small>
                                                            </div>
                                                            <div className="download">
                                                                <button className="btn">
                                                                    <i class="ri-download-line"></i>
                                                                </button>
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
            </main>
        </HomeLayout>
    )
}
