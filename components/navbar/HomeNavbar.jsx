"use client"
import { fetchUserProfileById } from '@/app/api/crud';
import { Avatar } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function HomeNavbar() {

    const [userData, setUserData] = useState([]);
    const [currentUserId, setCurrentUserId] = useState(null);

    // const session = useSession();

    const { data: session, status } = useSession();


    // console.log('session: ', session?.user?.id);
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

    useEffect(() => {
        if (session) {
            setCurrentUserId(session?.user?.id); // Set currentUserId from session
        }
    }, [session]);

    const router = useRouter()
    const pathname = usePathname()
    console.log('pathname: ', pathname)

    const getUserData = async () => {
        if (currentUserId) {
            const data = await fetchUserProfileById(currentUserId);
            setUserData(data);
        }
    };

    useEffect(() => {
        getUserData();
    }, [currentUserId]);

    // console.log('userData: ', userData)

    return (
        <>
            <div className={`nav-bar ${pathname == '/table-discovery' || pathname == '/' ? 'fixed-top' : 'navbar-scrolled'} ${isScrolled && pathname !== '/virtual-table' ? 'navbar-scrolled fixed-top' : ''}`}>
                <div className="container">
                    {/* <div className='nav-bar-links d-none'>
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

                    </div> */}

                    <nav class="navbar navbar-expand-lg nav-bar-links">
                        <div class="container-fluid">
                            <a class="navbar-brand nav-bar_logo" href="#">
                                <Link href="/">
                                    <img src={'/assets/images/plutologowhite.svg'} alt='logo' className="img-fluid" />
                                </Link>
                            </a>

                            <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar-offcanvas" aria-controls="offcanvasExample">
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
                                            <Link class="nav-link" href="/dashboard">Dashboard</Link>
                                        </li>
                                        {
                                            status === 'authenticated' &&
                                            <li class="nav-item ">
                                                <Link class="nav-link" href="/table-discovery">For You</Link>
                                            </li>
                                        }
                                        <li class="nav-item ">
                                            <Link class="nav-link" href="/everyone">Everyone</Link>
                                        </li>
                                        <li class="nav-item ">
                                            <Link class="nav-link" href="#">Your Files</Link>
                                        </li>
                                        {
                                            status === 'authenticated' &&
                                            <li class="nav-item ">
                                                <Link class="nav-link" href="/profile/course-selection">Course Selection</Link>
                                            </li>
                                        }
                                    </ul>
                                    {/* <div className='nav-bar-links-signup d-lg-none'>
                                        <button type="button">
                                            <Link href="/login">Sign in</Link>
                                        </button>
                                    </div> */}
                                    <div className='nav-bar-links-signup '>
                                        {
                                            status === 'unauthenticated' ?
                                                <button type="button">
                                                    <Link href="/login">Sign in</Link>
                                                </button> :
                                                <button type="button">
                                                    <a href="javascript:void(0)" onClick={() => signOut()}>Sign out</a>
                                                </button>
                                        }
                                    </div>
                                </div>
                            </div>

                            {/* <div className='nav-bar-links-signup d-none d-lg-block'>
                                {
                                    status === 'unauthenticated' ?
                                        <button type="button">
                                            <Link href="/login">Sign in</Link>
                                        </button> :
                                        <button type="button">
                                            <a href="javascript:void(0)" onClick={() => signOut()}>Sign out</a>
                                        </button>
                                }
                            </div> */}


                            {
                                status === 'authenticated' && <div class="btn-group ms-3" style={{ cursor: "pointer" }}>
                                    {/* <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Action
                                </button> */}
                                    <Avatar
                                        alt={userData?.userID}
                                        src={userData?.awsFileUrl}
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        className='avatar'
                                        sx={{
                                            width: { xs: 35, sm: 48, md: 48, lg: 56, xl: 56 },
                                            height: { xs: 35, sm: 48, md: 48, lg: 56, xl: 56 },
                                        }}
                                    />
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item text-capitalize" href="javascript:void(0)"><strong>{userData?.userID}</strong></a></li>
                                        <li><Link class="dropdown-item" href="/profile">Profile</Link></li>
                                    </ul>
                                </div>
                            }


                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
