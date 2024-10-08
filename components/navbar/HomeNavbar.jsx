"use client"
import { useSession } from 'next-auth/react';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function HomeNavbar() {

    const { data, status } = useSession()

    console.log('session: ', data)

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 50); // Change 50 to the scroll threshold you want
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`nav-bar fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
                <div className="container">
                    <div className='nav-bar-links d-none'>
                        <div className='nav-bar_logo'>
                            <Link href="/">
                                <img src={'/assets/images/plutologowhite.svg'} alt='logo' className="img-fluid" />
                            </Link>
                        </div>

                        <ul className='nav nav-bar-links-container'>
                            <li class="nav-item">
                                <Link class="nav-link" href="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="/help">Help</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="/premium">Premium</Link>
                            </li>
                        </ul>


                        <div className='nav-bar-links-signup'>
                            <button type="button">
                                <Link href="/login">Sign in</Link>
                            </button>
                        </div>

                    </div>

                    <nav class="navbar navbar-expand-lg nav-bar-links">
                        <div class="container-fluid">
                            <a class="navbar-brand nav-bar_logo" href="#">
                                <Link href="/">
                                    <img src={'/assets/images/plutologowhite.svg'} alt='logo' className="img-fluid" />
                                </Link>
                            </a>

                            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar-offcanvas" aria-controls="offcanvasExample">
                                {/* <span class="navbar-toggler-icon"></span> */}
                                <i class="fa-solid fa-bars"></i>
                            </button>

                            <div class="offcanvas offcanvas-end navbar-offcanvas" tabindex="-1" id="navbar-offcanvas" aria-labelledby="offcanvasExampleLabel">
                                <div className="offcanvas-header">
                                    <a class="navbar-brand" href="#">
                                        <Link href="/">
                                            <img src={'/assets/images/pluto-profile-logo.svg'} alt='logo' className="img-fluid" />
                                        </Link>
                                    </a>
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul class="navbar-nav m-lg-auto nav-bar-links-container">
                                        <li class="nav-item ">
                                            <Link class="nav-link" href="/">Home</Link>
                                        </li>
                                        <li class="nav-item ">
                                            <Link class="nav-link" href="/about">About</Link>
                                        </li>
                                        <li class="nav-item ">
                                            <Link class="nav-link" href="/help">Help</Link>
                                        </li>
                                        <li class="nav-item ">
                                            <Link class="nav-link" href="/premium">Premium</Link>
                                        </li>
                                    </ul>
                                    <div className='nav-bar-links-signup d-lg-none'>
                                        <button type="button">
                                            <Link href="/login">Sign in</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className='nav-bar-links-signup d-none d-lg-block'>
                                {
                                    status === 'unauthenticated' ? <button type="button">
                                        <Link href="/login">Sign in</Link>
                                    </button> : <button type="button">
                                        <Link href="/login">Sign out</Link>
                                    </button>
                                }

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
