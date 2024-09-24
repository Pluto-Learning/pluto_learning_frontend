import Link from 'next/link'
import React from 'react'

export default function HomeNavbar() {
    return (
        <>
            <div className='nav-bar fixed-top'>
                <div className="container">
                    <div className='nav-bar-links'>
                        <div className='nav-bar_logo'>
                            <Link href="/">
                                <img src={'/assets/images/plutologowhite.svg'} alt='logo' className="img-fluid" />
                            </Link>
                        </div>

                        <div className='nav-bar-links-container'>
                            <p>
                                <Link href="/">Home</Link>
                            </p>
                            <p>
                                <Link href="/about">About</Link>
                            </p>
                            <p>
                                <Link href="/help">Help</Link>
                            </p>
                            <p>
                                <Link href="/premium">Premium</Link>
                            </p>
                        </div>


                        <div className='nav-bar-links-signup'>
                            <button type="button">
                                <Link href="/login">Sign in</Link>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
